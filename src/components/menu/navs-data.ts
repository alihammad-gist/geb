import { NavigationItem } from '../nav';

export const primary: NavigationItem[] = [
	{
		name: 'home',
		href: '/',
		label: 'Home',
	},
	{
		name: 'about-us',
		href: '/about-us',
		label: 'About Us',
		children: [
			{
				name: 'project-desc',
				href: '/project-desc',
				label: 'Project Description',
			},
			'separator',
			{
				name: 'msg-npd',
				href: '/message-npd',
				label: 'Message from NPD',
			},
			{
				name: 'msg-npc',
				href: '/message-npc',
				label: 'Message from NPC',
			},
			{
				name: 'our-team',
				href: '/our-team',
				label: 'Our Team',
			},
		]

	},
	{
		name: 'our-work',
		href: '/our-work',
		label: 'Our Work',
		children: [
			{
				name: 'reports',
				href: '/reports',
				label: 'Reports',
			},
			{
				name: 'publications',
				href: '/publications',
				label: 'Important Publications',
			},
			{
				name: 'stories',
				href: '/stories',
				label: 'Success Stories',
			},
		],
	},
	{
		name: 'news',
		href: '/news',
		label: 'News & Media',
		children: [
			{
				name: 'activities',
				href: '/activities',
				label: 'Activities'
			},
			{
				name: 'press-coverage',
				href: '/press-coverage',
				label: 'GEB in Press',
			},
			'separator',
			{
				name: 'blog',
				href: '/blog',
				label: 'Blog',
			},
		],
	},
	{
		name: 'contact-us',
		href: '/contact-us',
		label: 'Contact Us',
	},
];

// General navigation contains only the top level nav items
export const general: NavigationItem[] = primary.map( (item: NavigationItem) => {
	if (item === 'separator') {
		return item;
	}

	return { ...item, children: undefined };
} );

// Activities navigation to retrieve particular activity types
export const activities: NavigationItem[] = [

	{
		name: 'activities-lectures',
		href: '/activies#/lectures',
		label: 'Lectures',
	},
	{
		name: 'activities-events',
		href: '/activies#/events',
		label: 'Events',
	},
	{
		name: 'activities-seminars',
		href: '/activies#/seminars',
		label: 'Seminars',
	},
	{
		name: 'activities-conferences',
		href: '/activies#/conferences',
		label: 'Conferences',
	},

]
