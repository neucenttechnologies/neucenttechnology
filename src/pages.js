'use strict';
/**
 * Page bodies. Each function returns the inner HTML of <main> plus metadata.
 */
const site = require('./site');
const c = require('./content');
const { icon } = require('./icons');
const { esc } = require('./layout');

/* ---- Shared blocks ------------------------------------------------------ */

function pageHero({ eyebrow, title, lead }) {
	return `<section class="page-hero">
	<div class="container">
		${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
		<h1>${esc(title)}</h1>
		${lead ? `<p class="lead">${esc(lead)}</p>` : ''}
	</div>
</section>`;
}

function cta({ title = 'Have a product in mind?', text = 'Tell us what you want to build. We will reply within one working day with questions, ideas and next steps.', href = '/contact-us/', label = 'Start a project' } = {}) {
	return `<section class="section cta-section">
	<div class="container">
		<div class="cta-card" data-reveal>
			<div>
				<h2>${esc(title)}</h2>
				<p>${esc(text)}</p>
			</div>
			<a class="btn btn-light" href="${esc(href)}">${esc(label)} ${icon('arrow', 16)}</a>
		</div>
	</div>
</section>`;
}

function processList(steps = c.process) {
	const items = steps.map((s, i) => `<li data-reveal>
			<span class="step-num">${String(i + 1).padStart(2, '0')}</span>
			<h3>${esc(s.title)}</h3>
			<p>${esc(s.text)}</p>
		</li>`).join('\n\t\t');
	return `<ol class="steps-list">\n\t\t${items}\n\t</ol>`;
}

function faqList() {
	return `<div class="faq">
${c.faqs.map((f) => `\t\t<details data-reveal>
			<summary>${esc(f.q)}</summary>
			<p>${esc(f.a)}</p>
		</details>`).join('\n')}
	</div>`;
}

function sectionHead({ eyebrow, title, text }) {
	return `<div class="section-head" data-reveal>
			${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
			<h2>${esc(title)}</h2>
			${text ? `<p>${esc(text)}</p>` : ''}
		</div>`;
}

function featureList(items) {
	return items.map((i) => `<div class="feature" data-reveal>
					<span class="card-icon">${icon(i.icon, 24)}</span>
					<div>
						<h3>${esc(i.title)}</h3>
						<p>${esc(i.text)}</p>
					</div>
				</div>`).join('\n\t\t\t\t');
}

