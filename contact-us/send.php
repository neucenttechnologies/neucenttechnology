<?php
/**
 * Contact form handler.
 *
 * Receives the POST from /contact-us/, validates it, saves it to the database
 * (if one is configured) and emails the team (if an address is configured).
 * The visitor is then redirected back to the form with ?sent=1 or ?error=<code>,
 * which contact-us/index.html turns into a message.
 *
 * Settings live in ../config.php (see ../config.sample.php). Nothing secret is
 * kept in this file. Every database value goes through a prepared statement,
 * and no visitor-supplied text is ever placed into a mail header.
 */

declare(strict_types=1);

// Keep the option keys in step with formServices / formBudgets in src/content.js.
const NT_SERVICES = ['web', 'mobile', 'ai', 'cloud', 'iot', 'school', 'design', 'hire', 'other'];
const NT_BUDGETS  = ['under-5k', '5k-15k', '15k-50k', '50k-plus', 'unsure'];
const NT_TIMELINES = ['asap', '1-3m', '3-6m', 'flexible']; // keep in step with formTimelines in src/content.js

const NT_MAX_PER_HOUR = 5;   // submissions allowed per visitor address per hour
const NT_MIN_FILL_MS  = 1500; // faster than this after page load looks like a bot

header('X-Robots-Tag: noindex');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
	nt_redirect([]);
}

/**
 * Send the visitor back to the contact page.
 *
 * @param array<string,string> $query
 */
function nt_redirect(array $query): void
{
	$url = '/contact-us/' . ($query ? '?' . http_build_query($query) : '') . '#contact-form';
	header('Location: ' . $url, true, 303);
	exit;
}

/** Load settings; a missing file simply means "no database, no email". */
function nt_config(): array
{
	$file = dirname(__DIR__) . '/config.php';
	if (!is_file($file)) {
		return [];
	}
	$config = require $file;
	return is_array($config) ? $config : [];
}

/** Trim, drop control characters, cap length. Newlines are kept only when asked for. */
function nt_clean(string $value, int $max, bool $keepNewlines = false): string
{
	$value = str_replace(["\r\n", "\r"], "\n", $value);
	$pattern = $keepNewlines ? '/[^\P{C}\n]+/u' : '/\p{C}+/u';
	$value = preg_replace($pattern, '', $value) ?? '';
	return mb_substr(trim($value), 0, $max);
}

/** True when a visitor has already submitted too often. Records this attempt otherwise. */
function nt_rate_limited(string $ip): bool
{
	$file = sys_get_temp_dir() . '/neucent_rl_' . md5($ip);
	$now = time();
	$fh = @fopen($file, 'c+');
	if (!$fh) {
		return false; // cannot track, so do not block real visitors
	}
	flock($fh, LOCK_EX);
	$hits = json_decode((string) stream_get_contents($fh), true);
	$hits = is_array($hits) ? array_filter($hits, static fn ($t) => is_int($t) && $t > $now - 3600) : [];
	$limited = count($hits) >= NT_MAX_PER_HOUR;
	if (!$limited) {
		$hits[] = $now;
	}
	ftruncate($fh, 0);
	rewind($fh);
	fwrite($fh, json_encode(array_values($hits)));
	flock($fh, LOCK_UN);
	fclose($fh);
	return $limited;
}

