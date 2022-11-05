<?php
/**
 * Site copy kept in one place so a wording change happens once and every
 * page that uses it stays in sync. Edit the text here.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Core services. Used on the home page and the Services page.
 */
function neucent_services() {
	return array(
		array(
			'slug'    => 'web',
			'icon'    => 'web',
			'title'   => 'Web application development',
			'summary' => 'Customer portals, SaaS platforms, marketplaces and internal tools that stay fast and easy to change as your business grows.',
			'points'  => array(
				'Product front ends and admin dashboards',
				'APIs, integrations and third-party connections',
				'Performance, accessibility and SEO built in',
				'Progressive web apps that work on any device',
			),
		),
		array(
			'slug'    => 'mobile',
			'icon'    => 'mobile',
			'title'   => 'Mobile app development',
			'summary' => 'iOS and Android apps, native or cross-platform, designed around how people actually use their phones.',
			'points'  => array(
				'Native (Swift, Kotlin) or cross-platform (Flutter, React Native)',
				'Offline mode, sync, push notifications and payments',
				'Maps, camera, biometrics and device features',
				'App Store and Google Play release support',
			),
		),
		array(
			'slug'    => 'ai',
			'icon'    => 'ai',
			'title'   => 'AI and machine learning',
			'summary' => 'Assistants, search, document processing and automation that plug into your existing software and data.',
			'points'  => array(
				'LLM assistants and knowledge search over your content',
				'Document, image and speech understanding',
				'Workflow automation with human approval steps',
				'Predictive models trained on your own data',
			),
			'link'    => 'ai-solutions',
		),
		array(
			'slug'    => 'cloud',
			'icon'    => 'cloud',
			'title'   => 'Cloud and DevOps',
			'summary' => 'Reliable infrastructure and release pipelines so shipping a change is routine, not an event.',
			'points'  => array(
				'AWS, Azure and Google Cloud architecture',
				'CI/CD pipelines and infrastructure as code',
				'Containers, monitoring and alerting',
				'Cost review and scaling plans',
			),
		),
		array(
			'slug'    => 'design',
			'icon'    => 'design',
			'title'   => 'UI/UX design',
			'summary' => 'Research-led interface design, from first sketches to a component library your developers can build from.',
			'points'  => array(
				'User research and journey mapping',
				'Clickable prototypes for early feedback',
				'Design systems and handoff-ready specs',
				'Usability testing before build starts',
			),
		),
		array(
			'slug'    => 'quality',
			'icon'    => 'shield',
			'title'   => 'Testing, security and support',
			'summary' => 'Quality checks during the build and dependable care after launch, so the product keeps working.',
			'points'  => array(
				'Manual and automated test suites',
				'Security review of code and infrastructure',
				'Bug fixing, upgrades and feature work on retainer',
				'Takeover and cleanup of existing codebases',
			),
		),
	);
}

/**
 * What we build with AI.
 */
function neucent_ai_capabilities() {
	return array(
		array(
			'icon'    => 'chat',
			'title'   => 'Conversational assistants',
			'summary' => 'Support and internal assistants that answer from your own policies and data, and pass the conversation to a person when they are unsure.',
		),
		array(
			'icon'    => 'search',
			'title'   => 'Knowledge search',
			'summary' => 'Ask a question in plain language and get an answer drawn from your documents, wikis and tickets, with the sources shown.',
		),
		array(
			'icon'    => 'eye',
			'title'   => 'Document and vision AI',
			'summary' => 'Read invoices, forms and IDs, pull out the fields you need, and flag images that need a human look.',
		),
		array(
			'icon'    => 'flow',
			'title'   => 'Workflow automation',
			'summary' => 'Agents that carry out multi-step tasks across your tools, with approval checkpoints where the stakes are high.',
		),
		array(
			'icon'    => 'chart',
			'title'   => 'Predictive models',
			'summary' => 'Forecasting, scoring and recommendation models trained on your history and tested before they influence a decision.',
		),
		array(
			'icon'    => 'code',
			'title'   => 'AI inside your product',
			'summary' => 'Add summaries, drafting, classification or smart search to a web or mobile app you already run.',
		),
	);
}

/**
 * How an AI engagement runs.
 */
function neucent_ai_steps() {
	return array(
		array(
			'title' => 'Pick the right problem',
			'text'  => 'We start with the task that costs you the most time or money and check whether AI is the right tool for it at all.',
		),
		array(
			'title' => 'Test on your data',
			'text'  => 'Before building anything large, we assemble real examples and measure how well the approach works on them.',
		),
		array(
			'title' => 'Build a working pilot',
			'text'  => 'A small, usable version goes to a real group of users, so feedback comes from practice and not from slides.',
		),
		array(
			'title' => 'Ship with guardrails',
			'text'  => 'Monitoring, fallbacks, human review and spend limits go live together with the feature.',
		),
		array(
			'title' => 'Measure and improve',
			'text'  => 'We track quality and cost after launch and tune prompts, data and models as usage grows.',
		),
	);
}

/**
 * Practices that apply to every AI project.
 */
function neucent_ai_principles() {
	return array(
		array(
			'icon'  => 'lock',
			'title' => 'Your data, your rules',
			'text'  => 'We choose model providers and hosting, including your own cloud account, to match your data and compliance requirements.',
		),
		array(
			'icon'  => 'chart',
			'title' => 'Measured, not guessed',
			'text'  => 'Every AI feature has test cases and a quality target, so "it seems good" is never the acceptance criterion.',
		),
		array(
			'icon'  => 'users',
			'title' => 'People stay in the loop',
			'text'  => 'Sensitive actions go through review. The system knows when to say "I am not sure" and hand off.',
		),
		array(
			'icon'  => 'layers',
			'title' => 'Costs you can predict',
			'text'  => 'We track latency and per-request cost from the first prototype and design around a budget.',
		),
	);
}

