const path = require('path');

const reportsPerListingPage = 6;

module.exports = {
	onCreateNode({ node, actions }) {
		const { createNodeField } = actions;

		switch (node.internal.type) {

			/** 
			 *  Team Member
			 * 	- Slug generation
			 *  
			 */
			case 'StrapiTeamMember':
				const slug = node.name
					.toLowerCase()
					.replace(/[^a-zA-Z]+/g, '-');
				createNodeField({
					node,
					name: 'slug',
					value: slug,
				});
				console.log(slug);
				break;
		}
	},

	async createPages({ graphql, actions, reporter }) {
		const { createPage } = actions;

		/**
		 * Team Member
		 * 	- Member page creation
		 */
		{
			const memberTmpl = path.resolve('./src/components/team/template/member.tsx');
			const membersRes = await graphql(`
				query {
					allStrapiTeamMember {
						edges {
						node {
							fields {
								slug
							}
						}
						}
					}
				}
			`);

			if (membersRes.errors) {
				reporter.panicOnBuild('GraphQL generated error while creating member profile pages');
				return;
			}

			membersRes.data.allStrapiTeamMember.edges.forEach(({ node }) => {
				createPage({
					component: memberTmpl,
					path: `/about/${node.fields.slug}`,
					context: {
						slug: node.fields.slug,
					}
				})
			});
		}

		/**
		 * Report listing pages
		 */
		{
			const reportListingTmpl = path.resolve('./src/components/reports/template/listing.tsx');
			const reportListingRes = await graphql(`
				query  {
					allStrapiReport {
						edges {
							node {
								id		
							}
						}
					}
				}
			`);

			if (reportListingRes.errors) {
				reporter.panicOnBuild("GraphQL Error generating Reports listing pages");
				return;
			}

			const reports = reportListingRes.data.allStrapiReport.edges;
			const totalPages = Math.ceil(reports.length / reportsPerListingPage);
			Array.from({ length: totalPages }).forEach((_, i) => {
				createPage({
					path: i === 0 ? '/work/reports' : `/work/reports/${i + 1}`,
					component: reportListingTmpl,
					context: {
						limit: reportsPerListingPage,
						skip: i * reportsPerListingPage,
						totalPages,
						currentPage: i + 1,
					}
				});
			});
		}

	}
};
