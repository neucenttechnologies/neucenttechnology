<?php
/**
 * Page not found.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'eyebrow' => 'Error 404',
		'title'   => 'This page could not be found',
		'lead'    => 'The link may be out of date, or the page may have moved.',
	)
);
?>
<section class="section">
	<div class="container empty-state">
		<div class="btn-row">
			<a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to home</a>
			<a class="btn btn-outline" href="<?php echo esc_url( neucent_url( 'contact' ) ); ?>">Contact us</a>
		</div>
	</div>
</section>
<?php
get_footer();
