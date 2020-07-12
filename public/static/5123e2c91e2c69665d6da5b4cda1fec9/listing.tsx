import { graphql } from 'gatsby';
import { QueryResult } from '../query';
import { AbstractListing } from '.';
import React from 'react';

export const defaultListingQuery = graphql`
query defaultActivityListing($skip: Int!, $limit: Int!) {
        allStrapiActivity(
                skip: $skip, 
                limit: $limit,
                sort:{order: DESC, fields:date}
            ) {
            edges {
            node {
                date
                Cover {
                caption
                file {
                    publicURL
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            src
                        }
                    }
                }
                }
                title
                venue
                description
                activity_types {
                    name
                }
            }
            }
        }
    }
`;

type props = {
    data: QueryResult['data']
    pageContext: {
        skip: number
        limit: number
        totalPages: number
        currentPage: number
        years: number[]
    }
}

export default ({ data, pageContext: { totalPages, currentPage, years } }: props) => {
    return (
        <AbstractListing
            activites={data}
            totalPages={totalPages}
            currentPage={currentPage}
            years={years}
            linkGenerator={(page) => page === 1 ? '/media/activities' : `/media/activities/${page}`}
        />
    );
}
