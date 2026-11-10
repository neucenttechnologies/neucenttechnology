'use strict';
/**
 * Site copy kept in one place so a wording change happens once and every
 * page that uses it stays in sync. Edit the text here, then rebuild.
 *
 * Facts about the company, clients and projects come from the old website
 * (main branch). Descriptions are re-written in our own words.
 */

const services = [
	{
		slug: 'web',
		icon: 'web',
		title: 'Web and e-commerce development',
		summary: 'Customer portals, SaaS platforms, marketplaces, online stores and internal tools that stay fast and easy to change as your business grows.',
		points: [
			'Custom web apps in React, Angular, Vue, Node.js, PHP, Python, Java and .NET',
			'Online stores and content sites on WordPress, Magento, Shopify or Laravel',
			'APIs, integrations and third-party connections',
			'Performance, accessibility and SEO built in',
		],
	},
	{
		slug: 'mobile',
		icon: 'mobile',
		title: 'Mobile app development',
		summary: 'Android and iOS apps, native or cross-platform, designed around how people actually use their phones.',
		points: [
			'Native Android and iOS, plus Flutter, React Native and Ionic',
			'Offline mode, sync, push notifications and payments',
			'Maps, camera, biometrics and device features',
			'App Store and Google Play release support',
		],
	},
	{
		slug: 'ai',
		icon: 'ai',
		title: 'AI, chatbots and voicebots',
		summary: 'Assistants, search, document processing and automation that plug into your existing software and data.',
		points: [
			'Chatbots and voicebots for customer conversations',
			'LLM assistants and knowledge search over your own content',
			'Document, image and speech understanding',
			'Workflow automation with human approval steps',
		],
		link: '/ai-solutions/',
	},
	{
		slug: 'cloud',
		icon: 'cloud',
		title: 'Cloud, DevOps and security',
		summary: 'Reliable infrastructure and release pipelines so shipping a change is routine, and security reviews that keep it that way.',
		points: [
			'Cloud architecture on AWS, Azure and Google Cloud',
			'CI/CD pipelines, containers and infrastructure as code',
			'Monitoring, alerting and cost review',
			'Cybersecurity assessment for startups and enterprises',
		],
	},
	{
		slug: 'iot',
		icon: 'chip',
		title: 'IoT and blockchain',
		summary: 'Connected devices and decentralised applications for teams that need automation or transparent records.',
		points: [
			'IoT device connectivity, dashboards and automation',
			'Smart contracts and Web3 applications',
			'Wallet, token and crypto integrations',
			'Prototypes you can test before scaling',
		],
	},
	{
		slug: 'design',
		icon: 'design',
		title: 'Design, testing and support',
		summary: 'Research-led interface design, quality checks during the build and dependable care after launch.',
		points: [
			'UI/UX design, prototypes and design systems',
			'Manual and automated testing',
			'Bug fixing, upgrades and feature work on retainer',
			'Takeover and cleanup of existing codebases',
		],
	},
	{
		slug: 'seo',
		icon: 'search',
		title: 'SEO and digital marketing',
		summary: 'Search engine optimization and digital marketing that help the right people find your website and your business online.',
		points: [
			'Search engine optimization (SEO) for your website',
			'Digital marketing for online visibility and growth',
		],
	},
];

const aiCapabilities = [
	{ icon: 'chat', title: 'Chatbots and voicebots', summary: 'Support and internal assistants, by text or voice, that answer from your own policies and data and pass the conversation to a person when they are unsure.' },
	{ icon: 'search', title: 'Knowledge search', summary: 'Ask a question in plain language and get an answer drawn from your documents, wikis and tickets, with the sources shown.' },
	{ icon: 'eye', title: 'Document and vision AI', summary: 'Read invoices, forms and IDs, pull out the fields you need, and flag images that need a human look.' },
	{ icon: 'flow', title: 'Workflow automation', summary: 'Agents that carry out multi-step tasks across your tools, with approval checkpoints where the stakes are high.' },
	{ icon: 'chart', title: 'Predictive models', summary: 'Forecasting, scoring and recommendation models trained on your history and tested before they influence a decision.' },
	{ icon: 'code', title: 'AI inside your product', summary: 'Add summaries, drafting, classification or smart search to a web or mobile app you already run.' },
];

