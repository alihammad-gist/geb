import React from 'react';
import { Section, SectionType } from '../layout';
import { Container, Row, Col, Button } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { QueryResult } from './query';
import * as styles from './styles.module.scss';
import { GridItem } from '.';
import { MdClose } from 'react-icons/md';

export default () => {
    const data = useStaticQuery(graphql`
        query reportGrid {
            allStrapiReport(
                limit: 10, 
                filter: {id: {in: [
                        "Report_4",
                        "Report_7",
                        "Report_6",
                        "Report_10"
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
                            className={`${styles.itemContainer}`}
                            onClick={() => console.log(node.id)}
                        >
                            <GridItem report={node} key={idx} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col>
                        <Button
                            className="float-right"
                            color="accent"
                        >
                            More Reports and Studies
                        </Button>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}