<?php
/**
 * Site footer.
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$email    = neucent_option( 'email' );
$phone    = neucent_option( 'phone' );
$whatsapp = neucent_option( 'whatsapp' );
$address  = neucent_option( 'address' );
$socials  = array(
	'linkedin' => array( 'LinkedIn', neucent_option( 'linkedin' ) ),
	'github'   => array( 'GitHub', neucent_option( 'github' ) ),
	'x'        => array( 'X', neucent_option( 'x' ) ),
);
?>
</main>

<footer class="site-footer">
	<div class="container footer-grid">
		<div class="footer-brand">
			<a class="brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" aria-label="Neucent Technologies home">
				<?php neucent_logo_mark( 34 ); ?>
				<span class="brand-text">Neucent<span> Technologies</span></span>
			</a>
			<p>We design and build web applications, mobile apps and AI-powered software for teams that want to move faster.</p>
			<?php if ( array_filter( wp_list_pluck( $socials, 1 ) ) ) : ?>
				<ul class="social" aria-label="Social profiles">
					<?php foreach ( $socials as $icon => $social ) : ?>
						<?php if ( $social[1] ) : ?>
							<li><a href="<?php echo esc_url( $social[1] ); ?>" rel="noopener" target="_blank" aria-label="<?php echo esc_attr( $social[0] ); ?>"><?php echo neucent_icon( $icon, 20 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></a></li>
						<?php endif; ?>
					<?php endforeach; ?>
				</ul>
			<?php endif; ?>
		</div>

		<div>
			<h2 class="footer-title">What we do</h2>
			<ul class="footer-links">
				<?php foreach ( neucent_services() as $service ) : ?>
					<li><a href="<?php echo esc_url( neucent_url( 'services' ) . '#' . $service['slug'] ); ?>"><?php echo esc_html( $service['title'] ); ?></a></li>
				<?php endforeach; ?>
			</ul>
		</div>

		<div>
			<h2 class="footer-title">Company</h2>
			<?php
			wp_nav_menu(
				array(
					'theme_location' => 'footer',
					'container'      => false,
					'menu_class'     => 'footer-links',
					'depth'          => 1,
					'fallback_cb'    => false,
				)
			);
			?>
		</div>

		<div>
			<h2 class="footer-title">Get in touch</h2>
			<ul class="footer-contact">
				<?php if ( $email ) : ?>
					<li><?php echo neucent_icon( 'mail', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></li>
				<?php endif; ?>
				<?php if ( $phone ) : ?>
					<li><?php echo neucent_icon( 'phone', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?><a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', $phone ) ); ?>"><?php echo esc_html( $phone ); ?></a></li>
				<?php endif; ?>
				<?php if ( $address ) : ?>
					<li><?php echo neucent_icon( 'pin', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?><span><?php echo nl2br( esc_html( $address ) ); ?></span></li>
				<?php endif; ?>
			</ul>
		</div>
	</div>

	<div class="footer-base">
		<div class="container">
			<p>Think digital. Build well.</p>
		</div>
	</div>
</footer>

<?php if ( $whatsapp ) : ?>
	<a class="whatsapp-fab" href="<?php echo esc_url( 'https://wa.me/' . $whatsapp . '?text=' . rawurlencode( 'Hello Neucent team, I would like to discuss a project.' ) ); ?>" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
		<?php echo neucent_icon( 'whatsapp', 26 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
	</a>
<?php endif; ?>

<?php wp_footer(); ?>
</body>
</html>
