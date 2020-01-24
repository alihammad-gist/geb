import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import { Layout } from '../components/layout';
import Head from '../components/head';

export default () => {
	const data = useStaticQuery(
		graphql`
			query MyQuery {
				allMarkdownRemark {
					totalCount
					edges {
						node {
							fields {
								slug
							}
							excerpt
							frontmatter {
								date
								title
							}
						}
					}
				}
			}
		`
	);

	return (
		<Layout>
			<Head title="Blog Posts" />
			<h1>Blog listings</h1>
			<h3><small>Total Blog posts:</small> { data.allMarkdownRemark.totalCount }</h3>
			<ol>
				{ data.allMarkdownRemark.edges.map((item: any) => 
					<li>
						<h2><Link to={`/blog/${item.node.fields.slug}`}> { item.node.frontmatter.title }</Link></h2>
						<p>{ item.node.frontmatter.publishedDate}</p>
					</li>
				) }
			</ol>
		</Layout>
	);
}
