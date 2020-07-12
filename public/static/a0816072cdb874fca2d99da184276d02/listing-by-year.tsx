import { graphql } from 'gatsby';
import { QueryResult } from '../query';
import { AbstractListing } from '.';
import React from 'react';

export const defaultListingQuery = graphql`
query byYearActivityListing($skip: Int!, $limit: Int!, $from: Date!, $till: Date!) {
        allStrapiActivity(
            skip: $skip, 
            limit: $limit,
            filter:{ date: {gte: $from, lt: $till} },
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
                        fluid(maxWidth: 300) {
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
        from: string
        till: string
        totalPages: number
        currentPage: number
        years: number[]
        currentYear: number
    }
}

export default ({ data, pageContext: { totalPages, currentPage, years, currentYear } }: props) => {
    return (
        <AbstractListing
            activites={data}
            totalPages={totalPages}
            currentPage={currentPage}
            years={years}
            linkGenerator={(page) => page === 1 ?
                `/media/yearly-activities-${currentYear}` : `/media/yearly-activities-${currentYear}/${page}`}
        />
    );
}