function chips(items, large = false) {
	return `<ul class="chips${large ? ' chips-lg' : ''}"${large ? ' data-reveal' : ''}>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
}

/** Responsive screenshot with fixed dimensions so the page does not jump while it loads. */
function shot(image, sizes, eager = false) {
	return `<img src="${esc(image.src)}" srcset="${esc(image.src800)} 800w, ${esc(image.src)} ${image.width}w" sizes="${esc(sizes)}" width="${image.width}" height="${image.height}" alt="${esc(image.alt)}" ${eager ? '' : 'loading="lazy" '}decoding="async">`;
}

function projectCard(p) {
	return `<article class="case-card" data-reveal>
				${p.image ? `<a class="case-shot" href="/our-work/#${esc(p.slug)}" tabindex="-1" aria-hidden="true">${shot(p.image, '(min-width: 900px) 560px, 92vw')}</a>` : ''}
				<p class="eyebrow">Recent project</p>
				<h3>${esc(p.name)}</h3>
				<p class="case-kind">${esc(p.kind)}</p>
				<p>${esc(p.summary)}</p>
				${chips(p.tags)}
				<a class="text-link" href="/our-work/${esc(p.slug)}/">Read the case study ${icon('arrow', 16)}</a>
			</article>`;
}

function quoteCard(t) {
	return `<figure class="quote-card" data-reveal>
				${icon('quote', 30)}
				<blockquote><p>${esc(t.quote)}</p></blockquote>
				<figcaption><strong>${esc(t.name)}</strong><span>${esc(t.role)}</span></figcaption>
			</figure>`;
}

function timelineList() {
	return `<ol class="timeline">
${c.timeline.map((t) => `\t\t\t<li data-reveal>
				<span class="tl-year">${esc(t.year)}</span>
				<div><h3>${esc(t.title)}</h3><p>${esc(t.text)}</p></div>
			</li>`).join('\n')}
		</ol>`;
}

/* ---- Home --------------------------------------------------------------- */

function home() {
	const serviceCards = c.services.map((s) => `<article class="card" data-reveal>
					<span class="card-icon">${icon(s.icon, 26)}</span>
					<h3>${esc(s.title)}</h3>
					<p>${esc(s.summary)}</p>
					<a class="text-link" href="/services/#${esc(s.slug)}">Learn more ${icon('arrow', 16)}</a>
				</article>`).join('\n\t\t\t\t');

	const aiMini = c.aiCapabilities.map((cap) => `<div class="mini-card">
					<span class="card-icon">${icon(cap.icon, 22)}</span>
					<h3>${esc(cap.title)}</h3>
				</div>`).join('\n\t\t\t\t');

	const stackGroups = Object.entries(c.stack).map(([group, items]) => `<div class="stack-group" data-reveal>
					<h3>${esc(group)}</h3>
					${chips(items)}
				</div>`).join('\n\t\t\t\t');

	const body = `<section class="hero">
	<div class="container hero-grid">
		<div class="hero-copy">
			<h1>Web, mobile and <span class="grad-text">AI software</span>, built to ship.</h1>
			<p class="lead">Neucent Technologies designs and engineers web applications, mobile apps and AI-powered systems for teams that need dependable software, from the first prototype through to production.</p>
			<div class="btn-row">
				<a class="btn btn-primary" href="/contact-us/">Start a project ${icon('arrow', 18)}</a>
				<a class="btn btn-ghost" href="/ai-solutions/">Explore AI solutions</a>
			</div>
			<ul class="hero-tags" aria-label="What we build">
				<li>Web apps</li>
				<li>Mobile apps</li>
				<li>AI assistants</li>
				<li>Automation</li>
			</ul>
		</div>

		<div class="hero-visual" aria-hidden="true">
			<div class="console">
				<div class="console-bar"><i></i><i></i><i></i><span>assistant preview</span></div>
				<div class="console-body">
					<p class="msg msg-user">Which invoices from last month are still unpaid?</p>
					<ul class="console-steps">
						<li class="done">Searching billing records</li>
						<li class="done">Matching 3 customers</li>
						<li class="run">Drafting reminder emails</li>
					</ul>
					<p class="msg msg-ai">Found 3 open invoices. Reminders are drafted and waiting for your approval.</p>
				</div>
			</div>
			<div class="float-chip chip-web">${icon('web', 18)} Web app</div>
			<div class="float-chip chip-mobile">${icon('mobile', 18)} Mobile app</div>
			<div class="float-chip chip-ai">${icon('ai', 18)} AI agent</div>
		</div>
	</div>
</section>

<section class="facts-strip" aria-label="About Neucent">
	<div class="container facts-grid">
		<div class="fact">${icon('rocket', 22)}<span><strong>Building since ${esc(site.founded)}</strong>Web, mobile and now AI products</span></div>
		<div class="fact">${icon('globe', 22)}<span><strong>Clients in Zimbabwe, Africa, India and the USA</strong>Delivered remotely, on schedule</span></div>
		<div class="fact">${icon('users', 22)}<span><strong>Founders in India and the USA</strong>Working across time zones</span></div>
	</div>
</section>

<section class="section" id="services">
	<div class="container">
		${sectionHead({ eyebrow: 'What we build', title: 'Everything you need to take a product from idea to launch', text: 'One team across design, engineering, AI and operations, so nothing gets lost between handoffs.' })}
		<div class="card-grid">
				${serviceCards}
		</div>
	</div>
</section>

<section class="section section-dark ai-band">
	<div class="container ai-band-grid">
		<div data-reveal>
			<p class="eyebrow">AI solutions</p>
			<h2>AI that does real work inside your software</h2>
			<p class="lead">We skip the demo-only chatbot. Our AI work is tied to a business task, tested on your own data and shipped with the safeguards a live product needs.</p>
			<ul class="check-list">
				<li>${icon('check', 20)} Answers grounded in your documents, with sources</li>
				<li>${icon('check', 20)} Human approval on the steps that matter</li>
				<li>${icon('check', 20)} Quality and cost tracked from day one</li>
			</ul>
			<a class="btn btn-primary" href="/ai-solutions/">See what we build with AI ${icon('arrow', 18)}</a>
		</div>
		<div class="mini-grid" data-reveal>
				${aiMini}
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'Our work', title: 'Products we have built with clients', text: 'Recent projects, and what a client said about working with us.' })}
		<div class="work-grid">
			${c.projects.slice(0, 3).map(projectCard).join('\n\t\t\t')}
		</div>
		${c.testimonials.length ? `<div class="case-quote">${quoteCard(c.testimonials[0])}</div>` : ''}
		<p class="work-more" data-reveal><a class="text-link" href="/our-work/">See all our work ${icon('arrow', 16)}</a></p>
	</div>
</section>

