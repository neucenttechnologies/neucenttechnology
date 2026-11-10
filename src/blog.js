'use strict';
/**
 * Renders the blog index and article pages from blog-data.js.
 */
const site = require('./site');
const { icon } = require('./icons');
const { esc } = require('./layout');
const { articles } = require('./blog-data');
const landing = require('./landing-data').pages;

const fmt = (iso) => new Date(iso + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

function index() {
	const cards = articles.map((a) => `<article class="card" data-reveal>
				<p class="eyebrow">${esc(fmt(a.date))} &middot; ${a.minutes} min read</p>
				<h3><a href="/blog/${esc(a.slug)}/">${esc(a.title)}</a></h3>
				<p>${esc(a.description)}</p>
				<a class="text-link" href="/blog/${esc(a.slug)}/">Read the article ${icon('arrow', 16)}</a>
			</article>`).join('\n\t\t\t');

	return {
		path: '/blog/',
		title: 'Blog: Software, App & AI Guides | Neucent',
		description: 'Practical guides on mobile app costs, school software, AI chatbots and choosing a software development company.',
		keywords: 'software development blog, mobile app development guide, school management software guide, AI chatbot guide, choosing a software company',
		body: `<section class="page-hero">
	<div class="container">
		<p class="eyebrow">Blog</p>
		<h1>Guides for teams building software</h1>
		<p class="lead">Plain-language advice on apps, websites, school software and AI, from the people who build them.</p>
	</div>
</section>
<section class="section">
	<div class="container">
		<div class="card-grid">
			${cards}
		</div>
	</div>
</section>`,
	};
}

function article(a) {
	const path = `/blog/${a.slug}/`;
	const url = site.url + path;
	const related = a.related.map((slug) => {
		const l = landing.find((x) => x.slug === slug);
		if (l) return { href: `/${slug}/`, label: l.nav };
		if (slug === 'school-management-system') return { href: '/school-management-system/', label: 'School management system' };
		return null;
	}).filter(Boolean);

	const sections = a.sections.map((s) => `<h2>${esc(s.h)}</h2>
			${s.p.map((t) => `<p>${esc(t)}</p>`).join('\n\t\t\t')}
			${s.list ? `<ul class="check-list check-list-dark">${s.list.map((i) => `<li>${icon('check', 20)} ${esc(i)}</li>`).join('')}</ul>` : ''}`).join('\n\t\t\t');

	return {
		path,
		title: a.metaTitle || `${a.title} | Neucent`,
		description: a.description,
		keywords: a.keywords,
		jsonld: {
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'Article',
					headline: a.title,
					description: a.description,
					datePublished: a.date,
					dateModified: a.date,
					mainEntityOfPage: url,
					author: { '@type': 'Organization', name: site.name },
					publisher: { '@type': 'Organization', name: site.name, url: site.url + '/' },
				},
				...(a.faqs ? [{
					'@type': 'FAQPage',
					mainEntity: a.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
				}] : []),
			],
		},
		body: `<section class="page-hero">
	<div class="container">
		<p class="eyebrow">${esc(fmt(a.date))} &middot; ${a.minutes} min read</p>
		<h1>${esc(a.title)}</h1>
		<p class="lead">${esc(a.intro)}</p>
	</div>
</section>
<section class="section">
	<div class="container container-narrow">
		<div class="prose">
			${sections}
		</div>
	</div>
</section>
${a.faqs ? `<section class="section section-mist">
	<div class="container container-narrow">
		<div class="section-head" data-reveal><p class="eyebrow">Questions</p><h2>Quick answers</h2></div>
		<div class="faq">
${a.faqs.map((f) => `\t\t\t<details data-reveal>
				<summary>${esc(f.q)}</summary>
				<p>${esc(f.a)}</p>
			</details>`).join('\n')}
		</div>
	</div>
</section>` : ''}
<section class="section">
	<div class="container">
		<ul class="chips chips-lg" data-reveal>
			${related.map((r) => `<li><a href="${esc(r.href)}">${esc(r.label)}</a></li>`).join('')}
			<li><a href="/blog/">More articles</a></li>
			<li><a href="/services/">All services</a></li>
		</ul>
	</div>
</section>
<section class="section cta-section">
	<div class="container">
		<div class="cta-card" data-reveal>
			<div>
				<h2>Have a project in mind?</h2>
				<p>${esc(a.cta)}</p>
			</div>
			<a class="btn btn-light" href="/contact-us/">Start a project ${icon('arrow', 16)}</a>
		</div>
	</div>
</section>`,
	};
}

module.exports = { blogPages: () => [index(), ...articles.map(article)] };
