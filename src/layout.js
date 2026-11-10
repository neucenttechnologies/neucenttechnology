'use strict';
/**
 * Shared page shell: <head>, header, footer and floating WhatsApp button.
 */
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');
const site = require('./site');
const content = require('./content');
const { icon, logoMark } = require('./icons');

const ROOT = path.resolve(__dirname, '..');

/** Escape text for safe use in HTML content and attributes. */
function esc(value) {
	return String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');
}

/** Short hash of an asset file, appended to its URL so browsers refetch after edits. */
function assetVersion(relPath) {
	try {
		return crypto.createHash('md5').update(fs.readFileSync(path.join(ROOT, relPath))).digest('hex').slice(0, 8);
	} catch (err) {
		return '0';
	}
}

const NAV = [
	{ href: '/services/', label: 'Services' },
	{ href: '/ai-solutions/', label: 'AI Solutions' },
	{ href: '/our-work/', label: 'Our Work' },
	{ href: '/blog/', label: 'Blog' },
	{ href: '/about-us/', label: 'About' },
];

const FOOTER_NAV = [{ href: '/', label: 'Home' }, ...NAV, { href: '/school-management-system/', label: 'School software' }, { href: '/contact-us/', label: 'Contact' }];

function brand() {
	return `<a class="brand" href="/" aria-label="${esc(site.name)} home">${logoMark(34)}<span class="brand-text">Neucent<span> Technologies</span></span></a>`;
}

function header(currentPath) {
	const links = NAV.map((item) => {
		const current = item.href === currentPath ? ' aria-current="page"' : '';
		return `<li><a href="${item.href}"${current}>${esc(item.label)}</a></li>`;
	}).join('');

	return `<header class="site-header" data-header>
	<div class="container header-inner">
		${brand()}
		<button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav" data-nav-toggle>
			<span class="sr-only">Toggle menu</span>${icon('menu', 26)}
		</button>
		<nav id="site-nav" class="site-nav" aria-label="Primary" data-nav>
			<ul class="menu">${links}</ul>
			<a class="btn btn-primary btn-sm nav-cta" href="/contact-us/">Start a project</a>
		</nav>
	</div>
</header>`;
}

function footer() {
	const socials = ['linkedin', 'github', 'x']
		.filter((key) => site[key])
		.map((key) => `<li><a href="${esc(site[key])}" rel="noopener" target="_blank" aria-label="${esc(key === 'x' ? 'X' : key[0].toUpperCase() + key.slice(1))}">${icon(key, 20)}</a></li>`)
		.join('');

	const serviceLinks = content.services
		.map((s) => `<li><a href="/services/#${esc(s.slug)}">${esc(s.title)}</a></li>`)
		.join('');

	const companyLinks = [
		...FOOTER_NAV,
		...require('./landing-data').pages.map((l) => ({ href: `/${l.slug}/`, label: l.nav === 'India' || l.nav === 'USA' || l.nav === 'Tanzania' || l.nav === 'Zimbabwe' ? `Software in ${l.nav}` : l.nav })),
	].map((n) => `<li><a href="${n.href}">${esc(n.label)}</a></li>`).join('');

	const contact = [
		site.email && `<li>${icon('mail', 18)}<a href="mailto:${esc(site.email)}">${esc(site.email)}</a></li>`,
		site.phone && `<li>${icon('phone', 18)}<a href="tel:${esc(site.phone.replace(/[^0-9+]/g, ''))}">${esc(site.phone)}</a></li>`,
		site.address && `<li>${icon('pin', 18)}<span>${site.addressLabel ? `<strong>${esc(site.addressLabel)}</strong><br>` : ''}${esc(site.address).replace(/\n/g, '<br>')}</span></li>`,
		site.hours && `<li>${icon('globe', 18)}<span><strong>Opening hours</strong><br>${esc(site.hours.label)}</span></li>`,
		site.tanzania && `<li>${icon('pin', 18)}<span><strong>${esc(site.tanzania.label)}</strong><br>${esc(site.tanzania.address).replace(/\n/g, '<br>')}</span></li>`,
	].filter(Boolean).join('');

	return `<footer class="site-footer">
	<div class="container footer-grid">
		<div class="footer-brand">
			${brand()}
			<p>We design and build web applications, mobile apps and AI-powered software for teams that want to move faster.</p>
				<p class="footer-areas">Software development for clients across India, Zimbabwe, Africa, Tanzania and the USA.</p>
			${socials ? `<ul class="social" aria-label="Social profiles">${socials}</ul>` : ''}
		</div>
		<div>
			<h2 class="footer-title">What we do</h2>
			<ul class="footer-links">${serviceLinks}</ul>
		</div>
		<div>
			<h2 class="footer-title">Company</h2>
			<ul class="footer-links">${companyLinks}</ul>
		</div>
		<div>
			<h2 class="footer-title">Get in touch</h2>
			<ul class="footer-contact">${contact}</ul>
		</div>
	</div>
	<div class="footer-base">
		<div class="container">
			<p>${esc(site.legalName)} &middot; Think digital. Build well. &middot; <a href="/privacy-policy/">Privacy policy</a></p>
		</div>
	</div>
</footer>
${site.whatsapp ? `<a class="whatsapp-fab" href="https://wa.me/${esc(site.whatsapp)}?text=${encodeURIComponent('Hello Neucent team, I would like to discuss a project.')}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">${icon('whatsapp', 26)}</a>` : ''}`;
}

