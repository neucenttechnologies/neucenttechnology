<?php
/**
 * Template Name: AI Solutions
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'eyebrow' => 'AI solutions',
		'title'   => 'Practical AI, built into the software you run',
		'lead'    => 'We turn language models, computer vision and machine learning into features your team and customers use every day.',
	)
);
?>

<section class="section">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">What we build</p>
			<h2>Six ways AI earns its place in a product</h2>
		</div>
		<div class="card-grid">
			<?php foreach ( neucent_ai_capabilities() as $cap ) : ?>
				<article class="card" data-reveal>
					<span class="card-icon"><?php echo neucent_icon( $cap['icon'], 26 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
					<h3><?php echo esc_html( $cap['title'] ); ?></h3>
					<p><?php echo esc_html( $cap['summary'] ); ?></p>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section-dark">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">Our approach</p>
			<h2>From idea to a feature people trust</h2>
			<p>AI projects go wrong when they skip evaluation. Ours are organised around it.</p>
		</div>
		<?php get_template_part( 'template-parts/process', null, array( 'steps' => neucent_ai_steps() ) ); ?>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">Responsible by design</p>
				<h2>Safeguards are part of the build</h2>
				<p>Reliable AI is mostly careful engineering around the model. These practices apply to every project.</p>
			</div>
			<div class="feature-list">
				<?php foreach ( neucent_ai_principles() as $item ) : ?>
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
			<p class="eyebrow">AI toolkit</p>
			<h2>What we work with</h2>
		</div>
		<?php $stack = neucent_stack(); ?>
		<ul class="chips chips-lg" data-reveal>
			<?php foreach ( array_merge( $stack['AI'], array( 'Python', 'FastAPI', 'PostgreSQL', 'Docker' ) ) as $item ) : ?>
				<li><?php echo esc_html( $item ); ?></li>
			<?php endforeach; ?>
		</ul>
	</div>
</section>

<?php
get_template_part(
	'template-parts/cta',
	null,
	array(
		'title' => 'Not sure where AI fits?',
		'text'  => 'Describe the task that slows your team down. We will tell you honestly whether AI helps and what a first pilot would look like.',
	)
);

get_footer();
