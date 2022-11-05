<?php
/**
 * Template Name: Services
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'eyebrow' => 'Services',
		'title'   => 'Software, designed and built end to end',
		'lead'    => 'Web, mobile, AI and cloud engineering from one team, with design and quality assurance included.',
	)
);
?>

<section class="section">
	<div class="container">
		<div class="service-list">
			<?php foreach ( neucent_services() as $i => $service ) : ?>
				<article class="service-row <?php echo 0 === $i % 2 ? '' : 'is-flip'; ?>" id="<?php echo esc_attr( $service['slug'] ); ?>" data-reveal>
					<div class="service-intro">
						<span class="card-icon"><?php echo neucent_icon( $service['icon'], 28 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></span>
						<h2><?php echo esc_html( $service['title'] ); ?></h2>
						<p><?php echo esc_html( $service['summary'] ); ?></p>
						<?php if ( ! empty( $service['link'] ) ) : ?>
							<a class="text-link" href="<?php echo esc_url( neucent_url( $service['link'] ) ); ?>">Explore our AI solutions <?php echo neucent_icon( 'arrow', 16 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
						<?php endif; ?>
					</div>
					<ul class="check-list check-list-dark">
						<?php foreach ( $service['points'] as $point ) : ?>
							<li><?php echo neucent_icon( 'check', 20 ); // phpcs:ignore WordPress.Security.EscapeOutput ?> <?php echo esc_html( $point ); ?></li>
						<?php endforeach; ?>
					</ul>
				</article>
			<?php endforeach; ?>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">Ways to work together</p>
			<h2>Pick the model that fits your stage</h2>
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

<section class="section">
	<div class="container">
		<div class="section-head" data-reveal>
			<p class="eyebrow">Our process</p>
			<h2>How a project runs</h2>
		</div>
		<?php get_template_part( 'template-parts/process' ); ?>
	</div>
</section>

<?php get_template_part( 'template-parts/cta' ); ?>

<?php
get_footer();
