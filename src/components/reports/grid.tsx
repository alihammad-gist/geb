import React, { useLayoutEffect } from 'react';
import { Section, SectionType } from '../layout';
import { Container, Row, Col, Button } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { QueryResult } from './query';
import * as styles from './styles.module.scss';
import { GridItem } from '.';
import { Truncate } from '../text';
import { dummyText } from '../../lib/text';
import ScrollAnimation from 'react-animate-on-scroll';
import { MdArrowForward } from 'react-icons/md';

export default () => {

    const data = useStaticQuery(graphql`
        query reportGrid {
            allStrapiReport(
                limit: 10, 
                filter: {id: {in: [
                        "Report_4",
                        "Report_3",
                        "Report_6",
                        "Report_1"
                    ]}}
                ) {
            edges {
                node {
                    id
                    title
                    document {
                        publicURL
                        size
                    }
                    cover {
                        publicURL
                        size
                    }
                    summary
                    publishing_date
                }
            }
            }
        }
    `) as QueryResult;

    return (
        <Section type={SectionType.darkOverGray} className={styles.reportGridSection}>
            <Container>

                <h2 className="text-center mb-5"> Reports</h2>
                <Row>
                    {data.allStrapiReport.edges.map(({ node }, idx) => (
                        <Col
                            key={idx}
                            md={3}
                            href='#'
                            className={`mb-4 ${styles.itemContainer}`}
                            onClick={() => console.log(node.id)}
                        >
                            <ScrollAnimation
                                animateIn="fadeInUp"
                                delay={idx * 120}
                            >
                                <GridItem report={node} key={idx} />
                            </ScrollAnimation>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col>
                        <Button
                            className="float-right"
                            color="primary"
                        >
                            More Reports and Studies
                           <span className="svg-icon svg-baseline ml-2 arrow-forward-animate">
                                <MdArrowForward />
                            </span>
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}