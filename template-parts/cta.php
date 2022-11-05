<?php
/**
 * Closing call to action shown above the footer.
 *
 * Args: title, text.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$args = wp_parse_args(
	isset( $args ) ? $args : array(),
	array(
		'title' => 'Have a product in mind?',
		'text'  => 'Tell us what you want to build. We will reply within one working day with questions, ideas and next steps.',
	)
);
?>
<section class="section cta-section">
	<div class="container">
		<div class="cta-card" data-reveal>
			<div>
				<h2><?php echo esc_html( $args['title'] ); ?></h2>
				<p><?php echo esc_html( $args['text'] ); ?></p>
			</div>
			<a class="btn btn-light" href="<?php echo esc_url( neucent_url( 'contact' ) ); ?>">
				Start a project <?php echo neucent_icon( 'arrow', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
			</a>
		</div>
	</div>
</section>