<section class="section">
	<div class="container">
		${sectionHead({ eyebrow: 'How we work', title: 'A clear path from first call to live product' })}
		${processList()}
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'Technology', title: 'Modern tools, chosen for your problem', text: 'We pick the stack that fits your team and goals. These are the technologies we work with most.' })}
		<div class="stack-grid">
				${stackGroups}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">Why Neucent</p>
				<h2>Small enough to care, capable enough to deliver</h2>
				<p>We keep the team close to the work and the work close to you.</p>
			</div>
			<div class="feature-list">
				${featureList(c.principles)}
			</div>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'Industries', title: 'Software for the way your industry works' })}
		${chips(c.industries, true)}
	</div>
</section>

<section class="section" id="where-we-work">
	<div class="container">
		${sectionHead({ eyebrow: 'Where we work', title: 'Software development for India, Tanzania, Africa and the USA', text: 'We have offices in India and Tanzania and have delivered projects for clients in India, Zimbabwe, elsewhere in Africa and the USA. We work remotely and in person where it helps.' })}
		<div class="area-grid">
			<article class="card area-card" data-reveal>
				<h3>Delhi region and Uttar Pradesh</h3>
				<p>Web, app and AI development for businesses in and around Delhi, including Meerut and Bijnor.</p>
				${chips([...site.serviceAreas.ncr, ...site.serviceAreas.up.slice(0, 2)])}
			</article>
			<article class="card area-card" data-reveal>
				<h3>All of India</h3>
				<p>Custom software, mobile apps and school management systems for startups, schools and businesses in every state.</p>
				${chips(site.serviceAreas.india)}
			</article>
			<article class="card area-card" data-reveal>
				<h3>Tanzania</h3>
				<p>Our Tanzania office is in Arusha. Website, mobile app, AI and school software development for businesses across Tanzania.</p>
				${chips(site.serviceAreas.tanzania)}
			</article>
			<article class="card area-card" data-reveal>
				<h3>Zimbabwe and Africa</h3>
				<p>Web platforms and apps built for clients in Zimbabwe and elsewhere in Africa, delivered remotely.</p>
				${chips([...site.serviceAreas.zimbabwe, ...site.serviceAreas.africa.slice(2, 6)])}
			</article>
			<article class="card area-card" data-reveal>
				<h3>United States</h3>
				<p>Software, web and mobile development for US businesses, with a founder based in the USA for easy time-zone overlap.</p>
				${chips(site.serviceAreas.usa)}
			</article>
		</div>
	</div>
</section>

<section class="section">
	<div class="container container-narrow">
		${sectionHead({ eyebrow: 'Questions', title: 'Things people ask before we start' })}
		${faqList()}
	</div>
</section>

${cta()}`;

	return {
		path: '/',
		title: 'Neucent Technologies | Web, Mobile & AI Software',
		description: 'Neucent Technologies builds websites, mobile apps, AI chatbots and school software for clients in India, Africa, Tanzania and the USA.',
		keywords: 'software development company Tanzania, software company Arusha, web development company Arusha, mobile app development Tanzania, app developers Dar es Salaam, website design Arusha, IT company Tanzania, AI chatbot Tanzania, software development company Zimbabwe, web development Zimbabwe, software company Harare, Indian software company for African clients, software development company Africa, outsourced software development India, offshore software development India for USA, software development company for US startups, IT outsourcing India,software development company in Noida, web development company Noida, mobile app development Delhi NCR, AI chatbot development India, website design Meerut, software company Bijnor, school management system India, custom software development India, web development Tanzania, mobile app development Tanzania, software company Dar es Salaam, hire developers India',
		jsonld: {
			'@context': 'https://schema.org',
			'@type': ['Organization', 'ProfessionalService'],
			areaServed: [
				{ '@type': 'Country', name: 'India' },
				{ '@type': 'Country', name: 'Tanzania' },
				...[...site.serviceAreas.ncr, ...site.serviceAreas.up.slice(0, 2)].map((n) => ({ '@type': 'City', name: n })),
			],
			knowsAbout: ['Web development', 'Mobile app development', 'AI chatbot development', 'School management software', 'Cloud and DevOps'],
			name: site.name,
			legalName: site.legalName,
			foundingDate: site.founded,
			url: site.url + '/',
			email: site.email || undefined,
			telephone: site.phone || undefined,
			address: [
				site.addressParts && { '@type': 'PostalAddress', ...site.addressParts },
				site.tanzania && { '@type': 'PostalAddress', ...site.tanzania.addressParts },
			].filter(Boolean),
			sameAs: site.linkedin ? [site.linkedin] : undefined,
		},
		body,
	};
}

/* ---- Services ----------------------------------------------------------- */

function services() {
	const rows = c.services.map((s, i) => `<article class="service-row${i % 2 ? ' is-flip' : ''}" id="${esc(s.slug)}" data-reveal>
					<div class="service-intro">
						<span class="card-icon">${icon(s.icon, 28)}</span>
						<h2>${esc(s.title)}</h2>
						<p>${esc(s.summary)}</p>
						${s.link ? `<a class="text-link" href="${esc(s.link)}">Explore our AI solutions ${icon('arrow', 16)}</a>` : ''}
					</div>
					<ul class="check-list check-list-dark">
						${s.points.map((p) => `<li>${icon('check', 20)} ${esc(p)}</li>`).join('\n\t\t\t\t\t\t')}
					</ul>
				</article>`).join('\n\t\t\t');

	const models = c.engagementModels.map((m) => `<article class="card" data-reveal>
					<h3>${esc(m.title)}</h3>
					<p>${esc(m.text)}</p>
				</article>`).join('\n\t\t\t\t');

	const body = `${pageHero({ eyebrow: 'Services', title: 'Software, designed and built end to end', lead: 'Web, mobile, AI and cloud engineering from one team, with design and quality assurance included.' })}

