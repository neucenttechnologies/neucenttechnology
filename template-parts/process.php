<?php
/**
 * Numbered step list. Args: steps (array of title/text pairs).
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$steps = isset( $args['steps'] ) ? $args['steps'] : neucent_process();
?>
<ol class="steps-list">
	<?php foreach ( $steps as $i => $step ) : ?>
		<li data-reveal>
			<span class="step-num"><?php echo esc_html( str_pad( (string) ( $i + 1 ), 2, '0', STR_PAD_LEFT ) ); ?></span>
			<h3><?php echo esc_html( $step['title'] ); ?></h3>
			<p><?php echo esc_html( $step['text'] ); ?></p>
		</li>
	<?php endforeach; ?>
</ol>
