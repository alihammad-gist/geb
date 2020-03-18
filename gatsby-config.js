/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	pathPrefix: "/geb",

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
					// `member`
				]
			},
		}
	]
};
