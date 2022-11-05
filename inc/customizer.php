<?php
/**
 * Company details editable from Appearance > Customize > Company details.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Default values for each company detail.
 */
function neucent_option_defaults() {
	return array(
		'email'    => 'info@neucenttechnologies.com',
		'phone'    => '+91 82879 39308',
		'whatsapp' => '918287939308',
		'address'  => '',
		'linkedin' => '',
		'github'   => '',
		'x'        => '',
	);
}

/**
 * Read one company detail.
 *
 * @param string $key Option key without the neucent_ prefix.
 * @return string
 */
function neucent_option( $key ) {
	$defaults = neucent_option_defaults();
	$default  = isset( $defaults[ $key ] ) ? $defaults[ $key ] : '';
	return (string) get_theme_mod( 'neucent_' . $key, $default );
}

function neucent_customize_register( $wp_customize ) {
	$wp_customize->add_section(
		'neucent_company',
		array(
			'title'    => 'Company details',
			'priority' => 30,
		)
	);

	$fields = array(
		'email'    => array( 'Contact email', 'email', 'sanitize_email' ),
		'phone'    => array( 'Phone number (shown on the site)', 'text', 'sanitize_text_field' ),
		'whatsapp' => array( 'WhatsApp number, digits only with country code', 'text', 'neucent_sanitize_digits' ),
		'address'  => array( 'Office address (optional)', 'textarea', 'sanitize_textarea_field' ),
		'linkedin' => array( 'LinkedIn URL (optional)', 'url', 'esc_url_raw' ),
		'github'   => array( 'GitHub URL (optional)', 'url', 'esc_url_raw' ),
		'x'        => array( 'X / Twitter URL (optional)', 'url', 'esc_url_raw' ),
	);

	$defaults = neucent_option_defaults();

	foreach ( $fields as $key => $field ) {
		$wp_customize->add_setting(
			'neucent_' . $key,
			array(
				'default'           => $defaults[ $key ],
				'sanitize_callback' => $field[2],
			)
		);
		$wp_customize->add_control(
			'neucent_' . $key,
			array(
				'label'   => $field[0],
				'section' => 'neucent_company',
				'type'    => $field[1],
			)
		);
	}
}
add_action( 'customize_register', 'neucent_customize_register' );

function neucent_sanitize_digits( $value ) {
	return preg_replace( '/\D+/', '', (string) $value );
}