/**
 * Delivery process.
 */
function neucent_process() {
	return array(
		array(
			'title' => 'Discover',
			'text'  => 'We learn your users, goals and constraints, then agree on scope, priorities and a realistic plan.',
		),
		array(
			'title' => 'Design',
			'text'  => 'Wireframes and clickable prototypes let you react to something real before code is written.',
		),
		array(
			'title' => 'Build',
			'text'  => 'Short cycles with a working demo at the end of each one, so progress is visible and course corrections are cheap.',
		),
		array(
			'title' => 'Launch',
			'text'  => 'Testing, security checks and a staged release, with documentation and a handover session for your team.',
		),
		array(
			'title' => 'Improve',
			'text'  => 'We stay on to fix, monitor and extend the product based on how people really use it.',
		),
	);
}

/**
 * Technology groups. Adjust to match what the team actually ships with.
 */
function neucent_stack() {
	return array(
		'Web'    => array( 'React', 'Next.js', 'Vue', 'TypeScript', 'Node.js', 'Python', 'Laravel', 'WordPress' ),
		'Mobile' => array( 'Flutter', 'React Native', 'Swift', 'Kotlin', 'Ionic' ),
		'AI'     => array( 'LLM APIs', 'Retrieval (RAG)', 'PyTorch', 'scikit-learn', 'Vector databases', 'OCR' ),
		'Cloud'  => array( 'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions' ),
		'Data'   => array( 'PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch' ),
	);
}

/**
 * Industries.
 */
function neucent_industries() {
	return array(
		'Healthcare and fitness',
		'Food and delivery',
		'Education and training',
		'HR and workforce',
		'Retail and e-commerce',
		'Finance and payments',
		'Logistics and mobility',
		'Media and entertainment',
	);
}

/**
 * Working principles.
 */
function neucent_principles() {
	return array(
		array(
			'icon'  => 'users',
			'title' => 'Direct access to the people building',
			'text'  => 'You talk to the engineers and designers doing the work, not through layers of account managers.',
		),
		array(
			'icon'  => 'rocket',
			'title' => 'A demo every cycle',
			'text'  => 'Progress is something you can click through, not a status report you have to trust.',
		),
		array(
			'icon'  => 'code',
			'title' => 'You own the code',
			'text'  => 'Source, designs and accounts are yours. Clean structure and documentation mean you are never locked in.',
		),
		array(
			'icon'  => 'shield',
			'title' => 'Quality and security by default',
			'text'  => 'Reviews, tests and dependency checks are part of the normal workflow and not an extra at the end.',
		),
	);
}

/**
 * Ways to work together.
 */
function neucent_engagement_models() {
	return array(
		array(
			'title' => 'Fixed-scope project',
			'text'  => 'A defined product or feature with an agreed plan and price. Best when requirements are clear.',
		),
		array(
			'title' => 'Dedicated team',
			'text'  => 'Engineers and designers who work as an extension of your team on an ongoing roadmap.',
		),
		array(
			'title' => 'Support retainer',
			'text'  => 'Monthly capacity for fixes, upgrades and small features on a product that is already live.',
		),
	);
}

/**
 * Frequently asked questions.
 */
function neucent_faqs() {
	return array(
		array(
			'q' => 'How long does a project take and what does it cost?',
			'a' => 'It depends on scope. A focused prototype can take a few weeks, while a full product takes months. After a short discovery call we share a plan with timelines and a price range you can review before committing.',
		),
		array(
			'q' => 'Can you add AI to an application we already have?',
			'a' => 'Yes. Most AI work we do is adding one specific capability, such as search, summaries or document reading, to an existing web or mobile product through its current backend.',
		),
		array(
			'q' => 'Will you work with our existing codebase or team?',
			'a' => 'Yes. We can take over a codebase, extend it, or work alongside your developers. We begin with a review so estimates are based on what is really there.',
		),
		array(
			'q' => 'Who owns the code and the designs?',
			'a' => 'You do. Source code, design files and cloud accounts are set up in your name and handed over with documentation.',
		),
		array(
			'q' => 'How do you handle sensitive data in AI projects?',
			'a' => 'We agree on data handling before any work starts. Depending on your requirements we can use hosted models with suitable terms or deploy inside your own cloud account.',
		),
		array(
			'q' => 'What happens after launch?',
			'a' => 'We can keep supporting the product with monitoring, fixes and new features under a support retainer, or hand it fully to your team.',
		),
	);
}

/**
 * Options for the contact form. The keys are what gets stored.
 */
function neucent_form_services() {
	return array(
		'web'    => 'Web application',
		'mobile' => 'Mobile app',
		'ai'     => 'AI or machine learning',
		'cloud'  => 'Cloud and DevOps',
		'design' => 'UI/UX design',
		'other'  => 'Something else',
	);
}

function neucent_form_budgets() {
	return array(
		'under-5k' => 'Under $5,000',
		'5k-15k'   => '$5,000 to $15,000',
		'15k-50k'  => '$15,000 to $50,000',
		'50k-plus' => 'Over $50,000',
		'unsure'   => 'Not sure yet',
	);
}