<section class="section">
	<div class="container">
		<div class="service-list">
			${rows}
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'Ways to work together', title: 'Pick the model that fits your stage' })}
		<div class="card-grid card-grid-3">
				${models}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		${sectionHead({ eyebrow: 'Hire dedicated developers', title: 'Extra hands on your own roadmap', text: 'Bring in engineers by role and manage the work alongside your team.' })}
		${chips(c.hireRoles, true)}
		<p class="work-more" data-reveal><a class="btn btn-primary" href="/contact-us/">Tell us who you need ${icon('arrow', 18)}</a></p>
	</div>
</section>

${cta({ title: 'Software for schools and colleges', text: 'A public school website with a student and teacher management system for admissions, attendance, fees, staff, timetables and notices.', href: '/school-management-system/', label: 'See the school system' })}

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'Our process', title: 'How a project runs' })}
		${processList()}
	</div>
</section>

${cta()}`;

	return {
		path: '/services/',
		title: 'Web, Mobile App & AI Development Services | Neucent',
		description: 'Web and mobile app development, AI chatbots, cloud and DevOps, UI/UX design and testing for clients in India, Africa, Tanzania and the USA.',
		keywords: 'web development services Tanzania, website development Arusha, mobile app development Arusha, app development Dar es Salaam, web development services India, mobile app development company Noida, website development Meerut, app development Bijnor, AI development services India, DevOps services India, UI UX design company Delhi NCR, software development Tanzania, website design Tanzania, hire dedicated developers India',
		body,
	};
}

/* ---- AI solutions ------------------------------------------------------- */

function ai() {
	const caps = c.aiCapabilities.map((cap) => `<article class="card" data-reveal>
					<span class="card-icon">${icon(cap.icon, 26)}</span>
					<h3>${esc(cap.title)}</h3>
					<p>${esc(cap.summary)}</p>
				</article>`).join('\n\t\t\t\t');

	const toolkit = [...c.stack.AI, 'Python', 'FastAPI', 'PostgreSQL', 'Docker'];

	const body = `${pageHero({ eyebrow: 'AI solutions', title: 'Practical AI, built into the software you run', lead: 'We turn language models, computer vision and machine learning into features your team and customers use every day.' })}

<section class="section">
	<div class="container">
		${sectionHead({ eyebrow: 'What we build', title: 'Six ways AI earns its place in a product' })}
		<div class="card-grid">
				${caps}
		</div>
	</div>
</section>

<section class="section section-dark">
	<div class="container">
		${sectionHead({ eyebrow: 'Our approach', title: 'From idea to a feature people trust', text: 'AI projects go wrong when they skip evaluation. Ours are organised around it.' })}
		${processList(c.aiSteps)}
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">Responsible by design</p>
				<h2>Safeguards are part of the build</h2>
				<p>Reliable AI is mostly careful engineering around the model. These practices apply to every project.</p>
			</div>
			<div class="feature-list">
				${featureList(c.aiPrinciples)}
			</div>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'AI toolkit', title: 'What we work with' })}
		${chips(toolkit, true)}
	</div>
</section>

