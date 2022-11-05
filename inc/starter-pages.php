<?php
/**
 * On activation, create the site's pages and menus so a fresh WordPress
 * install looks finished immediately. Existing pages, menus and reading
 * settings are left alone.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Create or find a page by slug and return its ID.
 */
function neucent_ensure_page( $slug, $title, $template = '' ) {
	$existing = get_page_by_path( $slug );
	if ( $existing ) {
		return (int) $existing->ID;
	}

	$id = wp_insert_post(
		array(
			'post_type'    => 'page',
			'post_status'  => 'publish',
			'post_title'   => $title,
			'post_name'    => $slug,
			'post_content' => '',
		)
	);

	if ( is_wp_error( $id ) || ! $id ) {
		return 0;
	}
	if ( '' !== $template ) {
		update_post_meta( $id, '_wp_page_template', $template );
	}
	return (int) $id;
}

/**
 * Build a menu from page IDs and attach it to a theme location if that
 * location has no menu yet.
 */
function neucent_ensure_menu( $location, $menu_name, $page_ids ) {
	$locations = get_theme_mod( 'nav_menu_locations', array() );
	if ( ! empty( $locations[ $location ] ) ) {
		return;
	}

	$menu_id = wp_create_nav_menu( $menu_name );
	if ( is_wp_error( $menu_id ) ) {
		$menu = wp_get_nav_menu_object( $menu_name );
		if ( ! $menu ) {
			return;
		}
		$menu_id = $menu->term_id;
	}

	foreach ( $page_ids as $page_id ) {
		if ( ! $page_id ) {
			continue;
		}
		wp_update_nav_menu_item(
			$menu_id,
			0,
			array(
				'menu-item-object-id' => $page_id,
				'menu-item-object'    => 'page',
				'menu-item-type'      => 'post_type',
				'menu-item-status'    => 'publish',
			)
		);
	}

	$locations[ $location ] = $menu_id;
	set_theme_mod( 'nav_menu_locations', $locations );
}

function neucent_create_starter_content() {
	$home     = neucent_ensure_page( 'home', 'Home' );
	$services = neucent_ensure_page( 'services', 'Services', 'template-services.php' );
	$ai       = neucent_ensure_page( 'ai-solutions', 'AI Solutions', 'template-ai.php' );
	$about    = neucent_ensure_page( 'about', 'About', 'template-about.php' );
	$insights = neucent_ensure_page( 'insights', 'Insights' );
	$contact  = neucent_ensure_page( 'contact', 'Contact', 'template-contact.php' );

	// Only change reading settings on a site that still shows the default blog home.
	if ( 'posts' === get_option( 'show_on_front' ) ) {
		if ( $home ) {
			update_option( 'show_on_front', 'page' );
			update_option( 'page_on_front', $home );
		}
		if ( $insights && ! get_option( 'page_for_posts' ) ) {
			update_option( 'page_for_posts', $insights );
		}
	}

	neucent_ensure_menu( 'primary', 'Primary', array( $services, $ai, $about, $insights ) );
	neucent_ensure_menu( 'footer', 'Footer', array( $home, $services, $ai, $about, $insights, $contact ) );
}
add_action( 'after_switch_theme', 'neucent_create_starter_content' );

/**
 * Fallback menu when no menu is assigned, so navigation never disappears.
 */
function neucent_fallback_menu() {
	$pages = array(
		'services'     => 'Services',
		'ai-solutions' => 'AI Solutions',
		'about'        => 'About',
		'insights'     => 'Insights',
	);
	echo '<ul class="menu">';
	foreach ( $pages as $slug => $label ) {
		printf( '<li><a href="%s">%s</a></li>', esc_url( home_url( '/' . $slug . '/' ) ), esc_html( $label ) );
	}
	echo '</ul>';
}
