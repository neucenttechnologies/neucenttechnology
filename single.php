<?php
/**
 * Single blog post.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

while ( have_posts() ) :
	the_post();
	get_template_part(
		'template-parts/page-hero',
		null,
		array(
			'eyebrow' => get_the_date(),
			'title'   => get_the_title(),
		)
	);
	?>
	<article <?php post_class( 'section' ); ?>>
		<div class="container container-narrow">
			<?php if ( has_post_thumbnail() ) : ?>
				<div class="post-hero-img"><?php the_post_thumbnail( 'large' ); ?></div>
			<?php endif; ?>
			<div class="prose entry-content">
				<?php the_content(); ?>
			</div>
			<?php wp_link_pages(); ?>
		</div>
	</article>
	<?php
endwhile;

get_template_part( 'template-parts/cta' );

get_footer();
