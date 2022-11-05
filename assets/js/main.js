/**
 * Neucent Technologies - front-end behaviour.
 * Mobile menu, scroll reveal and the contact form. No dependencies.
 */
( function () {
	'use strict';

	// Mobile navigation ------------------------------------------------------
	var header = document.querySelector( '[data-header]' );
	var toggle = document.querySelector( '[data-nav-toggle]' );

	if ( header && toggle ) {
		var setOpen = function ( open ) {
			header.classList.toggle( 'is-open', open );
			toggle.setAttribute( 'aria-expanded', open ? 'true' : 'false' );
		};

		toggle.addEventListener( 'click', function () {
			setOpen( ! header.classList.contains( 'is-open' ) );
		} );

		document.addEventListener( 'keydown', function ( event ) {
			if ( 'Escape' === event.key && header.classList.contains( 'is-open' ) ) {
				setOpen( false );
				toggle.focus();
			}
		} );

		header.addEventListener( 'click', function ( event ) {
			if ( event.target.closest( '.site-nav a' ) ) {
				setOpen( false );
			}
		} );
	}

	// Scroll reveal ----------------------------------------------------------
	var items = document.querySelectorAll( '[data-reveal]' );

	if ( items.length ) {
		if ( ! ( 'IntersectionObserver' in window ) ) {
			items.forEach( function ( el ) { el.classList.add( 'is-in' ); } );
		} else {
			var observer = new IntersectionObserver( function ( entries ) {
				entries.forEach( function ( entry ) {
					if ( entry.isIntersecting ) {
						entry.target.classList.add( 'is-in' );
						observer.unobserve( entry.target );
					}
				} );
			}, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 } );

			items.forEach( function ( el ) { observer.observe( el ); } );
		}
	}

	// Contact form -----------------------------------------------------------
	var form = document.querySelector( '[data-contact-form]' );

	if ( form ) {
		// Messages for the status codes send.php redirects back with.
		var messages = {
			invalid: 'Please check your details. We need a name, a valid email address and a message of at least 10 characters.',
			rate: 'You have sent several messages already. Please try again in an hour, or email us directly.',
			origin: 'The form could not be verified. Please reload the page and try again.',
			server: 'Something went wrong on our side. Please email us directly instead.'
		};

		var status = document.getElementById( 'form-status' );
		var params = new URLSearchParams( window.location.search );
		var text = '';
		var kind = '';

		if ( '1' === params.get( 'sent' ) ) {
			text = 'Thank you, your message is on its way. We will reply by email shortly.';
			kind = 'notice-ok';
		} else if ( params.get( 'error' ) && Object.prototype.hasOwnProperty.call( messages, params.get( 'error' ) ) ) {
			text = messages[ params.get( 'error' ) ];
			kind = 'notice-error';
		}

		if ( status && text ) {
			var p = document.createElement( 'p' );
			p.textContent = text; // textContent: never interpret the message as HTML.
			status.appendChild( p );
			status.classList.add( kind );
			status.setAttribute( 'role', 'notice-ok' === kind ? 'status' : 'alert' );
			status.hidden = false;
		}

		// Time the form was opened. The server rejects submissions that arrive impossibly fast.
		var stamp = form.querySelector( '[data-form-time]' );
		if ( stamp ) {
			stamp.value = String( Date.now() );
		}

		form.addEventListener( 'submit', function () {
			var button = form.querySelector( 'button[type="submit"]' );
			if ( button && form.checkValidity() ) {
				button.disabled = true;
				button.textContent = 'Sending...';
			}
		} );
	}
}() );