/** Save the enquiry. Returns false when no database is configured or the insert fails. */
function nt_store(array $config, array $row): bool
{
	$db = $config['db'] ?? [];
	if (empty($db['dsn']) || !class_exists('PDO')) {
		return false;
	}
	try {
		$pdo = new PDO($db['dsn'], $db['user'] ?? null, $db['pass'] ?? null, [
			PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
			PDO::ATTR_TIMEOUT => 5,
		]);

		if ($pdo->getAttribute(PDO::ATTR_DRIVER_NAME) === 'sqlite') {
			$pdo->exec('CREATE TABLE IF NOT EXISTS website_enquiries (
				id INTEGER PRIMARY KEY AUTOINCREMENT, created_at TEXT NOT NULL, name TEXT NOT NULL,
				email TEXT NOT NULL, phone TEXT NOT NULL, service TEXT NOT NULL, budget TEXT NOT NULL, timeline TEXT NOT NULL DEFAULT \'\', message TEXT NOT NULL)');
		} else {
			$pdo->exec("CREATE TABLE IF NOT EXISTS website_enquiries (
				id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, created_at DATETIME NOT NULL, name VARCHAR(100) NOT NULL,
				email VARCHAR(120) NOT NULL, phone VARCHAR(30) NOT NULL DEFAULT '', service VARCHAR(20) NOT NULL,
				budget VARCHAR(20) NOT NULL, timeline VARCHAR(20) NOT NULL DEFAULT '', message TEXT NOT NULL) DEFAULT CHARSET=utf8mb4");
		}

		$stmt = $pdo->prepare('INSERT INTO website_enquiries (created_at, name, email, phone, service, budget, timeline, message) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
		return $stmt->execute([
			gmdate('Y-m-d H:i:s'), $row['name'], $row['email'], $row['phone'], $row['service'], $row['budget'], $row['timeline'], $row['message'],
		]);
	} catch (Throwable $e) {
		error_log('[neucent-contact] database: ' . $e->getMessage());
		return false;
	}
}

/** Email the team. Returns false when no valid recipient is configured or the mail is refused. */
function nt_mail(array $config, array $row): bool
{
	$to = (string) ($config['to_email'] ?? '');
	if (!filter_var($to, FILTER_VALIDATE_EMAIL)) {
		return false;
	}

	$host = strtolower(preg_replace('/[^a-z0-9.-]/i', '', preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? ''))) ?? '');
	$host = preg_replace('/^www\./', '', $host) ?: 'localhost';
	$from = (string) ($config['from_email'] ?? '');
	if (!filter_var($from, FILTER_VALIDATE_EMAIL)) {
		$from = 'no-reply@' . $host;
	}

	$services = [
		'web' => 'Web or e-commerce', 'mobile' => 'Mobile app', 'ai' => 'AI, chatbot or voicebot',
		'cloud' => 'Cloud, DevOps or security', 'iot' => 'IoT or blockchain',
		'school' => 'School management system', 'design' => 'Design, testing or support',
		'hire' => 'Hire dedicated developers', 'other' => 'Something else',
	];
	$budgets = [
		'under-5k' => 'Under $5,000', '5k-15k' => '$5,000 to $15,000', '15k-50k' => '$15,000 to $50,000',
		'50k-plus' => 'Over $50,000', 'unsure' => 'Not sure yet',
	];
	$service = $services[$row['service']] ?? 'Something else';
	$budget = $budgets[$row['budget']] ?? 'Not sure yet';
	$timelines = ['asap' => 'As soon as possible', '1-3m' => 'Within 1 to 3 months', '3-6m' => 'In 3 to 6 months', 'flexible' => 'Just exploring'];
	$timeline = $timelines[$row['timeline']] ?? 'Just exploring';
	$phone = $row['phone'] !== '' ? $row['phone'] : 'Not given';
	$when = (new DateTime('now', new DateTimeZone('Asia/Kolkata')))->format('d M Y, h:i A') . ' IST';

	$text = "NEW WEBSITE ENQUIRY\n"
		. "===================\n\n"
		. 'Name:          ' . $row['name'] . "\n"
		. 'Email:         ' . $row['email'] . "\n"
		. 'Phone:         ' . $phone . "\n"
		. 'Interested in: ' . $service . "\n"
		. 'Budget:        ' . $budget . "\n"
		. 'Start:         ' . $timeline . "\n"
		. 'Received:      ' . $when . "\n\n"
		. "MESSAGE\n-------\n" . $row['message'] . "\n\n"
		. "Reply to this email to answer the customer directly.\n";

	$h = static fn (string $v): string => htmlspecialchars($v, ENT_QUOTES, 'UTF-8');
	$line = static fn (string $label, string $value): string =>
		'<tr><td style="padding:8px 12px;color:#667085;width:130px;border-bottom:1px solid #eaecf0">' . $label
		. '</td><td style="padding:8px 12px;font-weight:600;border-bottom:1px solid #eaecf0">' . $value . '</td></tr>';
	$html = '<!doctype html><html><body style="margin:0;background:#f2f4f7;font-family:Arial,Helvetica,sans-serif;color:#101828">'
		. '<div style="max-width:620px;margin:0 auto;padding:20px">'
		. '<div style="background:#0b5fff;color:#fff;padding:16px 20px;border-radius:8px 8px 0 0">'
		. '<div style="font-size:12px;letter-spacing:1px;text-transform:uppercase;opacity:.85">Neucent Technologies website</div>'
		. '<div style="font-size:20px;font-weight:700;margin-top:4px">New enquiry: ' . $h($service) . '</div></div>'
		. '<div style="background:#fff;padding:8px 8px 20px;border-radius:0 0 8px 8px">'
		. '<table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;border-collapse:collapse">'
		. $line('Name', $h($row['name']))
		. $line('Email', '<a href="mailto:' . $h($row['email']) . '" style="color:#0b5fff">' . $h($row['email']) . '</a>')
		. $line('Phone', $row['phone'] !== '' ? '<a href="tel:' . $h(preg_replace('/[^0-9+]/', '', $row['phone']) ?? '') . '" style="color:#0b5fff">' . $h($row['phone']) . '</a>' : 'Not given')
		. $line('Interested in', $h($service))
		. $line('Budget', $h($budget))
		. $line('Wants to start', $h($timeline))
		. $line('Received', $h($when))
		. '</table>'
		. '<div style="margin:18px 12px 6px;font-size:12px;color:#667085;text-transform:uppercase;letter-spacing:1px">Message</div>'
		. '<div style="margin:0 12px;padding:14px;background:#f9fafb;border-left:4px solid #0b5fff;font-size:15px;line-height:1.55;white-space:pre-wrap">' . $h($row['message']) . '</div>'
		. '<p style="margin:18px 12px 0;font-size:13px;color:#667085">Reply to this email to answer the customer directly.</p>'
		. '</div></div></body></html>';

	// Subject: easy to spot and filter. Built only from validated values with no line breaks.
	$subject = mb_encode_mimeheader('[Website Enquiry] ' . $service . ' - ' . $row['name'] . ' (' . $budget . ', ' . $timeline . ')', 'UTF-8');

	$boundary = 'nt_' . bin2hex(random_bytes(8));
	$body = "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
		. chunk_split(base64_encode($text))
		. "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: base64\r\n\r\n"
		. chunk_split(base64_encode($html))
		. "--$boundary--\r\n";

	$headers = [
		'From' => 'Neucent Website <' . $from . '>',
		'Reply-To' => $row['name'] !== '' ? mb_encode_mimeheader(str_replace(['"', '<', '>', ','], '', $row['name']), 'UTF-8') . ' <' . $row['email'] . '>' : $row['email'],
		'MIME-Version' => '1.0',
		'Content-Type' => 'multipart/alternative; boundary="' . $boundary . '"',
		'X-Priority' => '2',
	];

	return @mail($to, $subject, $body, $headers);
}

