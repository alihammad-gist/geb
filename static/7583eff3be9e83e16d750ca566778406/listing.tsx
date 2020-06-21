import { graphql } from 'gatsby';
import React from 'react';
import { QueryResult, SingleQueryResult } from '../query';
import { FeaturedBlog, BlogList } from '..';
import { Layout, Section, SectionType } from '../../layout';
import Head from '../../head';
import { PaginationNav } from '../../nav';
import { Container } from 'reactstrap';

export const blogsListsQuery = graphql`
    query blogListing($skip: Int!, $limit: Int!) {

        allStrapiBlog(skip: $skip, limit: $limit, sort: {order: DESC, fields: id}) {
            edges {
                node {
                    title
                    body
                    author {
                        name
                        job_title
                        Image {
                            caption
                            file {
                                publicURL
                            }
                        }
                    }
                    body_abstract
                    created_at
                    updated_at
                    slug
                    cover {
                        caption
                        file {
                            publicURL
                        }
                    }
                    featured
                }
            }
        }

         strapiBlog(featured: {eq: "Yes"}) {
            title
            body
            body_abstract
            created_at
            updated_at
            slug
            author {
                name
                job_title
                Image {
                    caption
                    file {
                        publicURL
                    }
                }
            }
            cover {
                caption
                file {
                    publicURL
                }
            }
            featured
        }

    }
`;

type props = {
    data: QueryResult & SingleQueryResult
    pageContext: {
        skip: number
        limit: number
        totalPages: number
        currentPage: number
    }
}

export default (p: props) => {

    return (
        <Layout>
            <Head title={`Blog Posts (Page ${p.pageContext.currentPage} of ${p.pageContext.totalPages})`} />
            {p.pageContext.currentPage === 1 &&
                <FeaturedBlog blog={p.data.strapiBlog} />
            }
            <BlogList
                blogs={p.data.allStrapiBlog.edges.map(e => e.node)}
            />

            <Section type={SectionType.darkOverGray}>
                <Container>
                    <p className="float-left">
                        Page {p.pageContext.currentPage} / {p.pageContext.totalPages}
                    </p>
                    <PaginationNav
                        currentPage={p.pageContext.currentPage}
                        totalPages={p.pageContext.totalPages}
                        linkGenerator={(n) => `/media/blog/${n}`}
                        className="float-right"
                    />
                </Container>
            </Section>
        </Layout>
    );
}