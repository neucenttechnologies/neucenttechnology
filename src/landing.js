'use strict';
/**
 * Renders the search landing pages defined in landing-data.js.
 */
const site = require('./site');
const { icon } = require('./icons');
const { esc } = require('./layout');
const { pages: data } = require('./landing-data');

function head(eyebrow, title, text) {
	return `<div class="section-head" data-reveal>
			<p class="eyebrow">${esc(eyebrow)}</p>
			<h2>${esc(title)}</h2>
			${text ? `<p>${esc(text)}</p>` : ''}
		</div>`;
}

function cards(items) {
	return `<div class="card-grid">
				${items.map((i) => `<article class="card" data-reveal>
					<span class="card-icon">${icon(i.icon, 26)}</span>
					<h3>${esc(i.title)}</h3>
					<p>${esc(i.text)}</p>
				</article>`).join('\n\t\t\t\t')}
			</div>`;
}

function build(p) {
	const path = `/${p.slug}/`;
	const url = site.url + path;
	const others = data.filter((d) => d.slug !== p.slug);

	const body = `<section class="page-hero">
	<div class="container">
		<p class="eyebrow">${esc(p.eyebrow)}</p>
		<h1>${esc(p.h1)}</h1>
		<p class="lead">${esc(p.lead)}</p>
		<div class="btn-row">
			<a class="btn btn-primary" href="/contact-us/">Start a project ${icon('arrow', 18)}</a>
			<a class="btn btn-ghost" href="/our-work/">See our work</a>
		</div>
	</div>
</section>

<section class="section">
	<div class="container container-narrow">
		<div class="prose">
			${p.intro.map((t) => `<p>${esc(t)}</p>`).join('\n\t\t\t')}
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${head('What we build', 'Services available to you')}
		${cards(p.offers)}
	</div>
</section>

<section class="section">
	<div class="container">
		${head('Why Neucent', p.whyTitle)}
		${cards(p.why)}
		<ul class="chips chips-lg" data-reveal aria-label="Places we serve">${p.places.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
	</div>
</section>

<section class="section section-mist">
	<div class="container container-narrow">
		${head('Questions', 'Things people ask us')}
		<div class="faq">
${p.faqs.map((f) => `\t\t\t<details data-reveal>
				<summary>${esc(f.q)}</summary>
				<p>${esc(f.a)}</p>
			</details>`).join('\n')}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		${head('Explore more', 'Related pages')}
		<ul class="chips chips-lg" data-reveal>
			${others.map((o) => `<li><a href="/${esc(o.slug)}/">${esc(o.nav)}</a></li>`).join('')}
			<li><a href="/services/">All services</a></li>
			<li><a href="/our-work/">Our work</a></li>
			<li><a href="/school-management-system/">School software</a></li>
		</ul>
	</div>
</section>

<section class="section cta-section">
	<div class="container">
		<div class="cta-card" data-reveal>
			<div>
				<h2>Have a project in mind?</h2>
				<p>Tell us what you want to build. We will reply within one working day with questions, ideas and next steps.</p>
			</div>
			<a class="btn btn-light" href="/contact-us/">Start a project ${icon('arrow', 16)}</a>
		</div>
	</div>
</section>`;

	return {
		path,
		title: p.metaTitle,
		description: p.description,
		keywords: p.keywords,
		jsonld: {
			'@context': 'https://schema.org',
			'@graph': [
				{
					'@type': 'Service',
					name: p.h1,
					description: p.description,
					url,
					provider: { '@type': 'Organization', name: site.name, url: site.url + '/' },
					areaServed: p.places.map((n) => ({ '@type': 'Place', name: n })),
				},
				{
					'@type': 'FAQPage',
					mainEntity: p.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
				},
				{
					'@type': 'BreadcrumbList',
					itemListElement: [
						{ '@type': 'ListItem', position: 1, name: 'Home', item: site.url + '/' },
						{ '@type': 'ListItem', position: 2, name: p.nav, item: url },
					],
				},
			],
		},
		body,
	};
}

module.exports = { landingPages: () => data.map(build) };