const aiSteps = [
	{ title: 'Pick the right problem', text: 'We start with the task that costs you the most time or money and check whether AI is the right tool for it at all.' },
	{ title: 'Test on your data', text: 'Before building anything large, we assemble real examples and measure how well the approach works on them.' },
	{ title: 'Build a working pilot', text: 'A small, usable version goes to a real group of users, so feedback comes from practice and not from slides.' },
	{ title: 'Ship with guardrails', text: 'Monitoring, fallbacks, human review and spend limits go live together with the feature.' },
	{ title: 'Measure and improve', text: 'We track quality and cost after launch and tune prompts, data and models as usage grows.' },
];

const aiPrinciples = [
	{ icon: 'lock', title: 'Your data, your rules', text: 'We choose model providers and hosting, including your own cloud account, to match your data and compliance requirements.' },
	{ icon: 'chart', title: 'Measured, not guessed', text: 'Every AI feature has test cases and a quality target, so "it seems good" is never the acceptance criterion.' },
	{ icon: 'users', title: 'People stay in the loop', text: 'Sensitive actions go through review. The system knows when to say "I am not sure" and hand off.' },
	{ icon: 'layers', title: 'Costs you can predict', text: 'We track latency and per-request cost from the first prototype and design around a budget.' },
];

const process = [
	{ title: 'Discover', text: 'We learn your users, goals and constraints, then agree on scope, priorities and a realistic plan.' },
	{ title: 'Design', text: 'Wireframes and clickable prototypes let you react to something real before code is written.' },
	{ title: 'Build', text: 'Short agile cycles with a working demo at the end of each one, so progress is visible and course corrections are cheap.' },
	{ title: 'Launch', text: 'Testing, security checks and a staged release, with documentation and a handover session for your team.' },
	{ title: 'Improve', text: 'We stay on to fix, monitor and extend the product based on how people really use it.' },
];

/** Technology groups, based on the stack the old site listed. */
const stack = {
	Web: ['React', 'Angular', 'Vue', 'Node.js', 'PHP', 'Laravel', 'Python', 'Java', '.NET', 'Ruby on Rails'],
	'CMS and e-commerce': ['WordPress', 'Magento', 'Shopify'],
	Mobile: ['Android', 'iOS', 'Flutter', 'React Native', 'Ionic'],
	AI: ['Chatbots', 'Voicebots', 'LLM APIs', 'Retrieval (RAG)', 'PyTorch', 'OCR'],
	Cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'GitHub Actions'],
	Emerging: ['IoT', 'Blockchain', 'Web3'],
};

/** Industries the old site named, plus the platforms described in our history. */
const industries = [
	'Healthcare and fitness',
	'Telecom and communications',
	'Education and e-learning',
	'HR and workforce (HRMS)',
	'Banking and finance',
	'Food and delivery',
	'Social and community platforms',
	'Non-profit and NGOs',
];

/** Roles listed under staffing on the old site. */
const hireRoles = [
	'Android developers',
	'iOS developers',
	'React developers',
	'React Native developers',
	'Node.js developers',
	'PHP developers',
	'WordPress developers',
	'Magento developers',
	'DevOps engineers',
];

const principles = [
	{ icon: 'users', title: 'Direct access to the people building', text: 'You talk to the engineers and designers doing the work, not through layers of account managers.' },
	{ icon: 'rocket', title: 'A demo every cycle', text: 'Progress is something you can click through, not a status report you have to trust.' },
	{ icon: 'code', title: 'You own the code', text: 'Source, designs and accounts are yours. Clean structure and documentation mean you are never locked in.' },
	{ icon: 'shield', title: 'Quality and security by default', text: 'Reviews, tests and dependency checks are part of the normal workflow and not an extra at the end.' },
];

