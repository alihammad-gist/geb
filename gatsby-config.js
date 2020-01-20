/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
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
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: '58ccq9793tyq',
				accessToken: '3qflefNFapdprdmpIgBXzBVKnqEvXPd8Gh0n4NCU8Ak',
			}
		},

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

		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-transformer-remark', 
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 750,
							linkImagesToOriginal: false
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [
					`Montserrat\:400,400i,600,700,900`,
				],
				display: 'swap'
			}
		},

	]
};
