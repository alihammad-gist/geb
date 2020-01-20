import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../../components/layout';
import Head from '../../components/head';
import renderAst from '../../markdown-ast-renderer';


const Styles = require("./blog.module.scss");

export const query = graphql`
	query SingleBlogPost (
		$slug: String!
	) {
		markdownRemark(
			fields: {
				slug: {
					eq: $slug
				}
			}
		) {
			frontmatter {
				title
				date
				author
			}
			htmlAst
		}
	} 
`

// Example of Dynamic GraphQL Query
export default ({ data }: any) => {
	return (
		<Layout>
			<Head title={ data.markdownRemark.frontmatter.title } />
			<h1>{  data.markdownRemark.frontmatter.title  }</h1>
			<p>By { data.markdownRemark.frontmatter.author }, {data.markdownRemark.frontmatter.date}</p>
			{ renderAst(data.markdownRemark.htmlAst) }
		</Layout>	
	);
}

