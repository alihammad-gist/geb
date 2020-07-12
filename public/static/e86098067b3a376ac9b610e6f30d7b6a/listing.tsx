import React from 'react';
import { graphql } from 'gatsby';
import { QueryResult as ActivitiesResult } from '../../activity/query';
import { Layout, Section, SectionType } from '../../layout';
import Head from '../../head';
import { Container, Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import { ActivityCoverage } from '..';
import { PaginationNav } from '../../nav';
import { PublishersMenu } from '../../menu';

export const query = graphql`
query pressCoverageListings($skip: Int!, $limit: Int!) {
  allStrapiActivity(skip: $skip, limit: $limit, filter: {press_coverages: {elemMatch: {id: {gte: 0}}}}, sort: {order: ASC, fields: date}) {
    edges {
      node {
        date
        title
        press_coverages {
          prints {
            localFile {
              publicURL
              childImageSharp {
                fluid(maxWidth: 250) {
                  src
                }
              }
            }
            name
          }
          id
          link
          news_publisher
        }
      }
    }
  }
  allStrapiNewsPublisher(sort: {order: ASC, fields: priority}) {
    nodes {
      name
      id
      strapiId
      website
      priority
    }
  }
}

`;

type props = {
  pageContext: {
    currentPage: number
    limit: number
    skip: number
    totalPages: number
  }
  data: ActivitiesResult['data'] & NewPublishersResult
}

export default (p: props) => {
  console.log(p);
  return (
    <Layout>
      <Head title="GEB in Press" />

      <Section type={SectionType.darkOverAltGray}>
        <Container>
          <Row>
            <Col md='3'>
              <PublishersMenu publishers={p.data.allStrapiNewsPublisher.nodes} />
            </Col>
            <Col md='9'>
              {p.data.allStrapiActivity.edges.map((activity, idx) => (
                <ActivityCoverage
                  activity={activity.node}
                  key={idx}
                  publishers={p.data.allStrapiNewsPublisher.nodes}
                />
              ))}
              <p className='mt-4 float-left'>
                Page {p.pageContext.currentPage} / {p.pageContext.totalPages}
              </p>
              <PaginationNav
                className='mt-4 float-right'
                currentPage={p.pageContext.currentPage}
                totalPages={p.pageContext.totalPages}
                linkGenerator={(n) => n > 1 ? `/media/coverage/${n}` : '/media/coverage'}
              />
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}
