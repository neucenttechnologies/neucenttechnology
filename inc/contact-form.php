<?php
/**
 * Contact form: stores every enquiry in the dashboard and emails the team.
 *
 * The form on the Contact page posts to admin-post.php with the action
 * "neucent_contact". Input is validated against fixed option lists, so no
 * raw values ever reach a query or a mail header.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Private post type that holds submitted enquiries.
 */
function neucent_register_enquiry_type() {
	register_post_type(
		'neucent_enquiry',
		array(
			'labels'              => array(
				'name'          => 'Enquiries',
				'singular_name' => 'Enquiry',
				'menu_name'     => 'Enquiries',
				'all_items'     => 'All enquiries',
				'edit_item'     => 'View enquiry',
				'search_items'  => 'Search enquiries',
				'not_found'     => 'No enquiries yet.',
			),
			'public'              => false,
			'show_ui'             => true,
			'show_in_rest'        => false,
			'exclude_from_search' => true,
			'menu_position'       => 25,
			'menu_icon'           => 'dashicons-email-alt',
			'supports'            => array( 'title', 'editor' ),
			'capability_type'     => 'post',
			'capabilities'        => array( 'create_posts' => 'do_not_allow' ),
			'map_meta_cap'        => true,
		)
	);
}
add_action( 'init', 'neucent_register_enquiry_type' );

/**
 * Enquiry list columns.
 */
function neucent_enquiry_columns( $columns ) {
	return array(
		'cb'      => $columns['cb'],
		'title'   => 'Enquiry',
		'contact' => 'Contact',
		'service' => 'Interested in',
		'budget'  => 'Budget',
		'date'    => 'Received',
	);
}
add_filter( 'manage_neucent_enquiry_posts_columns', 'neucent_enquiry_columns' );

function neucent_enquiry_column_content( $column, $post_id ) {
	if ( 'contact' === $column ) {
		$email = get_post_meta( $post_id, '_neucent_email', true );
		$phone = get_post_meta( $post_id, '_neucent_phone', true );
		echo esc_html( $email );
		if ( $phone ) {
			echo '<br>' . esc_html( $phone );
		}
	} elseif ( 'service' === $column ) {
		$services = neucent_form_services();
		$key      = get_post_meta( $post_id, '_neucent_service', true );
		echo esc_html( isset( $services[ $key ] ) ? $services[ $key ] : '' );
	} elseif ( 'budget' === $column ) {
		$budgets = neucent_form_budgets();
		$key     = get_post_meta( $post_id, '_neucent_budget', true );
		echo esc_html( isset( $budgets[ $key ] ) ? $budgets[ $key ] : '' );
	}
}
add_action( 'manage_neucent_enquiry_posts_custom_column', 'neucent_enquiry_column_content', 10, 2 );

/**
 * Redirect back to the form with a status flag.
 */
function neucent_contact_redirect( $back, $args ) {
	wp_safe_redirect( add_query_arg( $args, $back ) . '#contact-form' );
	exit;
}

/**
 * Handle a submission.
 */
function neucent_handle_contact() {
	$back = wp_get_referer();
	if ( ! $back ) {
		$back = home_url( '/' );
	}
	$back = remove_query_arg( array( 'sent', 'contact_error' ), $back );

	// Anti-forgery token.
	$nonce = isset( $_POST['neucent_nonce'] ) ? sanitize_text_field( wp_unslash( $_POST['neucent_nonce'] ) ) : '';
	if ( ! wp_verify_nonce( $nonce, 'neucent_contact' ) ) {
		neucent_contact_redirect( $back, array( 'contact_error' => 'expired' ) );
	}

	// Honeypot: real visitors never see or fill this field. Bots get a fake success.
	if ( ! empty( $_POST['company_website'] ) ) {
		neucent_contact_redirect( $back, array( 'sent' => 1 ) );
	}

	// Limit each address to 5 submissions per hour.
	$ip       = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : 'unknown';
	$rate_key = 'neucent_rl_' . md5( $ip );
	$count    = (int) get_transient( $rate_key );
	if ( $count >= 5 ) {
		neucent_contact_redirect( $back, array( 'contact_error' => 'rate' ) );
	}

	$name    = isset( $_POST['name'] ) ? sanitize_text_field( wp_unslash( $_POST['name'] ) ) : '';
	$email   = isset( $_POST['email'] ) ? sanitize_email( wp_unslash( $_POST['email'] ) ) : '';
	$phone   = isset( $_POST['phone'] ) ? preg_replace( '/[^0-9+()\-\s.]/', '', wp_unslash( $_POST['phone'] ) ) : '';
	$service = isset( $_POST['service'] ) ? sanitize_key( wp_unslash( $_POST['service'] ) ) : '';
	$budget  = isset( $_POST['budget'] ) ? sanitize_key( wp_unslash( $_POST['budget'] ) ) : '';
	$message = isset( $_POST['message'] ) ? sanitize_textarea_field( wp_unslash( $_POST['message'] ) ) : '';

	$services = neucent_form_services();
	$budgets  = neucent_form_budgets();

	if ( ! isset( $services[ $service ] ) ) {
		$service = 'other';
	}
	if ( ! isset( $budgets[ $budget ] ) ) {
		$budget = 'unsure';
	}

	$name  = mb_substr( $name, 0, 100 );
	$phone = mb_substr( trim( $phone ), 0, 30 );

	if ( '' === $name || ! is_email( $email ) || mb_strlen( $message ) < 10 || mb_strlen( $message ) > 5000 ) {
		neucent_contact_redirect( $back, array( 'contact_error' => 'invalid' ) );
	}

	set_transient( $rate_key, $count + 1, HOUR_IN_SECONDS );

	// Keep a copy in the dashboard so nothing is lost if email fails.
	$post_id = wp_insert_post(
		array(
			'post_type'    => 'neucent_enquiry',
			'post_status'  => 'private',
			'post_title'   => $name . ' - ' . $services[ $service ],
			'post_content' => $message,
			'meta_input'   => array(
				'_neucent_email'   => $email,
				'_neucent_phone'   => $phone,
				'_neucent_service' => $service,
				'_neucent_budget'  => $budget,
			),
		),
		true
	);
	$stored = ! is_wp_error( $post_id );

	// Email the team.
	$to = neucent_option( 'email' );
	if ( ! is_email( $to ) ) {
		$to = get_option( 'admin_email' );
	}

	$body  = "New enquiry from the website\n\n";
	$body .= 'Name: ' . $name . "\n";
	$body .= 'Email: ' . $email . "\n";
	$body .= 'Phone: ' . ( '' !== $phone ? $phone : 'not given' ) . "\n";
	$body .= 'Interested in: ' . $services[ $service ] . "\n";
	$body .= 'Budget: ' . $budgets[ $budget ] . "\n\n";
	$body .= "Message:\n" . $message . "\n";

	$reply_name = str_replace( array( '"', '<', '>', ',' ), '', $name );
	$headers    = array( 'Reply-To: ' . $reply_name . ' <' . $email . '>' );
	$sent       = wp_mail( $to, 'New website enquiry from ' . $name, $body, $headers );

	if ( ! $stored && ! $sent ) {
		neucent_contact_redirect( $back, array( 'contact_error' => 'server' ) );
	}

	neucent_contact_redirect( $back, array( 'sent' => 1 ) );
}
add_action( 'admin_post_nopriv_neucent_contact', 'neucent_handle_contact' );
add_action( 'admin_post_neucent_contact', 'neucent_handle_contact' );
