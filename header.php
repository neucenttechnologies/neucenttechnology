<?php
/**
 * Site header and primary navigation.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#0a0e1a">
	<script>document.documentElement.classList.add('js');</script>
	<?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link" href="#main">Skip to content</a>

<header class="site-header" data-header>
	<div class="container header-inner">
		<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Neucent Technologies home">
			<?php neucent_logo_mark( 34 ); ?>
			<span class="brand-text">Neucent<span> Technologies</span></span>
		</a>

		<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
			<span class="sr-only">Toggle menu</span>
			<?php echo neucent_icon( 'menu', 26 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
		</button>

		<nav id="site-nav" class="site-nav" aria-label="Primary" data-nav>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'primary',
					'container'      => false,
					'menu_class'     => 'menu',
					'depth'          => 1,
					'fallback_cb'    => 'neucent_fallback_menu',
				)
			);
			?>
			<a class="btn btn-primary btn-sm nav-cta" href="<?php echo esc_url( neucent_url( 'contact' ) ); ?>">Start a project</a>
		</nav>
	</div>
</header>

<main id="main">
