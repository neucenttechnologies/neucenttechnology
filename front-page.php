<?php
/**
 * Home page.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

$ai_url = neucent_url( 'ai-solutions' );
?>

<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<p class="eyebrow">Software development company</p>
			<h1>Web, mobile and <span class="grad-text">AI software</span>, built to ship.</h1>
			<p class="lead">Neucent Technologies designs and engineers web applications, mobile apps and AI-powered systems for teams that need dependable software, from the first prototype through to production.</p>
			<div class="btn-row">
				<a class="btn btn-primary" href="<?php echo esc_url( neucent_url( 'contact' ) ); ?>">Start a project <?php echo neucent_icon( 'arrow', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
				<a class="btn btn-ghost" href="<?php echo esc_url( $ai_url ); ?>">Explore AI solutions</a>
			</div>
			<ul class="hero-tags" aria-label="What we build">
				<li>Web apps</li>
				<li>Mobile apps</li>
				<li>AI assistants</li>
				<li>Automation</li>
			</ul>
		</div>

		<div class="hero-visual" aria-hidden="true">
			<div class="console">
				<div class="console-bar"><i></i><i></i><i></i><span>assistant preview</span></div>
				<div class="console-body">
					<p class="msg msg-user">Which invoices from last month are still unpaid?</p>
					<ul class="console-steps">
						<li class="done">Searching billing records</li>
						<li class="done">Matching 3 customers</li>
						<li class="run">Drafting reminder emails</li>
					</ul>
					<p class="msg msg-ai">Found 3 open invoices. Reminders are drafted and waiting for your approval.</p>
				</div>
			</div>
			<div class="float-chip chip-web"><?php echo neucent_icon( 'web', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?> Web app</div>
			<div class="float-chip chip-mobile"><?php echo neucent_icon( 'mobile', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?> Mobile app</div>
			<div class="float-chip chip-ai"><?php echo neucent_icon( 'ai', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?> AI agent</div>
		</div>
	</div>
</section>

<section class="section" id="services">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">What we build</p>
			<h2>Everything you need to take a product from idea to launch</h2>
			<p>One team across design, engineering, AI and operations, so nothing gets lost between handoffs.</p>
		</div>

		<div class="card-grid">
			<?php foreach ( neucent_services() as $service ) : ?>
				<article class="card" data-reveal>
					<span class="card-icon"><?php echo neucent_icon( $service['icon'], 26 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<h3><?php echo esc_html( $service['title'] ); ?></h3>
					<p><?php echo esc_html( $service['summary'] ); ?></p>
					<a class="text-link" href="<?php echo esc_url( neucent_url( 'services' ) . '#' . $service['slug'] ); ?>">Learn more <?php echo neucent_icon( 'arrow', 16 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section-dark ai-band">
	<div class="container ai-band-grid">
		<div data-reveal>
			<p class="eyebrow">AI solutions</p>
			<h2>AI that does real work inside your software</h2>
			<p class="lead">We skip the demo-only chatbot. Our AI work is tied to a business task, tested on your own data and shipped with the safeguards a live product needs.</p>
			<ul class="check-list">
				<li><?php echo neucent_icon( 'check', 20 ); // phpcs:ignore WordPress.Security.EscapeOutput ?> Answers grounded in your documents, with sources</li>
				<li><?php echo neucent_icon( 'check', 20 ); // phpcs:ignore WordPress.Security.EscapeOutput ?> Human approval on the steps that matter</li>
				<li><?php echo neucent_icon( 'check', 20 ); // phpcs:ignore WordPress.Security.EscapeOutput ?> Quality and cost tracked from day one</li>
			</ul>
			<a class="btn btn-primary" href="<?php echo esc_url( $ai_url ); ?>">See what we build with AI <?php echo neucent_icon( 'arrow', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
		</div>

		<div class="mini-grid" data-reveal>
			<?php foreach ( neucent_ai_capabilities() as $cap ) : ?>
				<div class="mini-card">
					<span class="card-icon"><?php echo neucent_icon( $cap['icon'], 22 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<h3><?php echo esc_html( $cap['title'] ); ?></h3>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">How we work</p>
			<h2>A clear path from first call to live product</h2>
		</div>
		<?php get_template_part( 'template-parts/process' ); ?>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">Technology</p>
			<h2>Modern tools, chosen for your problem</h2>
			<p>We pick the stack that fits your team and goals. These are the technologies we work with most.</p>
		</div>
		<div class="stack-grid">
			<?php foreach ( neucent_stack() as $group => $items ) : ?>
				<div class="stack-group" data-reveal>
					<h3><?php echo esc_html( $group ); ?></h3>
					<ul class="chips">
						<?php foreach ( $items as $item ) : ?>
							<li><?php echo esc_html( $item ); ?></li>
						<?php endforeach; ?>
					</ul>
				</div>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">Why Neucent</p>
				<h2>Small enough to care, capable enough to deliver</h2>
				<p>We keep the team close to the work and the work close to you.</p>
			</div>
			<div class="feature-list">
				<?php foreach ( neucent_principles() as $item ) : ?>
					<div class="feature" data-reveal>
						<span class="card-icon"><?php echo neucent_icon( $item['icon'], 24 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						<div>
							<h3><?php echo esc_html( $item['title'] ); ?></h3>
							<p><?php echo esc_html( $item['text'] ); ?></p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">Industries</p>
			<h2>Software for the way your industry works</h2>
		</div>
		<ul class="chips chips-lg" data-reveal>
			<?php foreach ( neucent_industries() as $industry ) : ?>
				<li><?php echo esc_html( $industry ); ?></li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>

<section class="section">
	<div class="container container-narrow">
		<div class="section-head" data-reveal>
			<p class="eyebrow">Questions</p>
			<h2>Things people ask before we start</h2>
		</div>
		<?php get_template_part( 'template-parts/faq' ); ?>
	</div>
</section>

<?php get_template_part( 'template-parts/cta' ); ?>

<?php
get_footer();