// --- 1. Same-site check --------------------------------------------------------
$ownHost = strtolower((string) preg_replace('/:\d+$/', '', (string) ($_SERVER['HTTP_HOST'] ?? '')));
foreach (['HTTP_ORIGIN', 'HTTP_REFERER'] as $key) {
	if (!empty($_SERVER[$key])) {
		$sourceHost = strtolower((string) parse_url((string) $_SERVER[$key], PHP_URL_HOST));
		if ($sourceHost !== '' && $sourceHost !== $ownHost) {
			nt_redirect(['error' => 'origin']);
		}
		break;
	}
}

// --- 2. Spam traps: bots get a fake success and nothing is stored ---------------
$honeypot = (string) ($_POST['company_website'] ?? '');
$openedAt = (string) ($_POST['t'] ?? '');
if ($honeypot !== '') {
	nt_redirect(['sent' => '1']);
}
if (ctype_digit($openedAt) && strlen($openedAt) <= 13 && (time() * 1000 - (int) $openedAt) < NT_MIN_FILL_MS) {
	nt_redirect(['sent' => '1']);
}

// --- 3. Validate ---------------------------------------------------------------
$row = [
	'name'    => nt_clean((string) ($_POST['name'] ?? ''), 100),
	'email'   => nt_clean((string) ($_POST['email'] ?? ''), 120),
	'phone'   => nt_clean(preg_replace('/[^0-9+()\-\s.]/', '', (string) ($_POST['phone'] ?? '')) ?? '', 30),
	'service' => (string) ($_POST['service'] ?? ''),
	'budget'  => (string) ($_POST['budget'] ?? ''),
	'timeline' => (string) ($_POST['timeline'] ?? ''),
	'message' => nt_clean((string) ($_POST['message'] ?? ''), 5000, true),
];

$row['service'] = in_array($row['service'], NT_SERVICES, true) ? $row['service'] : 'other';
$row['budget']  = in_array($row['budget'], NT_BUDGETS, true) ? $row['budget'] : 'unsure';
$row['timeline'] = in_array($row['timeline'], NT_TIMELINES, true) ? $row['timeline'] : 'flexible';

if ($row['name'] === '' || !filter_var($row['email'], FILTER_VALIDATE_EMAIL) || mb_strlen($row['message']) < 10) {
	nt_redirect(['error' => 'invalid']);
}

// --- 4. Rate limit -------------------------------------------------------------
if (nt_rate_limited((string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown'))) {
	nt_redirect(['error' => 'rate']);
}

// --- 5. Save and notify: succeed if at least one of them worked -----------------
$config = nt_config();
$stored = nt_store($config, $row);
$mailed = nt_mail($config, $row);

if (!$stored && !$mailed) {
	error_log('[neucent-contact] enquiry could not be saved or emailed; check config.php');
	nt_redirect(['error' => 'server']);
}

nt_redirect(['sent' => '1']);