const engagementModels = [
	{ title: 'Fixed-scope project', text: 'A defined product or feature with an agreed plan and price. Best when requirements are clear.' },
	{ title: 'Dedicated developers', text: 'Engineers and designers who work as an extension of your team on an ongoing roadmap. Hire by role, from mobile to DevOps.' },
	{ title: 'Support retainer', text: 'Monthly capacity for fixes, upgrades and small features on a product that is already live.' },
];

/** Company history, from the About page of the old site. */
const timeline = [
	{ year: '2020', title: 'Neucent begins', text: 'We start as a two-person company: one founder in the USA and one in India, building web and mobile products for early clients.' },
	{ year: '2023', title: 'Growing across continents', text: 'Customers in Zimbabwe, the rest of Africa and the USA join us, and the work expands into products such as a family-history platform, healthcare and telecom software for US clients, and a social platform.' },
	{ year: 'In India', title: 'Rooted in India too', text: 'From our Noida office we build for Indian clients as well, including a welfare society in Bijnor and a school with its own management system, and we are growing our work in India, Africa and the USA.' },
	{ year: 'Today', title: 'Built around AI', text: 'We combine web, mobile and cloud engineering with AI features such as chatbots, voicebots and automation.' },
];

/** Case studies. Add a new object here to add a project to the Our Work page. */
const projects = [
	{
		slug: 'zimtribes',
		name: 'ZimTribes and Afrikatribes',
		kind: 'Family history and heritage platform',
		tags: ['Web platform', 'Agile delivery', 'DevOps'],
		urls: ['https://www.zimtribes.com/', 'https://tribes.africa/'],
		summary: 'An online home for family history, where families record their lineage and discover how they are connected to the people around them.',
		image: {
			src: '/assets/img/work/zimtribes-1600.webp',
			src800: '/assets/img/work/zimtribes-800.webp',
			width: 1600,
			height: 1124,
			alt: 'The ZimTribes home page: a search box for surnames and totems over a photograph of a large tree, with a family-tree sign-up panel, a clan map of Zimbabwe and a list of trending history articles.',
		},
		about: [
			'ZimTribes ("know your roots") is a family history and heritage platform for Zimbabwe. Families can register, build a family tree for free and keep their lineage for the generations that follow.',
			'The platform also helps people see how they are related to one another. Often the person next to you, or your neighbour, turns out to be family. Afrikatribes takes the same idea across Africa.',
		],
		offers: [
			'Search by surname or totem',
			'Browse by province, from Harare to Matabeleland South',
			'Locate your clan on a map of Zimbabwe',
			'Register and build your own family tree',
			'Read articles on the history of districts and peoples',
			'Newsletter, member login and donations',
		],
		approach: [
			'We delivered the platform as a web application, working in agile cycles so the client could review progress and steer priorities along the way.',
			'DevOps practices supported releases, so new features reached users smoothly and on schedule.',
		],
	},
	{
		slug: 'anokha-prayas',
		name: 'Anokha Prayas Welfare Society',
		kind: 'Website for an education-focused NGO',
		tags: ['NGO website', 'Hindi and English', 'Events and results'],
		url: 'https://anokhaprayas.com',
		summary: 'A public home for an education-focused welfare society in Uttar Pradesh, showing its events, student results, photo gallery, team and donation appeal.',
		image: {
			src: '/assets/img/work/anokha-prayas-1600.webp',
			src800: '/assets/img/work/anokha-prayas-800.webp',
			width: 1600,
			height: 848,
			alt: 'The Anokha Prayas Welfare Society home page: a Hindi headline and introduction beside a photograph of students holding certificates, with a menu for About Us, Gallery, Events, Results, Team and Contact, and a Donation Now button.',
		},
		about: [
			'Anokha Prayas Welfare Society, based in Bijnor, Uttar Pradesh, is a social and educational organisation working for education, health and community welfare. It supports talented students from families with limited means and encourages children, especially in rural schools, to value learning.',
			'The society organises competitions, workshops and cultural events that give students room to show their talent, build confidence and learn from new experiences.',
		],
		offers: [
			'A home page that explains the mission in Hindi',
			'Pages about the society and its aims',
			'Current and upcoming events',
			'Student results',
			'A photo gallery of past events',
			'Meet the team, contact details and a Donation Now button',
		],
		approach: [
			'We built a multi-page website with a warm, colourful look, Hindi headlines for the local audience and simple navigation, so parents, students, volunteers and donors can quickly find events, results and ways to help.',
		],
	},
	{
		slug: 'jvmic',
		name: 'Jain Vidhya Mandir Inter College',
		kind: 'School website with student and teacher management',
		tags: ['School website', 'Student and teacher management', 'Notices and alerts'],
		page: '/school-management-system/',
		metaDescription: 'A website and management system for an inter college in Nehtaur, Bijnor: students, teachers, fees and notices in one place.',
		summary: 'A public website and a management system for an inter college in Nehtaur, Bijnor, so the school can present itself online and run its students, teachers, fees and notices from one place.',
		image: {
			src: '/assets/img/work/jvmic-1600.webp',
			src800: '/assets/img/work/jvmic-800.webp',
			width: 1600,
			height: 711,
			alt: 'The Jain Vidhya Mandir Inter College website: the school name with phone and email in the header, a menu for Home, About and Contact, and a photograph of the school gate.',
		},
		about: [
			'Jain Vidhya Mandir Inter College in Nehtaur, Bijnor, Uttar Pradesh is a co-educational school established in 1948 and affiliated to the UP Board. It teaches classes 6 to 12, with Science, Commerce and Humanities streams in the senior classes.',
			'We built the school a public website and a management system for the day-to-day running of the school.',
		],
		offers: [
			'A public website with a notice board, faculty, principal and manager messages, facilities and contact details',
			'Admission and student records',
			'Daily attendance',
			'Fees and payments',
			'Teacher and staff records',
			'Timetable and class setup',
			'Notices, circulars and SMS or WhatsApp alerts',
		],
		approach: [
			'The public website tells the school\'s story: a photo slider, a notice board, messages from the principal and the manager, a faculty section, facilities and contact details with visiting hours.',
			'Behind it, the management system keeps student, teacher, class and fee records in one place, so the office works from one set of records.',
		],
	},
];