${cta({ title: 'Not sure where AI fits?', text: 'Describe the task that slows your team down. We will tell you honestly whether AI helps and what a first pilot would look like.' })}`;

	return {
		path: '/ai-solutions/',
		title: 'AI Solutions: Chatbots & Automation | Neucent',
		description: 'AI assistants, chatbots, voicebots, document AI and workflow automation built into your web and mobile products, with proper testing.',
		keywords: 'AI chatbot development India, AI development company Noida, voicebot development India, AI automation Delhi NCR, generative AI solutions India, AI chatbot Tanzania, machine learning company India',
		body,
	};
}

/* ---- About -------------------------------------------------------------- */

function about() {
	const cards = (items, withIcon) => items.map((i) => `<article class="card" data-reveal>
					${withIcon ? `<span class="card-icon">${icon(i.icon, 26)}</span>` : ''}
					<h3>${esc(i.title)}</h3>
					<p>${esc(i.text)}</p>
				</article>`).join('\n\t\t\t\t');

	const body = `${pageHero({ eyebrow: 'About Neucent', title: 'A software team that treats your product like its own', lead: 'Neucent Technologies builds web applications, mobile apps and AI-powered software for businesses that want a partner, not just a vendor.' })}

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">Who we are</p>
				<h2>Engineers, designers and problem-solvers</h2>
			</div>
			<div class="prose" data-reveal>
				<p>We are a software development company focused on building products that people rely on every day. Our work spans web platforms, mobile apps and the growing set of AI capabilities that make software more helpful.</p>
				<p>We care about the unglamorous parts as much as the visible ones: clear requirements, tidy code, honest estimates, tests that run on every change and documentation your team can actually use.</p>
				<p>Our approach to AI is the same as our approach to everything else. Start from a real problem, test the idea early, and ship it with the monitoring and safeguards it needs to be trusted.</p>
			</div>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'Our story', title: 'From two people to clients across Africa, India and the USA' })}
		${timelineList()}
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="card-grid card-grid-2">
			<article class="card" data-reveal>
				<span class="card-icon">${icon('rocket', 26)}</span>
				<h3>Our mission</h3>
				<p>To make everyday life simpler and help businesses grow with AI-backed technology that is sustainable and intelligent, wherever they are in the world.</p>
			</article>
			<article class="card" data-reveal>
				<span class="card-icon">${icon('globe', 26)}</span>
				<h3>Our vision</h3>
				<p>To grow through long-term relationships, working closely with the people we build for so that the results last.</p>
			</article>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'What guides us', title: 'How we choose to work' })}
		<div class="card-grid card-grid-2">
				${cards(c.principles, true)}
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		${sectionHead({ eyebrow: 'Working with us', title: 'Engagement models', text: 'Start small with a single feature or bring us in for the long run. The structure follows your needs.' })}
		<div class="card-grid card-grid-3">
				${cards(c.engagementModels, false)}
		</div>
	</div>
</section>

${cta()}`;

	return {
		path: '/about-us/',
		title: 'About Neucent Technologies | Software Company',
		description: 'Neucent Technologies is a software company with projects delivered in India, Zimbabwe, Africa and the USA, building web, mobile and AI products.',
		keywords: 'Neucent Technologies, software company Arusha, software company Tanzania, software company Noida, IT company Delhi NCR, software company India, software development Tanzania',
		body,
	};
}

/* ---- Contact ------------------------------------------------------------ */

function contact() {
	const options = (map, selected) => Object.entries(map)
		.map(([value, label]) => `<option value="${esc(value)}"${value === selected ? ' selected' : ''}>${esc(label)}</option>`)
		.join('\n\t\t\t\t\t\t\t');

	const details = [
		site.email && `<li>${icon('mail', 22)}<div><strong>Email</strong><a href="mailto:${esc(site.email)}">${esc(site.email)}</a></div></li>`,
		site.phone && `<li>${icon('phone', 22)}<div><strong>Phone</strong><a href="tel:${esc(site.phone.replace(/[^0-9+]/g, ''))}">${esc(site.phone)}</a></div></li>`,
		site.whatsapp && `<li>${icon('whatsapp', 22)}<div><strong>WhatsApp</strong><a href="https://wa.me/${esc(site.whatsapp)}" target="_blank" rel="noopener">Message us</a></div></li>`,
		site.address && `<li>${icon('pin', 22)}<div><strong>${esc(site.addressLabel || 'Office')}</strong><span>${esc(site.address).replace(/\n/g, '<br>')}</span><a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(site.address.replace(/\n/g, ' '))}" target="_blank" rel="noopener">Get directions</a></div></li>`,
		site.tanzania && `<li>${icon('pin', 22)}<div><strong>${esc(site.tanzania.label)}</strong><span>${esc(site.tanzania.address).replace(/\n/g, '<br>')}</span><a class="map-link" href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(site.tanzania.address.replace(/\n/g, ' '))}" target="_blank" rel="noopener">Get directions</a></div></li>`,
	].filter(Boolean).join('\n\t\t\t\t');

	const body = `${pageHero({ eyebrow: 'Contact', title: 'Tell us what you want to build', lead: 'Share a few details and we will get back to you with questions, ideas and a suggested next step.' })}

<section class="section">
	<div class="container contact-grid">
		<div class="form-card" id="contact-form">
			<div id="form-status" class="notice" role="status" hidden></div>

			<form class="contact-form" method="post" action="/contact-us/send.php" data-contact-form>
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
							${options(c.formServices, 'web')}
						</select>
					</div>
				</div>

				<div class="field-row">
					<div class="field">
						<label for="cf-budget">Approximate budget</label>
						<select id="cf-budget" name="budget">
							${options(c.formBudgets, 'unsure')}
						</select>
					</div>
					<div class="field">
						<label for="cf-timeline">When do you want to start?</label>
						<select id="cf-timeline" name="timeline">
							${options(c.formTimelines, 'flexible')}
						</select>
					</div>
				</div>

				<div class="field">
					<label for="cf-message">Project details <span aria-hidden="true">*</span></label>
					<textarea id="cf-message" name="message" rows="6" minlength="10" maxlength="5000" required></textarea>
				</div>

				<div class="hp-field" aria-hidden="true">
					<label for="cf-company">Leave this field empty</label>
					<input id="cf-company" name="company_website" type="text" tabindex="-1" autocomplete="off">
				</div>
				<input type="hidden" name="t" value="" data-form-time>

				<button class="btn btn-primary" type="submit">Send message ${icon('arrow', 18)}</button>
			</form>
		</div>

		<aside class="contact-side" data-reveal>
			<h2>Prefer to talk directly?</h2>
			<ul class="contact-list">
				${details}
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
</section>`;

	return {
		path: '/contact-us/',
		title: 'Contact Neucent Technologies | Start Your Project',
		description: 'Contact Neucent Technologies for web, mobile app, AI and school software projects. Call or WhatsApp +91 82879 39308 from anywhere.',
		keywords: 'software company Arusha contact, IT company Arusha Tanzania, hire app developer Tanzania, contact software company Noida, hire app developer Delhi NCR, website developer Meerut, app developer Bijnor, software developer Tanzania',
		body,
	};
}

