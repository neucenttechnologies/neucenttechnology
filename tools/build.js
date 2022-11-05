#!/usr/bin/env node
'use strict';
/**
 * Static site build. No dependencies: needs only Node.js 16 or newer.
 *
 *   node tools/build.js
 *
 * Reads src/, writes the finished pages into the repo root
 * (index.html, services/index.html, ...), plus sitemap.xml, robots.txt
 * and assets/img/favicon.svg. Generated files are committed so the
 * repo root can be uploaded to the web host as it is.
 */
const fs = require('fs');
const path = require('path');
const site = require('../src/site');
const pages = require('../src/pages');
const { render } = require('../src/layout');
const { FAVICON_SVG } = require('../src/icons');

const ROOT = path.resolve(__dirname, '..');

function write(relPath, data) {
	const file = path.join(ROOT, relPath);
	fs.mkdirSync(path.dirname(file), { recursive: true });
	fs.writeFileSync(file, data);
	console.log('wrote', relPath);
}

/** "/services/" -> "services/index.html", "/404.html" -> "404.html", "/" -> "index.html" */
function outputPath(urlPath) {
	if (urlPath.endsWith('/')) return urlPath.slice(1) + 'index.html';
	return urlPath.slice(1);
}

const built = [pages.home(), pages.services(), pages.ai(), pages.work(), pages.school(), pages.about(), pages.contact(), pages.privacy(), pages.notFound()];

for (const page of built) {
	write(outputPath(page.path), render(page));
}

const today = new Date().toISOString().slice(0, 10);
const urls = built
	.filter((p) => !p.noindex)
	.map((p) => `\t<url><loc>${site.url}${p.path}</loc><lastmod>${today}</lastmod></url>`)
	.join('\n');
write('sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);

write('robots.txt', `User-agent: *\nAllow: /\nDisallow: /contact-us/send.php\n\nSitemap: ${site.url}/sitemap.xml\n`);
write('assets/img/favicon.svg', FAVICON_SVG);

console.log(`\nBuilt ${built.length} pages.`);