/**
 * Wrap a page body in the full document.
 *
 * @param {object} page
 * @param {string} page.path        URL path, e.g. "/services/"
 * @param {string} page.title       Full <title> text
 * @param {string} page.description Meta description
 * @param {string} page.body        Inner HTML for <main>
 * @param {boolean} [page.noindex]  Add a robots noindex tag
 * @param {object} [page.jsonld]    Structured data to embed
 */
function render(page) {
	const url = site.url + page.path;
	const cssV = assetVersion('assets/css/main.css');
	const jsV = assetVersion('assets/js/main.js');

	return `<!doctype html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="theme-color" content="#0a0e1a">
	<title>${esc(page.title)}</title>
	<meta name="description" content="${esc(page.description)}">
${page.keywords ? `\t<meta name="keywords" content="${esc(page.keywords)}">\n` : ''}	<meta name="geo.region" content="IN-UP">
	<meta name="geo.placename" content="Noida, Delhi NCR, India">
${page.noindex ? '\t<meta name="robots" content="noindex">\n' : ''}	<link rel="canonical" href="${esc(url)}">
	<meta property="og:type" content="website">
	<meta property="og:site_name" content="${esc(site.name)}">
	<meta property="og:title" content="${esc(page.title)}">
	<meta property="og:description" content="${esc(page.description)}">
	<meta property="og:url" content="${esc(url)}">
${site.ogImage ? `	<meta property="og:image" content="${esc(site.url + site.ogImage)}">
	<meta property="og:image:width" content="${site.ogImageWidth}">
	<meta property="og:image:height" content="${site.ogImageHeight}">
	<meta property="og:image:alt" content="${esc(site.ogImageAlt)}">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:image" content="${esc(site.url + site.ogImage)}">
` : '	<meta name="twitter:card" content="summary">\n'}
	<link rel="icon" type="image/png" sizes="32x32" href="/assets/img/brand/favicon-32.png?v=2">
	<link rel="icon" type="image/png" sizes="192x192" href="/assets/img/brand/favicon-192.png?v=2">
	<link rel="apple-touch-icon" href="/assets/img/brand/apple-touch-icon.png?v=2">
	<script>document.documentElement.classList.add('js');</script>
	<link rel="stylesheet" href="/assets/css/main.css?v=${cssV}">
${page.jsonld ? `\t<script type="application/ld+json">${JSON.stringify(page.jsonld)}</script>\n` : ''}</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(page.path)}

<main id="main">
${page.body}
</main>

${footer()}
<script src="/assets/js/main.js?v=${jsV}" defer></script>
</body>
</html>
`;
}

module.exports = { render, esc };
