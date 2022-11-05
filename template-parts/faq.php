<?php
/**
 * Question and answer accordion built on native details elements.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<div class="faq">
	<?php foreach ( neucent_faqs() as $faq ) : ?>
		<details data-reveal>
			<summary><?php echo esc_html( $faq['q'] ); ?></summary>
			<p><?php echo esc_html( $faq['a'] ); ?></p>
		</details>
	<?php endforeach; ?>
</div>