/* ---- Our work ----------------------------------------------------------- */

function caseSection(p, standalone = false) {
		const testimonial = c.testimonials.find((t) => t.project === p.slug);
		return `<section class="section${!standalone && c.projects.indexOf(p) % 2 ? ' section-mist' : ''}" id="${esc(p.slug)}">
	<div class="container">
		<div class="case-head" data-reveal>
			<p class="eyebrow">Case study</p>
			<h2>${esc(p.name)}</h2>
			<p class="case-kind">${esc(p.kind)}</p>
			${chips(p.tags)}
			${standalone ? '' : `<p class="case-visit"><a class="text-link" href="/our-work/${esc(p.slug)}/">Open this case study on its own page ${icon('arrow', 16)}</a></p>`}
			${[p.url, ...(p.urls || [])].filter(Boolean).map((u) => `<p class="case-visit"><a class="text-link" href="${esc(u)}" target="_blank" rel="noopener">Visit ${esc(u.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''))} ${icon('arrow', 16)}</a></p>`).join('\n\t\t\t')}
			${p.page ? `<p class="case-visit"><a class="text-link" href="${esc(p.page)}">See how our school management system works ${icon('arrow', 16)}</a></p>` : ''}
		</div>
		${p.image ? `<figure class="browser-shot" data-reveal>
			<div class="browser-bar" aria-hidden="true"><i></i><i></i><i></i></div>
			${shot(p.image, '(min-width: 1220px) 1180px, 96vw', true)}
		</figure>` : ''}
		<div class="split">
			<div data-reveal>
				<h3>About the project</h3>
				<div class="prose">${p.about.map((t) => `<p>${esc(t)}</p>`).join('')}</div>
				<h3 class="prose-gap">How we worked</h3>
				<div class="prose">${p.approach.map((t) => `<p>${esc(t)}</p>`).join('')}</div>
			</div>
			${p.offers ? `<div data-reveal>
				<h3>What the platform offers</h3>
				<ul class="check-list check-list-dark offers-list">
					${p.offers.map((o) => `<li>${icon('check', 20)} ${esc(o)}</li>`).join('\n\t\t\t\t\t')}
				</ul>
			</div>` : ''}
		</div>
		${testimonial ? `<div class="case-quote">${quoteCard(testimonial)}</div>` : ''}
	</div>
</section>`;
}

/** One page per case study, at /our-work/<slug>/. */
function caseStudyPages() {
	return c.projects.map((p) => ({
		path: `/our-work/${p.slug}/`,
		title: `${p.name} Case Study | Neucent`,
		description: p.metaDescription || p.summary,
		keywords: `${p.name}, ${p.kind}, ${p.tags.join(', ')}, Neucent Technologies case study`,
		jsonld: {
			'@context': 'https://schema.org',
			'@type': 'CreativeWork',
			name: p.name,
			description: p.summary,
			creator: { '@type': 'Organization', name: site.name, url: site.url + '/' },
			url: `${site.url}/our-work/${p.slug}/`,
		},
		body: `${pageHero({ eyebrow: 'Case study', title: p.name, lead: p.summary })}
${caseSection(p, true)}
${cta({ title: 'Have a project like this?', text: 'Tell us about your idea. We will reply with questions, ideas and a suggested first step.' })}
<section class="section"><div class="container"><p><a class="text-link" href="/our-work/">All our work ${icon('arrow', 16)}</a></p></div></section>`,
	}));
}

