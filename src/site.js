'use strict';
/**
 * Company details used across the site. Edit here, then run: node tools/build.js
 * Leave an optional value as '' to hide it.
 */
module.exports = {
	name: 'Neucent Technologies',
	legalName: 'Neucent Technologies Pvt Ltd',
	founded: '2020',
	// Canonical address, used for sitemap.xml and social tags.
	url: 'https://www.neucenttechnologies.com',
	tagline: 'Web, mobile and AI software, built to ship.',
	email: 'info@neucenttechnologies.com',
	phone: '+91 82879 39308',
	whatsapp: '918287939308', // digits only, with country code
	// India office. Lines are shown one per row; addressParts feed the search-engine data.
	addressLabel: 'India office',
	address: 'C-319, 3rd Floor, Noida One,\nRasoolpur Nawada, IT Park, Sector 62,\nNoida, Uttar Pradesh 201309',
	addressParts: {
		streetAddress: 'C-319, 3rd Floor, Noida One, Rasoolpur Nawada, IT Park, Sector 62',
		addressLocality: 'Noida',
		addressRegion: 'Uttar Pradesh',
		postalCode: '201309',
		addressCountry: 'IN',
	},
	// Tanzania office.
	tanzania: {
		label: 'Tanzania office',
		address: 'Saba Saba Apartment, Gran Melia,\nArusha, Tanzania',
		addressParts: {
			streetAddress: 'Saba Saba Apartment, Gran Melia',
			addressLocality: 'Arusha',
			addressCountry: 'TZ',
		},
	},
	// Places we want to be found for. Used in page text, search-engine data and the footer.
	serviceAreas: {
		ncr: ['Noida', 'Greater Noida', 'Delhi', 'New Delhi', 'Gurugram', 'Ghaziabad', 'Faridabad'],
		up: ['Meerut', 'Bijnor', 'Lucknow', 'Moradabad', 'Muzaffarnagar', 'Saharanpur', 'Dehradun'],
		india: ['Mumbai', 'Bengaluru', 'Hyderabad', 'Pune', 'Chennai', 'Kolkata', 'Jaipur', 'Ahmedabad', 'Chandigarh', 'Indore'],
		zimbabwe: ['Harare', 'Bulawayo', 'Mutare', 'Gweru', 'Victoria Falls'],
		africa: ['Zimbabwe', 'Tanzania', 'Kenya', 'South Africa', 'Zambia', 'Nigeria', 'Uganda', 'Ghana'],
		usa: ['New York', 'California', 'Texas', 'Florida', 'Illinois', 'Washington'],
		tanzania: ['Dar es Salaam', 'Dodoma', 'Arusha', 'Mwanza', 'Zanzibar', 'Mbeya', 'Moshi'],
	},
	// Image shown when a page link is shared on LinkedIn, Facebook, WhatsApp, etc. (1200x630).
	ogImage: '/assets/img/og-share.jpg',
	ogImageWidth: 1200,
	ogImageHeight: 630,
	ogImageAlt: 'Neucent Technologies: web, mobile and AI software, built to ship.',
	linkedin: 'https://www.linkedin.com/company/neucenttechnologies/',
	github: '',
	x: '',
};
