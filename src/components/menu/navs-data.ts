import { NavigationItem } from '../nav-gen';

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
				label: 'activities'
			},
			{
				name: 'press-coverage',
				href: '/press-coverage',
				label: 'GEB in Press',
			},
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