function work() {
	const studies = c.projects.map((p) => caseSection(p)).join('\n\n');

	// Case studies alternate white / grey starting with white; the sections after them continue the pattern.
	const moreTone = c.projects.length % 2 ? ' section-mist' : '';
	const industriesTone = c.projects.length % 2 ? '' : ' section-mist';

	const tiles = c.otherProjects.map((p) => `<li class="project-tile" data-reveal>
				<strong>${esc(p.name)}</strong>
				${p.focus ? `<span class="tile-tag">${esc(p.focus)}</span>` : ''}
			</li>`).join('\n\t\t\t');

	const body = `${pageHero({ eyebrow: 'Our work', title: 'Products we have built with clients', lead: 'Real projects for real teams: a family-history platform for Zimbabwe and Africa, an NGO website and a school management system in India, and healthcare and telecom software for clients in the USA.' })}

${studies}

<section class="section${moreTone}">
	<div class="container">
		${sectionHead({ eyebrow: 'More projects', title: 'Other teams we have worked with', text: 'A selection of further projects. Ask us about any of them and we will share what we did.' })}
		<ul class="tile-grid">
			${tiles}
		</ul>
	</div>
</section>

<section class="section${industriesTone}">
	<div class="container">
		${sectionHead({ eyebrow: 'Where we have worked', title: 'Industries and platforms', text: 'Our projects have spanned these areas, and we bring what we learn in each one to the next.' })}
		${chips(c.industries, true)}
	</div>
</section>

${cta({ title: 'Have a project like this?', text: 'Tell us about your idea. We will reply with questions, ideas and a suggested first step.' })}`;

	return {
		path: '/our-work/',
		keywords: 'software development portfolio India, website projects Bijnor, NGO website development, school website Uttar Pradesh, case studies web development India',
		title: 'Our Work | Web, App & School Software | Neucent',
		description: 'Projects built with clients: a family-history platform, an NGO website and a school website with a student and teacher management system.',
		body,
	};
}

/* ---- School management system ------------------------------------------ */

function school() {
	const project = c.projects.find((p) => p.slug === 'jvmic');

	const groups = c.schoolGroups.map((g) => `<div class="module-group">
			<h3 class="group-title" data-reveal>${esc(g.title)}</h3>
			<p class="group-intro" data-reveal>${esc(g.intro)}</p>
			<div class="card-grid ${g.items.length === 3 ? '' : 'card-grid-2'}">
				${g.items.map((i) => `<article class="card" data-reveal>
					<span class="card-icon">${icon(i.icon, 26)}</span>
					<h4 class="card-title">${esc(i.title)}</h4>
					<p>${esc(i.text)}</p>
				</article>`).join('\n\t\t\t\t')}
			</div>
		</div>`).join('\n\t\t');

	const body = `${pageHero({ eyebrow: 'School software', title: 'School website and management system', lead: 'One place to run admissions, attendance, fees, teachers, classes and notices, together with a public website that shows your school at its best.' })}

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">Overview</p>
				<h2>Built around how a school really runs</h2>
			</div>
			<div class="prose" data-reveal>
				<p>A school keeps track of a great deal: who is enrolled, who came in today, what each family owes, which teacher takes which class. Our school management system gathers that information in one place, next to a public website that keeps parents and the community informed.</p>
				<p>We have built it for ${esc(project.name)} in Nehtaur, Bijnor, Uttar Pradesh, a school established in 1948 that teaches classes 6 to 12. <a href="/our-work/#jvmic">Read the case study</a>.</p>
			</div>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'The management system', title: 'What it covers', text: 'Seven modules for the daily work of students, teachers and the school office.' })}
		${groups}
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="split">
			<div class="split-head" data-reveal>
				<p class="eyebrow">The public website</p>
				<h2>A clear face for the school</h2>
				<p>The website is what parents, students and the community see first. It carries the school's story and its latest notices.</p>
			</div>
			<ul class="check-list check-list-dark offers-list" data-reveal>
				${c.schoolWebsite.map((w) => `<li>${icon('check', 20)} ${esc(w)}</li>`).join('\n\t\t\t\t')}
			</ul>
		</div>
	</div>
</section>

<section class="section section-mist">
	<div class="container">
		${sectionHead({ eyebrow: 'How we work with a school', title: 'From first conversation to a working system' })}
		${processList()}
	</div>
</section>

${cta({ title: 'Want a system like this for your school?', text: 'Tell us about your school: its classes, its staff and what you keep track of today. We will suggest where to start.', label: 'Talk to us about your school' })}`;

	return {
		path: '/school-management-system/',
		title: 'School Management System & Website | Neucent',
		description: 'School management software and website: admissions, attendance, fees, staff, timetables, notices and SMS or WhatsApp alerts.',
		keywords: 'school management system India, school ERP software, school software Bijnor, school management software Meerut, school website development Uttar Pradesh, college management software, school management system Tanzania, fee management software, attendance software for schools',
		body,
	};
}

