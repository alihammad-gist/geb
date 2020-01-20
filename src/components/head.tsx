import React from 'react';
import { Helmet }  from 'react-helmet';

import { graphql, useStaticQuery } from 'gatsby';

export default ({ title }: {title: string}) => {
	const data = useStaticQuery(
		graphql`
			query SiteTitle {
				site {
					siteMetadata {
						title
					}
				}
			}
		`
	) 
	return (
		<Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
	)
}
