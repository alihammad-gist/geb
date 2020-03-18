// const path = require('path');

module.exports = {

	// When a node (in graphql) is created.
	// onCreateNode: function ({ node, actions }) {
	// 	const { createNodeField } = actions

	// 	if (node.internal.type === 'MarkdownRemark') {
	// 		slug = path.basename(node.fileAbsolutePath, '.md');
	// 		createNodeField({
	// 			node,
	// 			name: 'slug',
	// 			value: slug,
	// 		});
	// 	}
	// },

	// If one to create pages for a particular content type
	// I suppose we'd do that in this function.
	// createPages: async function ({ graphql, actions }) {
	// 	const { createPage } = actions;
	// 	const blogTemplate = path.resolve('./src/templates/blog/blog.tsx');

	// 	const res = await graphql(`
	// 	query BlogPosts {
	// 		allMarkdownRemark {
	// 			totalCount
	// 			edges {
	// 				node {
	// 					frontmatter {
	// 						title
	// 						date
	// 						author
	// 					}
	// 					fields {
	// 						slug
	// 					}
	// 					htmlAst
	// 				}
	// 			}
	// 		}
	// 	}

	// 	`);

	// 	console.log(res.toString());
	// 	res.data.allMarkdownRemark.edges.forEach( ({ node }) => {
	// 		console.log(`Creating blog page ${ node.fields.slug }`);
	// 		createPage({
	// 			component: blogTemplate,
	// 			path: `/blog/${ node.fields.slug }`,
	// 			context: {
	// 				slug: node.fields.slug
	// 			}
	// 		})
	// 	});
	// }
};
