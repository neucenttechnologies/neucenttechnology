<?php
/**
 * Blog listing, archives and search results.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

if ( is_home() && ! is_front_page() ) {
	$title = single_post_title( '', false );
} elseif ( is_search() ) {
	$title = 'Search results for "' . get_search_query() . '"';
} elseif ( is_archive() ) {
	$title = wp_strip_all_tags( get_the_archive_title() );
} else {
	$title = 'Insights';
}

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'eyebrow' => 'Insights',
		'title'   => $title,
		'lead'    => is_home() ? 'Notes on building web, mobile and AI products.' : '',
	)
);
?>

<section class="section">
	<div class="container">
		<?php if ( have_posts() ) : ?>
			<div class="card-grid">
				<?php
				while ( have_posts() ) :
					the_post();
					?>
					<article <?php post_class( 'card post-card' ); ?>>
						<?php if ( has_post_thumbnail() ) : ?>
							<a class="post-thumb" href="<?php the_permalink(); ?>" tabindex="-1" aria-hidden="true"><?php the_post_thumbnail( 'medium_large' ); ?></a>
						<?php endif; ?>
						<p class="post-meta"><time datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() ); ?></time></p>
						<h2 class="h3"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
						<p><?php echo esc_html( wp_trim_words( get_the_excerpt(), 28 ) ); ?></p>
						<a class="text-link" href="<?php the_permalink(); ?>">Read article <?php echo neucent_icon( 'arrow', 16 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a>
					</article>
				<?php endwhile; ?>
			</div>

			<nav class="pagination" aria-label="Pagination">
				<?php
				the_posts_pagination(
					array(
						'mid_size'  => 1,
						'prev_text' => 'Previous',
						'next_text' => 'Next',
					)
				);
				?>
			</nav>
		<?php else : ?>
			<div class="empty-state">
				<p>Nothing to show here yet. New articles will appear soon.</p>
				<a class="btn btn-primary" href="<?php echo esc_url( home_url( '/' ) ); ?>">Back to home</a>
			</div>
		<?php endif; ?>
	</div>
</section>

<?php
get_footer();
