'use strict';
/**
 * Blog articles. General guidance only: no invented statistics, prices, clients or awards.
 * Add an object to add an article; then run: node tools/build.js
 * Each section: { h: heading, p: [paragraphs], list: [bullets] (optional) }.
 * Optional faqs: [{ q, a }] are shown at the end and added to the page's search data.
 */
const articles = [
	{
		slug: 'how-much-does-a-mobile-app-cost',
		metaTitle: 'Mobile App Cost: What Decides the Price | Neucent',
		title: 'How much does a mobile app cost? What decides the price',
		description: 'What decides the cost of an Android or iOS app, from features and platforms to backend and support, and how to get an accurate estimate.',
		keywords: 'mobile app development cost, how much does an app cost, app development price India, app development cost Tanzania, Android app cost, iOS app cost, app cost factors',
		date: '2026-11-10',
		minutes: 8,
		intro: 'Everyone asks this first, and the honest answer is "it depends". An app can be a handful of screens that show information, or a full product with payments, maps, live chat and an admin dashboard. The price follows the scope. This guide explains what moves the cost, so you can plan a budget and compare quotes fairly.',
		sections: [
			{ h: 'Why there is no single price', p: ['Two apps that look similar on a phone can need very different amounts of work behind the screen. One may only read content from a server. Another may handle logins, payments, notifications, maps and offline use. When someone quotes a price without asking questions, they are guessing, or they are quoting a much smaller app than the one you have in mind.', 'The sensible way to think about cost is as a set of decisions. Each decision adds or removes work, and the total follows from them.'] },
			{ h: 'The main things that decide the cost', p: ['Most of the price comes from a short list of choices you make before any code is written.'], list: ['The number and complexity of screens and features.', 'Platforms: Android only, iOS only, or both.', 'Native apps or one cross-platform codebase such as React Native.', 'Whether the app needs a backend, a database and an admin panel.', 'Integrations: payments, maps, SMS or WhatsApp, and third-party services.', 'Design: a clean standard interface or fully custom branding and animation.', 'Extras such as user accounts, push notifications, offline use and several languages.'] },
			{ h: 'Native or cross-platform?', p: ['Native apps are built separately for Android and iOS. They give the most control over the device and the smoothest feel, but they mean building and maintaining two codebases.', 'Cross-platform tools such as React Native let one team build for both platforms from a single codebase. For typical business apps, such as booking, ordering, learning, field work or customer portals, this often reduces cost and time without users noticing a difference. Apps that depend heavily on device hardware, advanced graphics or very custom interactions may still be better built natively.'] },
			{ h: 'The backend is half the app', p: ['Most apps are only the visible part of a larger system. Behind the screens there is usually a server that stores data, an API that the app talks to, and an admin panel your team uses to manage content, users and orders. This work is easy to forget when you compare quotes, but it is a large share of the effort. Ask every developer whether the backend and admin panel are included.'] },
			{ h: 'Design and testing are not optional extras', p: ['A good interface takes time: working out how people move through the app, designing each screen, and testing it with real users. Testing on many phones and screen sizes, and fixing what breaks, is also real work. Teams that skip these steps deliver something cheaper that frustrates users and costs more to fix later.'] },
			{ h: 'What comes after launch', p: ['An app is never finished on the day it appears in the store. Phones get new operating system versions, store rules change, bugs appear and users ask for improvements. Plan for hosting, monitoring, bug fixes, updates and support from the start, and ask what a support plan includes instead of treating launch as the end of the budget.'] },
			{ h: 'How to start smaller and smarter', p: ['The most reliable way to control cost is to build a focused first version. Pick the three or four things your users must be able to do, build those well, put the app in front of real people, and add features based on what they actually use. This reduces the risk of spending months on features nobody wants.'] },
			{ h: 'How to get an accurate estimate', p: ['Write down who will use the app, the key tasks they need to perform, and any apps you like as examples. A good developer will then ask questions, suggest a first version that is smaller than your full idea, and give you a plan with timelines and a price range you can review before committing.'], list: ['Who are the users and what problem does the app solve for them?', 'Which platforms do they use: Android, iOS or both?', 'Do you need user accounts, payments, maps or notifications?', 'Who will manage the content and data behind the app?', 'What is your budget range and when do you need it live?'] },
		],
		faqs: [
			{ q: 'Is a cross-platform app cheaper than two native apps?', a: 'Often yes for typical business apps, because one team builds for both platforms from a single codebase. The best choice depends on what your app needs to do.' },
			{ q: 'Do I need an admin panel for my app?', a: 'If your team needs to change content, manage users or see orders without a developer, yes. It is usually a separate web dashboard connected to the same backend as the app.' },
			{ q: 'Can I start with a small version of my app?', a: 'Yes, and it is usually the best approach. A focused first version gets real feedback sooner and reduces the risk of building features nobody uses.' },
		],
		cta: 'Tell us about your app idea and we will reply with questions and a suggested first step.',
		related: ['mobile-app-development', 'software-development-tanzania'],
	},
	{
		slug: 'school-management-software-features',
		metaTitle: 'School Management Software: Key Features | Neucent',
		title: 'School management software: the features every school needs',
		description: 'What a school management system should do: admissions, attendance, fees, staff, timetables, notices and alerts, and how to choose one.',
		keywords: 'school management software, school management system features, school ERP, attendance software for schools, fee management software, school software India, school software Tanzania, how to choose school software',
		date: '2026-11-10',
		minutes: 8,
		intro: 'Most schools still run on registers, receipt books, spreadsheets and phone calls. A school management system puts the daily work of the office in one place, so records are correct, fees are tracked and parents hear from the school quickly. This guide covers the features worth looking for and how to choose a system that fits your school.',
		sections: [
			{ h: 'What a school management system does', p: ['At its simplest, a school management system is a shared set of records that everyone in the school works from. The office, the teachers and the principal all see the same information about students, classes, fees and staff, instead of keeping their own copies in different places.', 'The benefit is not just speed. It is fewer mistakes, fewer lost papers and answers to everyday questions in seconds: who is absent today, who still owes fees, which teacher takes which class.'] },
			{ h: 'Admissions and student records', p: ['Every student should have one profile that holds personal details, class and section, guardian contacts and history. Admission becomes a guided process, and later you can find any student without searching through files. This record is the base that every other feature builds on, so it is worth getting right.'] },
			{ h: 'Daily attendance', p: ['Teachers mark attendance each day on a screen instead of in a register. The office can then see attendance by class, by student or by month, spot students who are often absent and share the information with families. Reports that used to take an afternoon of counting take seconds.'] },
			{ h: 'Fees and payments', p: ['Set up the fee structure once, see who has paid and who owes, issue receipts and keep a clean record of every payment. For many schools this is the feature that saves the office the most time and removes the most arguments, because every payment is written down and easy to check.'] },
			{ h: 'Teacher and staff records, classes and timetable', p: ['Keep a profile for each teacher with subjects, assigned classes and contact details. Set up classes, sections and subjects, and build the timetable around them, so clashes are visible before the term starts instead of after.'] },
			{ h: 'Notices, circulars and alerts', p: ['Publish announcements and circulars from one place, and send automatic SMS or WhatsApp messages, for example when a student is absent or a fee is due. Families stay informed without phone calls and paper notes, and the school spends less time on repeat messages.'] },
			{ h: 'A public school website', p: ['A good system works alongside your public website, which shows your notice board, faculty, messages from the principal and manager, facilities and contact details. For parents who have never visited, this website is the first impression of your school. Neucent builds both the website and the management system, as we did for Jain Vidhya Mandir Inter College in Bijnor.'] },
			{ h: 'How to choose the right system', p: ['Features matter, but fit matters more. Before you buy or build, check how the system matches the way your school actually works.'], list: ['Does it match your classes, streams, terms and fee types, or does it force you to change them?', 'Can teachers and office staff learn it quickly, without long training?', 'Who owns your data, and can you export it at any time?', 'What happens when you need a change or a new report?', 'Is there ongoing support, and who do you call when something breaks?', 'Does it send SMS or WhatsApp alerts in the way your families prefer?'] },
		],
		faqs: [
			{ q: 'Can a school management system be adapted to our school?', a: 'Yes. We set up classes, sections, streams and fee types to match how your school works, instead of asking you to change your routines.' },
			{ q: 'Do you build the school website as well?', a: 'Yes. We build the public website with notice board, faculty, messages and contact details, together with the management system behind it.' },
			{ q: 'Can parents get messages about attendance and fees?', a: 'Yes. The system can send automatic SMS or WhatsApp alerts, for example when a student is absent or a fee is due.' },
		],
		cta: 'Want a system like this for your school? Tell us about your classes and staff and we will suggest where to start.',
		related: ['school-management-system', 'software-development-india'],
	},
	{
		slug: 'ai-chatbot-for-business',
		metaTitle: 'AI Chatbots for Business: What They Can Do | Neucent',
		title: 'AI chatbots for business: what they can and cannot do',
		description: 'A practical guide to AI chatbots for business: what they do well, where they fail, and how to launch one that customers trust.',
		keywords: 'AI chatbot for business, chatbot development, business chatbot benefits, AI customer support, voicebot, generative AI chatbot, how to build an AI chatbot',
		date: '2026-11-10',
		minutes: 8,
		intro: 'AI chatbots can answer customer questions around the clock, search your documents and handle routine requests. They can also give wrong answers with great confidence if they are built carelessly. This guide gives a realistic view of what to expect, where the risks are and how to launch a chatbot your customers will trust.',
		sections: [
			{ h: 'What an AI chatbot is, in plain words', p: ['A modern AI chatbot uses a language model to understand a question written in everyday language and to write a reply. On its own, such a model knows general information but nothing about your business. The useful chatbots are the ones connected to your own content and systems, so that answers come from your real policies, products and records.'] },
			{ h: 'What a good chatbot does well', p: ['A well-built chatbot is strong at repetitive, text-based work.'], list: ['Answering common questions from your own content, such as opening hours, policies, product details and order status.', 'Finding the right page, document or record from a plain question.', 'Summarising long documents and emails.', 'Collecting details from a visitor, such as contact information and what they need, before a person follows up.', 'Handing the conversation to a person when it cannot help.'] },
			{ h: 'Where chatbots go wrong', p: ['A chatbot that is not connected to your real information will guess. It may sound sure and still be wrong. It may also answer questions it should not, reveal information it should keep private, or take actions nobody approved.', 'These problems come from how the bot is built, connected and tested. They are not a reason to avoid AI, but they are a reason to be careful about who builds it and how.'] },
			{ h: 'Chatbot, voicebot or workflow automation?', p: ['A chatbot talks with people in text on your website, in an app or in a chat channel. A voicebot does the same by voice, for example on phone calls. Workflow automation uses AI to do work in the background, such as reading incoming invoices, drafting replies or updating records, often without a conversation at all. Many projects start with one of these and later add another.'] },
			{ h: 'How to build one people can trust', p: ['Start with one specific task, connect the bot to your real data, and test it against real customer questions before launch. Keep a person in the loop for anything sensitive.'], list: ['Pick one job: support questions, lead capture or internal search.', 'Connect it to your own documents and systems, not only a general model.', 'Test with real questions and measure how often the answers are right.', 'Add a clear handover to a person.', 'Agree how data is stored, who can see it and how long it is kept.', 'Review conversations after launch and improve the weak spots.'] },
			{ h: 'Protecting your customers\' data', p: ['Before any work starts, decide what information the chatbot will see and where it is processed. Depending on your needs, you may use hosted models under suitable terms, or run the system inside your own cloud account. Avoid sending sensitive personal data to a service you have not reviewed.'] },
			{ h: 'Do you need AI at all?', p: ['Sometimes a clearer FAQ page, a better search box or a simple form solves the problem at lower cost. A good partner will tell you honestly whether AI helps with your task and what a small first pilot would look like, so you can see results before committing to more.'] },
		],
		faqs: [
			{ q: 'Can you add a chatbot to our existing website or app?', a: 'Yes. Most of our AI work is adding one specific capability to an existing product through its current backend.' },
			{ q: 'How do you stop a chatbot from giving wrong answers?', a: 'We connect it to your own content, test it against real questions before launch, let people reach a human easily, and review conversations after launch to fix weak spots.' },
			{ q: 'How do I know if AI is right for my task?', a: 'Describe the task that slows your team down. We will tell you honestly whether AI helps and what a first pilot would look like.' },
		],
		cta: 'Describe the task that slows your team down and we will tell you whether AI helps.',
		related: ['ai-chatbot-development', 'software-development-usa'],
	},
	{
		slug: 'how-to-choose-a-software-development-company',
		metaTitle: 'How to Choose a Software Development Company | Neucent',
		title: 'How to choose a software development company',
		description: 'Questions to ask before hiring a software development company, local or overseas: process, code ownership, communication and support.',
		keywords: 'how to choose a software development company, hire software developers, outsource software development, offshore development India, software development partner, software company checklist',
		date: '2026-11-10',
		minutes: 9,
		intro: 'The cheapest quote is rarely the cheapest project. Whether you hire a team in your own city or one in another country, a handful of questions tells you most of what you need to know before you sign anything. This checklist is written for business owners who are not developers.',
		sections: [
			{ h: 'Start with what you need', p: ['Before you talk to any company, write one page: who will use the product, what problem it solves, which three or four things it must do, and roughly when you need it. A clear brief makes every conversation shorter and every quote more comparable. It also shows you quickly which companies ask good questions.'] },
			{ h: 'Ask to see real work', p: ['Look at live products the company built and ask what its role was. Open them on your phone and use them. If possible, ask to speak to a client. A team confident in its work will show it. Be careful of portfolios that only show pictures.'] },
			{ h: 'Who will actually build it?', p: ['Ask whether you will speak to the engineers and designers doing the work, or only to an account manager. Direct access means faster answers and fewer misunderstandings. Ask who the people on your project are, and whether they stay on it from start to finish.'] },
			{ h: 'How will you see progress?', p: ['Look for regular demos of working software, not only status reports. Progress you can click through is the best protection against surprises. Ask how often you will see a demo and how changes to the plan are handled.'] },
			{ h: 'Who owns the code?', p: ['You should. Source code, design files and cloud accounts should be created in your name and handed over with documentation, so you are never locked in to one company. Put this in writing before the project starts.'] },
			{ h: 'How do they treat quality and security?', p: ['Ask how the team reviews code, tests the product and checks for security problems. Good teams treat these as part of the normal workflow, not an extra at the end. Ask what happens if a serious bug is found after launch.'] },
			{ h: 'What happens after launch?', p: ['Ask about bug fixes, monitoring, updates and support, and what they cost. A product is never really finished, so agree how it will be looked after, or how it will be handed to your own team.'] },
			{ h: 'Working across time zones', p: ['Remote teams work well when there are regular calls in overlapping hours, a shared task board and clear written updates. Ask how a team handles this before you start. Teams that have worked with clients in several countries usually have a routine that works.'] },
			{ h: 'Red flags to watch for', p: ['A few warning signs deserve a pause.'], list: ['A price with no questions asked and no plan behind it.', 'Pressure to sign quickly.', 'No way to speak to the people who will build the product.', 'Vague answers about who owns the code.', 'No plan for testing, security or support after launch.', 'A portfolio the company cannot explain or demonstrate.'] },
		],
		faqs: [
			{ q: 'Is it risky to hire a software company in another country?', a: 'It does not have to be. Clear scope, regular demos, written agreements about code ownership and a shared task board make remote work reliable. Ask any company how it handles these.' },
			{ q: 'Should I choose the cheapest quote?', a: 'Compare what each quote includes before comparing prices. A low price often leaves out design, testing, the backend or support, which you then pay for later.' },
			{ q: 'Can I hire developers instead of a whole project?', a: 'Yes. You can bring in Android, iOS, React, Node.js, PHP, WordPress or DevOps engineers on a dedicated basis and manage the work alongside your own team.' },
		],
		cta: 'Talk to us about your project. We reply with questions, ideas and a clear plan.',
		related: ['software-development-usa', 'software-development-zimbabwe'],
	},
];

module.exports = { articles };
