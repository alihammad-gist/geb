import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';



export default () => {
  const data = useStaticQuery(
    graphql`
      query {
				site {
					siteMetadata {
						title
					}
				}
      }
    `
  )

	
	return (
		<Layout>
			<Head title="About Us" />
			<div>
				<h1>{ data.site.siteMetadata.title }</h1>
			</div>
		</Layout>
	);
}
