import React, { useState } from 'react';
import { QueryResult } from '../query';
import { graphql } from 'gatsby';
import { Layout, Section, SectionType } from '../../layout';
import Head from '../../head';
import { Container, Row, Col, Media, Button } from 'reactstrap';
import { WorkMenu } from '../../menu';
import { Truncate, DefaultTooltip } from '../../text';
import { MdFileDownload } from 'react-icons/md';
import { PaginationNav } from '../../nav';
import { ReportModal } from '..';
import * as styles from '../styles.module.scss';

export const reportsListQuery = graphql`
    query reportListing($skip: Int!, $limit: Int!) {
            allStrapiReport(skip: $skip, limit: $limit) {
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
`;

type props = {
    data: QueryResult
    pageContext: {
        skip: number
        limit: number
        totalPages: number
        currentPage: number
    }
}

export default (p: props) => {
    const [activeReport, setActiveReport] = useState(p.data.allStrapiReport.edges[0].node);
    const [isOpen, setIsOpen] = useState(false);

    const openReport = (idx: number) => {
        const r = p.data.allStrapiReport.edges[idx].node;

        setActiveReport(r);
        toggleModal(); // assuming report can only be opened when modal isn't open
    }

    const toggleModal = () => {
        setIsOpen(!isOpen);
    }

    return (
        <Layout>
            <Head title={`Reports Page ${p.pageContext.currentPage}`} />
            <Section type={SectionType.darkOverWhite}>
                <Container>
                    <Row>
                        <Col md="3">
                            <WorkMenu />
                        </Col>
                        <Col md="9">
                            <Row>
                                {p.data.allStrapiReport.edges.map(({ node: report }, idx) => {
                                    return (
                                        <Col md='6' className='d-flex' key={idx}>
                                            <Media
                                                key={idx}
                                                className={`
                                            p-2
                                            my-3
                                            d-flex flex-column justify-content-between border
                                        `}
                                            >
                                                <Media className='d-flex flex-column'>
                                                    <a href="#"
                                                        className={`d-block ${styles.listingLink}`}
                                                        id={`report_${idx}`}
                                                        onClick={() => openReport(idx)}
                                                    >
                                                        <img
                                                            src={report.cover.publicURL}
                                                            className='img-fluid'
                                                            style={{
                                                                width: '100%',
                                                                height: 'auto',
                                                            }}
                                                        />
                                                    </a>
                                                    <DefaultTooltip target={`report_${idx}`} style={{ maxWidth: '400px' }}>
                                                        <h5>{report.title}</h5>
                                                    </DefaultTooltip>
                                                </Media>
                                                <Button
                                                    block
                                                    color="accent"
                                                    onClick={() => openReport(idx)}
                                                    target="_blank"
                                                    className="float-right mt-2"
                                                    id={`download_report_${idx}`}
                                                >
                                                    <span className="icon-text">
                                                        <MdFileDownload size='1.3rem' />
                                                        <span>
                                                            Download
                                                            </span>
                                                    </span>
                                                </Button>
                                                <DefaultTooltip target={`download_report_${idx}`}>

                                                    Download size: {
                                                        (report.document.size / 1000000).toPrecision(2)
                                                    } MB
                                                    </DefaultTooltip>
                                            </Media>
                                        </Col>
                                    );
                                })}
                            </Row>
                            <div className="clearfix border-top mb-3" />
                            <PaginationNav
                                className="float-right"
                                currentPage={p.pageContext.currentPage}
                                totalPages={p.pageContext.totalPages}
                                linkGenerator={(page) => page > 1 ? `/work/reports/${page}` : '/work/reports'}
                            />
                            <p className="float-left mt-2">
                                Page {p.pageContext.currentPage} / {p.pageContext.totalPages}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>
            <ReportModal
                report={activeReport}
                isOpen={isOpen}
                toggle={toggleModal}
            />
        </Layout>
    );
}
