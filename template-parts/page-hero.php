<?php
/**
 * Dark title banner used at the top of inner pages.
 *
 * Args: eyebrow, title, lead.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$args = wp_parse_args(
	isset( $args ) ? $args : array(),
	array(
		'eyebrow' => '',
		'title'   => get_the_title(),
		'lead'    => '',
	)
);
?>
<section class="page-hero">
	<div class="container">
		<?php if ( $args['eyebrow'] ) : ?>
			<p class="eyebrow"><?php echo esc_html( $args['eyebrow'] ); ?></p>
		<?php endif; ?>
		<h1><?php echo esc_html( $args['title'] ); ?></h1>
		<?php if ( $args['lead'] ) : ?>
			<p class="lead"><?php echo esc_html( $args['lead'] ); ?></p>
		<?php endif; ?>
	</div>
</section>
