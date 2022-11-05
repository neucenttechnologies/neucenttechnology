<?php
/**
 * Contact form settings.
 *
 * 1. Copy this file to config.php in the same folder (the web root).
 * 2. Fill in the values below.
 * 3. Never commit config.php. It is listed in .gitignore.
 *
 * The form works with either a database, an email address, or both.
 * It reports an error to the visitor only when neither is available.
 */
return [
	// Where enquiries are emailed.
	'to_email' => 'info@neucenttechnologies.com',

	// Sender address. Use a real mailbox on your own domain so mail is not marked as spam.
	'from_email' => 'no-reply@neucenttechnologies.com',

	// Optional: also save every enquiry to MySQL. The table is created automatically.
	// Remove this block (or leave 'dsn' empty) to skip the database.
	'db' => [
		'dsn'  => 'mysql:host=localhost;dbname=YOUR_DATABASE;charset=utf8mb4',
		'user' => 'YOUR_DATABASE_USER',
		'pass' => 'YOUR_DATABASE_PASSWORD',
	],
];