/* ---- Privacy policy ----------------------------------------------------- */

function privacy() {
	const body = `${pageHero({ eyebrow: 'Privacy', title: 'Privacy policy', lead: 'What we collect when you use this website, why, and the choices you have. We keep it short and plain.' })}
<section class="section">
	<div class="container">
		<div class="prose legal">
			<p>This policy applies to ${esc(site.url.replace('https://www.', ''))} and the enquiries you send us through it. The website is run by ${esc(site.legalName)}, ${esc(site.address.replace(/\n/g, ' '))}.</p>

			<h2>What we collect</h2>
			<p>We collect only what you choose to send us.</p>
			<ul>
				<li><strong>Contact form:</strong> your name, email address, phone number (optional), the service you are interested in, a budget range and your message.</li>
				<li><strong>Email, phone and WhatsApp:</strong> whatever you share when you contact us directly, such as your name, number and the details of your project.</li>
			</ul>

			<h2>What we do not collect</h2>
			<p>This website does not set cookies and does not use analytics, advertising or tracking tools. It does not load fonts, scripts or embedded content from other companies.</p>
			<p>Like any web host, our hosting provider may keep standard server logs (for example your IP address and the pages requested) for security and reliability.</p>

			<h2>How we use it</h2>
			<ul>
				<li>To reply to your enquiry and to discuss or deliver the services you ask about.</li>
				<li>To keep a record of our communication with you.</li>
				<li>To protect the form from spam. For this we briefly remember a scrambled (hashed) form of your IP address and the time of your submissions, so that one visitor cannot send many messages in a short period.</li>
			</ul>
			<p>We do not sell your personal information and we do not use it for advertising.</p>

			<h2>Where it is kept and who sees it</h2>
			<p>Enquiries are stored in our database and/or emailed to our team. They are seen only by people at Neucent who need them to respond. We share information with others only where it is needed to run the website or deliver your project (for example our hosting and email providers), or where the law requires it.</p>
			<p>The WhatsApp button opens WhatsApp, which is run by another company and has its own privacy policy.</p>

			<h2>How long we keep it</h2>
			<p>We keep enquiries for as long as we need them to respond to you and to keep a record of our communication, and then delete them.</p>

			<h2>Your choices</h2>
			<p>You can ask us at any time to show you the information we hold about you, correct it, or delete it. Email <a href="mailto:${esc(site.email)}">${esc(site.email)}</a> and we will reply.</p>

			<h2>Changes to this policy</h2>
			<p>If we change how this website handles personal information, we will update this page. Last updated: November 2026.</p>

			<h2>Contact</h2>
			<p>${esc(site.legalName)}<br>${esc(site.address).replace(/\n/g, '<br>')}<br>Email: <a href="mailto:${esc(site.email)}">${esc(site.email)}</a><br>Phone: ${esc(site.phone)}${site.tanzania ? `<br>${esc(site.tanzania.label)}: ${esc(site.tanzania.address).replace(/\n/g, ' ')}` : ''}</p>
		</div>
	</div>
</section>`;

	return {
		path: '/privacy-policy/',
		title: 'Privacy Policy | Neucent Technologies',
		description: 'How Neucent Technologies handles the information you send through this website: what we collect, how we use it and your choices.',
		body,
	};
}

/* ---- 404 ---------------------------------------------------------------- */

function notFound() {
	const body = `${pageHero({ eyebrow: 'Error 404', title: 'This page could not be found', lead: 'The link may be out of date, or the page may have moved.' })}
<section class="section">
	<div class="container empty-state">
		<div class="btn-row">
			<a class="btn btn-primary" href="/">Back to home</a>
			<a class="btn btn-outline" href="/contact-us/">Contact us</a>
		</div>
	</div>
</section>`;

	return {
		path: '/404.html',
		title: 'Page not found | Neucent Technologies',
		description: 'The page you were looking for could not be found.',
		noindex: true,
		body,
	};
}

module.exports = { home, services, ai, work, school, about, contact, privacy, notFound, caseStudyPages };
