<?php
/**
 * Template Name: Contact
 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

get_header();

$email    = neucent_option( 'email' );
$phone    = neucent_option( 'phone' );
$whatsapp = neucent_option( 'whatsapp' );
$address  = neucent_option( 'address' );

// Status flags set by the form handler. Only known values are ever printed.
// phpcs:disable WordPress.Security.NonceVerification.Recommended
$is_sent = isset( $_GET['sent'] ) && '1' === $_GET['sent'];
$error   = isset( $_GET['contact_error'] ) ? sanitize_key( wp_unslash( $_GET['contact_error'] ) ) : '';
// phpcs:enable

$error_messages = array(
	'invalid' => 'Please check your details. We need a name, a valid email address and a message of at least 10 characters.',
	'expired' => 'This form expired. Please reload the page and send it again.',
	'rate'    => 'You have sent several messages already. Please try again in an hour, or email us directly.',
	'server'  => 'Something went wrong on our side. Please email us directly instead.',
);

get_template_part(
	'template-parts/page-hero',
	null,
	array(
		'eyebrow' => 'Contact',
		'title'   => 'Tell us what you want to build',
		'lead'    => 'Share a few details and we will get back to you with questions, ideas and a suggested next step.',
	)
);
?>

<section class="section">
	<div class="container contact-grid">
		<div class="form-card" id="contact-form">
			<?php if ( $is_sent ) : ?>
				<div class="notice notice-ok" role="status">
					<?php echo neucent_icon( 'check', 22 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
					<p><strong>Thank you, your message is on its way.</strong> We will reply by email shortly.</p>
				</div>
			<?php elseif ( isset( $error_messages[ $error ] ) ) : ?>
				<div class="notice notice-error" role="alert">
					<p><?php echo esc_html( $error_messages[ $error ] ); ?></p>
				</div>
			<?php endif; ?>

			<form class="contact-form" method="post" action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" data-contact-form>
				<input type="hidden" name="action" value="neucent_contact">
				<?php wp_nonce_field( 'neucent_contact', 'neucent_nonce' ); ?>

				<div class="field-row">
					<div class="field">
						<label for="cf-name">Your name <span aria-hidden="true">*</span></label>
						<input id="cf-name" name="name" type="text" maxlength="100" autocomplete="name" required>
					</div>
					<div class="field">
						<label for="cf-email">Email <span aria-hidden="true">*</span></label>
						<input id="cf-email" name="email" type="email" maxlength="120" autocomplete="email" required>
					</div>
				</div>

				<div class="field-row">
					<div class="field">
						<label for="cf-phone">Phone <small>(optional)</small></label>
						<input id="cf-phone" name="phone" type="tel" maxlength="30" autocomplete="tel">
					</div>
					<div class="field">
						<label for="cf-service">I am interested in</label>
						<select id="cf-service" name="service">
							<?php foreach ( neucent_form_services() as $value => $label ) : ?>
								<option value="<?php echo esc_attr( $value ); ?>"><?php echo esc_html( $label ); ?></option>
							<?php endforeach; ?>
						</select>
					</div>
				</div>

				<div class="field">
					<label for="cf-budget">Approximate budget</label>
					<select id="cf-budget" name="budget">
						<?php foreach ( neucent_form_budgets() as $value => $label ) : ?>
							<option value="<?php echo esc_attr( $value ); ?>" <?php selected( 'unsure', $value ); ?>><?php echo esc_html( $label ); ?></option>
						<?php endforeach; ?>
					</select>
				</div>

				<div class="field">
					<label for="cf-message">Project details <span aria-hidden="true">*</span></label>
					<textarea id="cf-message" name="message" rows="6" minlength="10" maxlength="5000" required></textarea>
				</div>

				<div class="hp-field" aria-hidden="true">
					<label for="cf-company">Leave this field empty</label>
					<input id="cf-company" name="company_website" type="text" tabindex="-1" autocomplete="off">
				</div>

				<button class="btn btn-primary" type="submit">Send message <?php echo neucent_icon( 'arrow', 18 ); // phpcs:ignore WordPress.Security.EscapeOutput ?></button>
			</form>
		</div>

		<aside class="contact-side" data-reveal>
			<h2>Prefer to talk directly?</h2>
			<ul class="contact-list">
				<?php if ( $email ) : ?>
					<li>
						<?php echo neucent_icon( 'mail', 22 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<div><strong>Email</strong><a href="mailto:<?php echo esc_attr( $email ); ?>"><?php echo esc_html( $email ); ?></a></div>
					</li>
				<?php endif; ?>
				<?php if ( $phone ) : ?>
					<li>
						<?php echo neucent_icon( 'phone', 22 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<div><strong>Phone</strong><a href="tel:<?php echo esc_attr( preg_replace( '/[^0-9+]/', '', $phone ) ); ?>"><?php echo esc_html( $phone ); ?></a></div>
					</li>
				<?php endif; ?>
				<?php if ( $whatsapp ) : ?>
					<li>
						<?php echo neucent_icon( 'whatsapp', 22 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<div><strong>WhatsApp</strong><a href="<?php echo esc_url( 'https://wa.me/' . $whatsapp ); ?>" target="_blank" rel="noopener">Message us</a></div>
					</li>
				<?php endif; ?>
				<?php if ( $address ) : ?>
					<li>
						<?php echo neucent_icon( 'pin', 22 ); // phpcs:ignore WordPress.Security.EscapeOutput ?>
						<div><strong>Office</strong><span><?php echo nl2br( esc_html( $address ) ); ?></span></div>
					</li>
				<?php endif; ?>
			</ul>

			<div class="what-next">
				<h3>What happens next</h3>
				<ol>
					<li>We read your message and note questions.</li>
					<li>We reply by email to set up a short call.</li>
					<li>You receive a plan with scope, timeline and price range.</li>
				</ol>
			</div>
		</aside>
	</div>
</section>

<?php
get_footer();
