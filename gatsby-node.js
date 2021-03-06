const path = require('path');

const reportsPerListingPage = 6;
const blogsPerListingPage = 6;
const pressCoverageActivitiesPerListingPage = 6;
const activitiesPerListingPage = 9;

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
					.replace(/\W+/g, '-');
				createNodeField({
					node,
					name: 'slug',
					value: slug,
				});
				break;
		}
	},

	async createPages({ graphql, actions, reporter }) {
		const { createPage } = actions;

		/**
		 * Team Member Profile pages
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

		/**
		 * Blog listing pages
		 */
		{
			const blogListingTmpl = path.resolve('./src/components/blog/template/listing.tsx');
			const blogPostTmpl = path.resolve('./src/components/blog/template/post.tsx');
			const blogListingRes = await graphql(`
				query  {
					allStrapiBlog {
						edges {
							node {
								id		
								slug
								strapiId
							}
						}
					}
				}
			`);

			if (blogListingRes.errors) {
				reporter.panicOnBuild("GraphQL Error generating Reports listing pages");
				return;
			}

			const blogs = blogListingRes.data.allStrapiBlog.edges;
			const totalPages = Math.ceil(blogs.length / blogsPerListingPage);

			Array.from({ length: totalPages }).forEach((_, i) => {
				createPage({
					path: i === 0 ? '/media/blog' : `/media/blog/${i + 1}`,
					component: blogListingTmpl,
					context: {
						limit: blogsPerListingPage,
						skip: i * blogsPerListingPage,
						totalPages,
						currentPage: i + 1,
					}
				});
			});

			blogs.forEach(({ node }, _) => {
				const path = '/media/blog/' + node.slug

				createPage({
					path,
					component: blogPostTmpl,
					context: {
						id: node.strapiId,
					}
				})
			});

		}

		/**
		 * Press coverage listing
		 * Activity pages indiviual
		 */
		{
			const pressListingTmpl = path.resolve('./src/components/press-coverage/template/listing.tsx');
			const activityPostTmpl = path.resolve('./src/components/activity/template/post.tsx');
			const pressListingRes = await graphql(`
				query  {
					allStrapiActivity {
						edges {
							node {
								id		
								title
								strapiId
							}
						}
					}
				}
			`);

			if (pressListingRes.errors) {
				reporter.panicOnBuild("GraphQL Error generating Reports listing pages");
				return;
			}

			const activities = pressListingRes.data.allStrapiActivity.edges;
			const totalPages = Math.ceil(activities.length / pressCoverageActivitiesPerListingPage);

			// press coverage listing
			Array.from({ length: totalPages }).forEach((_, i) => {
				createPage({
					path: i === 0 ? '/media/coverage' : `/media/coverage/${i + 1}`,
					component: pressListingTmpl,
					context: {
						limit: pressCoverageActivitiesPerListingPage,
						skip: i * pressCoverageActivitiesPerListingPage,
						totalPages,
						currentPage: i + 1,
					}
				});
			});

			// activity page
			activities.forEach(({ node }) => {
				const slug = node.title
					.toLowerCase()
					.replace(/\W+/g, '-');

				createPage({
					path: `/media/activities/${slug}`,
					component: activityPostTmpl,
					context: {
						id: node.strapiId,
					}
				});
			})
		}

		/**
		 * Press coverage listing by publisher
		 */
		{
			const tmp = path.resolve('./src/components/press-coverage/template/listing-publisher.tsx');
			const res = await graphql(`
				query  {
					allStrapiNewsPublisher{
						edges {
							node {
								name
								strapiId
							}
						}
					}
				}
			`);

			if (res.errors) {
				reporter.panicOnBuild("GraphQL Error generating Reports listing pages");
				return;
			}

			const publishers = res.data.allStrapiNewsPublisher.edges;
			publishers.map(({ node: p }) => {
				createPage({
					path: `/media/coverage/${p.name.toLowerCase().replace(/[^a-zA-Z]+/g, '-')}`,
					component: tmp,
					context: {
						name: p.name,
						id: p.strapiId,
					}
				});
			});
		}




		/**
		 * Activities listing pages
		 */
		{
			const activitiesListingTmpl = path.resolve('./src/components/activity/template/listing.tsx');
			const activitiesByYearListingTmpl = path.resolve('./src/components/activity/template/listing-by-year.tsx');
			const activitiesListingRes = await graphql(`
				query  {
					allStrapiActivity(sort:{order: DESC, fields:date}) {
						edges {
							node {
								id		
								title
								strapiId
								date
							}
						}
					}
				}
			`);


			const activities = activitiesListingRes.data.allStrapiActivity.edges;
			let years = [];
			activities.forEach(({ node }) => {
				const date = new Date(node.date);
				const year = date.getFullYear();
				if (typeof years.find(y => y === year) === 'undefined') {
					years.push(year);
				}
			})

			const totalPages = Math.ceil(activities.length / activitiesPerListingPage);

			// default listing
			Array.from({ length: totalPages }).forEach((_, i) => {
				createPage({
					path: i === 0 ? '/media/activities' : `/media/activities/${i + 1}`,
					component: activitiesListingTmpl,
					context: {
						limit: activitiesPerListingPage,
						skip: i * activitiesPerListingPage,
						years,
						totalPages,
						currentPage: i + 1,
					}
				});
			});



			// by year listing
			years.forEach(async (year) => {
				const from = `${year}-01-01`;
				const till = `${year + 1}-01-01`;

				const byYearactivitiesListingRes = await graphql(`
					query  {
						allStrapiActivity(filter:{date: {gte: "${from}", lt: "${till}"}}) {
							edges {
								node {
									id		
									title
									strapiId
									date
								}
							}
						}
					}
				`);

				const yearlyActivities = byYearactivitiesListingRes.data.allStrapiActivity.edges.length;
				const totalPages = Math.ceil(yearlyActivities / activitiesPerListingPage);
				console.log("ALI ==> ", totalPages, " - Total ACtities: ", yearlyActivities);
				Array.from({ length: totalPages }).forEach((_, i) => {
					createPage({
						path: i === 0 ? `/media/yearly-activities-${year.toString()}` : `/media/yearly-activities-${year.toString()}/${i + 1}`,
						component: activitiesByYearListingTmpl,
						context: {
							limit: activitiesPerListingPage,
							skip: i * activitiesPerListingPage,
							years,
							currentYear: year,
							totalPages,
							from,
							till,
							currentPage: i + 1,
						}
					});

				})
			})
		}

	}

};
