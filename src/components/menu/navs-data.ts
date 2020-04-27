import { NavigationItem } from '../nav';

export const primary: NavigationItem[] = [
	{
		name: 'home',
		href: '/',
		label: 'Home',
	},
	{
		name: 'about-us',
		href: '/about',
		label: 'About Us',
		children: [
			{
				name: 'project-desc',
				href: '/about/project-desc',
				label: 'Project Description',
			},
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
				name: 'team',
				href: '/about/team',
				label: 'GEB Team',
			},
		]

	},
	{
		name: 'our-work',
		href: '/work',
		label: 'Our Work',
		children: [
			{
				name: 'reports',
				href: '/work/reports',
				label: 'Reports',
			},
			{
				name: 'stories',
				href: '/stories',
				label: 'Success Stories',
			},
			'separator',
			{
				name: 'publications',
				href: '/work/extrn-publications',
				label: 'Important Publications',
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
				href: '/news/activities',
				label: 'Activities'
			},
			{
				name: 'blog',
				href: '/blog',
				label: 'Blog',
			},
			'separator',
			{
				name: 'press-coverage',
				href: '/press-coverage',
				label: 'GEB in Press',
			},
		],
	},
	{
		name: 'contact-us',
		href: '/contact-us',
		label: 'Contact Us',
	},
	{
		name: 'search',
		href: "#",
		label: "Search"
	}
];

// General navigation contains only the top level nav items
export const general: NavigationItem[] = primary.map((item: NavigationItem) => {
	if (item === 'separator') {
		return item;
	}

	return { ...item, children: undefined };
});

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