/** School management system page. Modules are the ones the owner confirmed. */
const schoolGroups = [
	{
		title: 'Students',
		intro: 'Everything about a student, from the first admission to daily attendance and fees.',
		items: [
			{ icon: 'users', title: 'Admission and student records', text: 'Handle admissions and keep a profile for every student, with personal details and class information in one record.' },
			{ icon: 'check', title: 'Attendance', text: 'Mark attendance every day and see attendance reports for students.' },
			{ icon: 'chart', title: 'Fees and payments', text: 'Set up the fee structure, see what is due, issue receipts and track payments.' },
		],
	},
	{
		title: 'Teachers and classes',
		intro: 'Who teaches what, and when.',
		items: [
			{ icon: 'users', title: 'Teacher and staff records', text: 'Keep a profile for each teacher and staff member: subjects, assigned classes and contact details.' },
			{ icon: 'layers', title: 'Timetable and classes', text: 'Set up classes, sections and subjects, and build the timetable around them.' },
		],
	},
	{
		title: 'Communication',
		intro: 'Keeping families and staff informed without phone calls and paper notes.',
		items: [
			{ icon: 'chat', title: 'Notices and circulars', text: 'Publish announcements and circulars for the school from one place.' },
			{ icon: 'whatsapp', title: 'SMS and WhatsApp alerts', text: 'Send automatic messages, for example about attendance or fees.' },
		],
	},
];

/** Pages of the public school website, as built for Jain Vidhya Mandir Inter College. */
const schoolWebsite = [
	'Home page with a photo slider and a notice board',
	'Messages from the principal and the manager',
	'A faculty section introducing the teaching staff',
	'About page with academic details, streams and facilities',
	'Contact page with address, phone, email and visiting hours',
];

/**
 * Other projects the owner confirmed as Neucent's. Only what is known is shown:
 * `focus` comes from the old page titles ("DevOps for MutualArt", "DevOps for Pirkx").
 * To promote one into a full case study, move it to `projects` above with a description.
 */
