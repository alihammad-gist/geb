/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	pathPrefix: process.env.PATH_PREFIX || "/",

	/* Your site config here */
	siteMetadata: {
		title: "Generating Global Environmental Benefits",
	},

	plugins: [
		{
			resolve: `gatsby-plugin-typescript`,
			options: {
				// isTSX: true, // defaults to false
				// jsxPragma: `jsx`, // defaults to "React"
				// allExtensions: true, // defaults to false
			},
		},
		'gatsby-plugin-react-helmet',
		// {
		// 	resolve: 'gatsby-source-contentful',
		// 	options: {
		// 		spaceId: '58ccq9793tyq',
		// 		accessToken: '3qflefNFapdprdmpIgBXzBVKnqEvXPd8Gh0n4NCU8Ak',
		// 	}
		// },

		{
			resolve: 'gatsby-plugin-sass',
			options: {
				useResolveUrlLoader: true,
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: "src",
				path: `${__dirname}/src/`
			}
		},

		// 'gatsby-plugin-sharp',
		// {
		// 	resolve: 'gatsby-transformer-remark',
		// 	options: {
		// 		plugins: [
		// 			'gatsby-remark-relative-images',
		// 			{
		// 				resolve: 'gatsby-remark-images',
		// 				options: {
		// 					maxWidth: 750,
		// 					linkImagesToOriginal: false
		// 				}
		// 			}
		// 		]
		// 	}
		// },
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Roboto`,
					`Zilla+Slab\:400,600,700`,
					// `Material+Icons`,
				],
				display: 'swap'
			}
		},
		{
			resolve: `gatsby-source-strapi`,
			options: {
				apiURL: `http://localhost:1337`,
				queryLimit: 1000, // Default to 100
				contentTypes: [
					`user`,
					`team-member`,
					`project-description`,
					`activity`,
					`report`,
					`external-publication`,
					`quote`,
					`blog`,
					`press-coverage`,
					`news-publisher`,
					`success-story`,
					// `member`
				]
			},
		},
		`gatsby-plugin-anchor-links`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590,
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `uploads`,
				path: `/home/cocomo/dev/js/geb-strapi-new/public/uploads`,
				ignore: [`**/\.*`], // ignore files starting with a dot
			},
		},
		// {
		// 	resolve: `gatsby-plugin-purgecss`,
		// 	options: {
		// 		printRejected: true, // Print removed selectors and processed file names
		// 		develop: true, // Enable while using `gatsby develop`
		// 		// tailwind: true, // Enable tailwindcss support
		// 		// whitelist: ['whitelist'], // Don't remove this selector
		// 		// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
		// 		purgeOnly: ['node_modules/'], // Purge only these files/folders
		// 	}
		// }
	]
};
