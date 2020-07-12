import React from 'react';
import { graphql } from 'gatsby';
import { QueryResult as ActivitiesResult } from '../../activity/query';
import { Layout, Section, SectionType } from '../../layout';
import Head from '../../head';
import { Container, Col, Row, Nav, NavItem, NavLink } from 'reactstrap';
import { ActivityCoverage } from '..';
import { PublishersMenu } from '../../menu';

export const query = graphql`
query pressCoverageListingsByPublisher($id: Int!) {
  allStrapiActivity(filter: {press_coverages: {elemMatch: {news_publisher: {eq: $id}}}}, sort: {order: ASC, fields: date}) {
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
    name: string
    id: number
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
              <h6 className='text-right' style={{ textDecoration: 'underline' }}>Coverage by "{p.pageContext.name}"</h6>
              {p.data.allStrapiActivity.edges
                .map((activity, idx) => (
                  <ActivityCoverage
                    activity={activity.node}
                    key={idx}
                    publishers={p.data.allStrapiNewsPublisher.nodes}
                    filterId={p.pageContext.id}
                  />
                ))}
            </Col>
          </Row>
        </Container>
      </Section>
    </Layout>
  )
}
