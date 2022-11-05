'use strict';
/**
 * Inline SVG icon set, drawn on a 24x24 grid. Icons inherit colour from the
 * surrounding text through currentColor.
 */

const PATHS = {
	web: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 9l2 2-2 2M12 13h4"/>',
	mobile: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M10.5 18.5h3"/><path d="M10 7h4M10 10h4"/>',
	ai: '<circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
	cloud: '<path d="M7 18a4 4 0 0 1-.6-7.95A5.5 5.5 0 0 1 17 8.6 4.7 4.7 0 0 1 17.5 18H7z"/><path d="M12 12v4M10 14l2-2 2 2"/>',
	design: '<path d="M4 20l1-4L16.5 4.5a2.1 2.1 0 0 1 3 3L8 19l-4 1z"/><path d="M14 7l3 3"/>',
	shield: '<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/><path d="M9 12l2.2 2.2L15.5 10"/>',
	chat: '<path d="M4 5h16v11H9l-5 4V5z"/><path d="M8 9.5h8M8 12.5h5"/>',
	search: '<circle cx="10.5" cy="10.5" r="6"/><path d="M15 15l5.5 5.5"/><path d="M8 10.5h5"/>',
	eye: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3"/>',
	flow: '<rect x="3" y="4" width="6" height="5" rx="1.2"/><rect x="15" y="4" width="6" height="5" rx="1.2"/><rect x="9" y="15" width="6" height="5" rx="1.2"/><path d="M6 9v3h12V9M12 12v3"/>',
	chart: '<path d="M4 20V5M4 20h16"/><path d="M8 16l3.5-4 3 2.5L19 8"/>',
	code: '<path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 5l-3 14"/>',
	check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
	arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
	mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/>',
	phone: '<path d="M6.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 4.5 5.5a2 2 0 0 1 2-2z"/>',
	pin: '<path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21z"/><circle cx="12" cy="10" r="2.3"/>',
	lock: '<rect x="5" y="10.5" width="14" height="10" rx="2"/><path d="M8 10.5V8a4 4 0 0 1 8 0v2.5"/>',
	layers: '<path d="M12 3.5l9 4.5-9 4.5L3 8l9-4.5z"/><path d="M3 12.5l9 4.5 9-4.5M3 17l9 4.5 9-4.5"/>',
	users: '<circle cx="9" cy="8.5" r="3.2"/><path d="M3 20c.5-3.5 3-5.5 6-5.5s5.5 2 6 5.5"/><path d="M16 5.6a3 3 0 0 1 0 5.8M18 14.8c1.7.7 2.8 2.4 3 4.7"/>',
	rocket: '<path d="M14 4c3.5 0 6 2.5 6 6-2 4-5 6.5-8 8l-6-6c1.5-3 4-6 8-8z"/><circle cx="14.5" cy="9.5" r="1.5"/><path d="M6 14l-2.5 1 1 2.5M10 18l-1 2.5L6.5 19.5"/>',
	chip: '<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4"/>',
	globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.6 2.6 3.8 5.6 3.8 9S14.6 18.4 12 21c-2.6-2.6-3.8-5.6-3.8-9S9.4 5.6 12 3z"/>',
	quote: '<path d="M9.5 7C6.5 8 5 10.3 5 13.5V17h5v-5H7.3c.2-1.6 1-2.7 2.7-3.4L9.5 7zM19 7c-3 1-4.5 3.3-4.5 6.5V17h5v-5h-2.7c.2-1.6 1-2.7 2.7-3.4L19 7z"/>',
	menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
	linkedin: '<rect x="3.5" y="3.5" width="17" height="17" rx="3"/><path d="M8 10.5V16M8 8v.01M11.5 16v-5.5M11.5 13c0-1.6 1-2.6 2.3-2.6s2.2 1 2.2 2.6V16"/>',
	github: '<path d="M9 19c-4 1.2-4-2-5.5-2.5M14.5 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.7-.3 5.3-1.3 5.3-5.9a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.3a11.3 11.3 0 0 0-5.8 0C6.2 3.2 5.2 3.5 5.2 3.5a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.8 9.9c0 4.6 2.6 5.6 5.3 5.9a2.8 2.8 0 0 0-.8 2.2V21"/>',
	x: '<path d="M4 4l16 16M20 4L4 20"/>',
	whatsapp: '<path d="M4 20l1.2-4.2A8 8 0 1 1 8.4 19L4 20z"/><path d="M9.2 8.6c.3 2.5 2.7 5 5.2 5.3l1.2-1.3-2-1-.9.7c-.9-.4-1.8-1.3-2.2-2.2l.7-.9-1-2-1 1.4z"/>',
};

function icon(name, size = 24) {
	const inner = PATHS[name];
	if (!inner) throw new Error(`Unknown icon: ${name}`);
	return `<svg class="icon icon-${name}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
}

/** Brand mark: the gradient "N" (assets/img/brand/neucent-mark.png, 622:548). `size` is its height in px. */
function logoMark(size = 34) {
	const width = Math.round(size * 622 / 548);
	return `<img class="logo-mark" src="/assets/img/brand/neucent-mark.png?v=2" width="${width}" height="${size}" alt="" decoding="async">`;
}

/** Standalone favicon file, written to assets/img/favicon.svg by the build. */
const FAVICON_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f6bff"/><stop offset="1" stop-color="#17d4e8"/></linearGradient></defs><rect width="64" height="64" rx="16" fill="url(#g)"/><path d="M18 48V16h7l16 20V16h7v32h-7L25 28v20z" fill="#fff"/></svg>\n';

module.exports = { icon, logoMark, FAVICON_SVG };
