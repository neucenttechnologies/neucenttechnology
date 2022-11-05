<?php
/**
 * Template Name: About
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'eyebrow' => 'About Neucent',
		'title'   => 'A software team that treats your product like its own',
		'lead'    => 'Neucent Technologies builds web applications, mobile apps and AI-powered software for businesses that want a partner, not just a vendor.',
	)
);
?>

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">Who we are</p>
				<h2>Engineers, designers and problem-solvers</h2>
			</div>
			<div class="prose" data-reveal>
				<p>We are a software development company focused on building products that people rely on every day. Our work spans web platforms, mobile apps and the growing set of AI capabilities that make software more helpful.</p>
				<p>We care about the unglamorous parts as much as the visible ones: clear requirements, tidy code, honest estimates, tests that run on every change and documentation your team can actually use.</p>
				<p>Our approach to AI is the same as our approach to everything else. Start from a real problem, test the idea early, and ship it with the monitoring and safeguards it needs to be trusted.</p>
			</div>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">What guides us</p>
			<h2>How we choose to work</h2>
		</div>
		<div class="card-grid card-grid-2">
			<?php foreach ( neucent_principles() as $item ) : ?>
				<article class="card" data-reveal>
					<span class="card-icon"><?php echo neucent_icon( $item['icon'], 26 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<h3><?php echo esc_html( $item['title'] ); ?></h3>
					<p><?php echo esc_html( $item['text'] ); ?></p>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">Working with us</p>
			<h2>Engagement models</h2>
			<p>Start small with a single feature or bring us in for the long run. The structure follows your needs.</p>
		</div>
		<div class="card-grid card-grid-3">
			<?php foreach ( neucent_engagement_models() as $model ) : ?>
				<article class="card" data-reveal>
					<h3><?php echo esc_html( $model['title'] ); ?></h3>
					<p><?php echo esc_html( $model['text'] ); ?></p>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<?php get_template_part( 'template-parts/cta' ); ?>

<?php
get_footer();
