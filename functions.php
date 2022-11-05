<?php
/**
 * Neucent Technologies theme bootstrap.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'NEUCENT_VERSION', '1.0.0' );

require_once get_template_directory() . '/inc/content.php';
require_once get_template_directory() . '/inc/icons.php';
require_once get_template_directory() . '/inc/customizer.php';
require_once get_template_directory() . '/inc/contact-form.php';
require_once get_template_directory() . '/inc/starter-pages.php';

/**
 * Theme supports and menus.
 */
function neucent_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );
	add_theme_support( 'responsive-embeds' );
	add_theme_support( 'automatic-feed-links' );

	register_nav_menus(
		array(
			'primary' => 'Primary menu',
			'footer'  => 'Footer menu',
		)
	);
}
add_action( 'after_setup_theme', 'neucent_setup' );

/**
 * Front-end assets. System fonts only, so no third-party requests are made.
 */
function neucent_assets() {
	$uri = get_template_directory_uri();

	wp_enqueue_style( 'neucent-main', $uri . '/assets/css/main.css', array(), NEUCENT_VERSION );
	wp_enqueue_script( 'neucent-main', $uri . '/assets/js/main.js', array(), NEUCENT_VERSION, true );
}
add_action( 'wp_enqueue_scripts', 'neucent_assets' );

/**
 * Inline SVG favicon, used until a Site Icon is set in the Customizer.
 */
function neucent_favicon() {
	if ( has_site_icon() ) {
		return;
	}
	$svg = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f6bff"/><stop offset="1" stop-color="#17d4e8"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><path d="M18 48V16h7l16 20V16h7v32h-7L25 28v20z" fill="#fff"/></svg>';
	printf( '<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%s">' . "\n", rawurlencode( $svg ) );
}
add_action( 'wp_head', 'neucent_favicon', 5 );

/**
 * Meta description: excerpt for singular content, tagline otherwise.
 */
function neucent_meta_description() {
	$desc = '';
	if ( is_singular() ) {
		$desc = has_excerpt() ? get_the_excerpt() : wp_trim_words( wp_strip_all_tags( get_post_field( 'post_content', get_the_ID() ) ), 30, '' );
	}
	if ( '' === trim( $desc ) ) {
		$desc = 'Neucent Technologies builds web applications, mobile apps and AI-powered software for growing businesses.';
	}
	printf( '<meta name="description" content="%s">' . "\n", esc_attr( $desc ) );
}
add_action( 'wp_head', 'neucent_meta_description', 1 );

/**
 * Organization structured data on the front page.
 */
function neucent_schema() {
	if ( ! is_front_page() ) {
		return;
	}
	$data = array(
		'@context'  => 'https://schema.org',
		'@type'     => 'Organization',
		'name'      => 'Neucent Technologies',
		'url'       => home_url( '/' ),
		'email'     => neucent_option( 'email' ),
		'telephone' => neucent_option( 'phone' ),
	);
	echo '<script type="application/ld+json">' . wp_json_encode( array_filter( $data ), JSON_UNESCAPED_SLASHES ) . '</script>' . "\n";
}
add_action( 'wp_head', 'neucent_schema', 20 );

/**
 * URL of a site page by slug, with a sensible fallback before it exists.
 *
 * @param string $slug Page slug, or '' for the home page.
 * @return string
 */
function neucent_url( $slug = '' ) {
	if ( '' === $slug ) {
		return home_url( '/' );
	}
	$page = get_page_by_path( $slug );
	return $page ? get_permalink( $page ) : home_url( '/' . $slug . '/' );
}

/**
 * Add a body class so page-specific styling stays out of templates.
 */
function neucent_body_class( $classes ) {
	if ( is_front_page() ) {
		$classes[] = 'is-home';
	}
	return $classes;
}
add_filter( 'body_class', 'neucent_body_class' );

/**
 * Trim the default WordPress head clutter that adds no value here.
 */
remove_action( 'wp_head', 'wp_generator' );
remove_action( 'wp_head', 'wlwmanifest_link' );
remove_action( 'wp_head', 'rsd_link' );
remove_action( 'wp_head', 'wp_shortlink_wp_head' );