const otherProjects = [
	{ name: 'MutualArt', focus: 'DevOps' },
	{ name: 'Pirkx', focus: 'DevOps' },
	{ name: 'GetCameraCrew' },
	{ name: 'GradReady' },
	{ name: 'Rovi' },
];

const testimonials = [
	{
		project: 'zimtribes',
		quote: "Neucent Technologies delivered a functional web platform with the client's required functionality, boosting their response rate to customer queries. The team promptly responded to needs and concerns and delivered on time. Their ability to deliver seamless, innovative features stood out. I look forward to working with Neucent again in the future.",
		name: 'Misheck Samanyanga',
		role: 'Director, ZimTribes and Afrikatribes',
	},
];

const faqs = [
	{ q: 'How long does a project take and what does it cost?', a: 'It depends on scope. A focused prototype can take a few weeks, while a full product takes months. After a short discovery call we share a plan with timelines and a price range you can review before committing.' },
	{ q: 'Can you add AI to an application we already have?', a: 'Yes. Most AI work we do is adding one specific capability, such as a chatbot, search, summaries or document reading, to an existing web or mobile product through its current backend.' },
	{ q: 'Will you work with our existing codebase or team?', a: 'Yes. We can take over a codebase, extend it, or work alongside your developers. We begin with a review so estimates are based on what is really there.' },
	{ q: 'Do you work with businesses in India?', a: 'Yes. We build software for businesses across India, including Delhi and the NCR and Uttar Pradesh towns such as Meerut and Bijnor. We can meet in person or work over video calls, whichever suits you.' },
	{ q: 'Do you have an office in Tanzania?', a: 'Yes. Our Tanzania office is at Saba Saba Apartment, Gran Melia, Arusha. We build websites, mobile apps, AI tools and school software for businesses in Arusha, Dar es Salaam, Dodoma, Mwanza, Zanzibar and across Tanzania.' },
	{ q: 'Do you build software for clients in Zimbabwe, Africa, Tanzania and the USA?', a: 'Yes. We have delivered projects for clients in India, Zimbabwe, elsewhere in Africa and the USA, and we also work with businesses in Tanzania, including Dar es Salaam, Dodoma, Arusha and Zanzibar. Projects run over video calls, WhatsApp and shared task boards, so location is not a barrier.' },
	{ q: 'Can we hire developers for a specific role?', a: 'Yes. You can bring in Android, iOS, React, Node.js, PHP, WordPress or DevOps engineers on a dedicated basis and manage the work alongside your own team.' },
	{ q: 'Who owns the code and the designs?', a: 'You do. Source code, design files and cloud accounts are set up in your name and handed over with documentation.' },
	{ q: 'How do you handle sensitive data in AI projects?', a: 'We agree on data handling before any work starts. Depending on your requirements we can use hosted models with suitable terms or deploy inside your own cloud account.' },
	{ q: 'What happens after launch?', a: 'We can keep supporting the product with monitoring, fixes and new features under a support retainer, or hand it fully to your team.' },
];

/** Contact form choices. Keys are what the server stores; keep in sync with contact-us/send.php. */
const formServices = {
	web: 'Web or e-commerce',
	mobile: 'Mobile app',
	ai: 'AI, chatbot or voicebot',
	cloud: 'Cloud, DevOps or security',
	iot: 'IoT or blockchain',
	school: 'School management system',
	design: 'Design, testing or support',
	hire: 'Hire dedicated developers',
	other: 'Something else',
};

const formBudgets = {
	'under-5k': 'Under $5,000',
	'5k-15k': '$5,000 to $15,000',
	'15k-50k': '$15,000 to $50,000',
	'50k-plus': 'Over $50,000',
	unsure: 'Not sure yet',
};

const formTimelines = {
	asap: 'As soon as possible',
	'1-3m': 'Within 1 to 3 months',
	'3-6m': 'In 3 to 6 months',
	flexible: 'Just exploring',
};

module.exports = {
	formTimelines,
	services, aiCapabilities, aiSteps, aiPrinciples, process, stack, industries, hireRoles,
	principles, engagementModels, timeline, projects, otherProjects, testimonials, faqs, formServices, formBudgets,
	schoolGroups, schoolWebsite,
};
