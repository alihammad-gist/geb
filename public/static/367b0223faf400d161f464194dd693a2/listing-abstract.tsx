import React from 'react';
import { Layout, Section, SectionType } from '../../layout';
import Head from '../../head';
import { Container, Row, Col, Tag, TabContent, Badge } from 'reactstrap';
import { SubMenu } from '../../menu';
import { QueryResult } from '../query';
import { PaginationNav } from '../../nav';
import { Link } from 'gatsby';
import { readableLink } from '../../text/links';
import { formateDate } from '../../text/formating';

type props = {
    years: number[]
    activites: QueryResult['data']
    totalPages: number
    currentPage: number
    linkGenerator: (page: number) => string
}

export default ({ years, activites, totalPages, currentPage, linkGenerator }: props) => {
    const links = [{
        label: `All (${years[years.length - 1]} - ${years[0]})`,
        to: '/media/activities'
    }].concat(
        years.map(y => ({ label: y.toString(), to: `/media/yearly-activities-${y.toString()}` }))
    );
    console.log('sub-menu', links);

    return (
        <Layout>
            <Head title="Activities" />
            <Section type={SectionType.darkOverWhite}>
                <Container>
                    <Row>
                        <Col md='3'>
                            <SubMenu
                                links={links}
                            />
                        </Col>
                        <Col md='9'>
                            <Row style={{ minHeight: '50vh' }}>
                                {activites.allStrapiActivity.edges.map(({ node }, idx) => (
                                    <Col md='4' key={idx} className='pb-4'>
                                        <figure className="overflow-hidden m-0 position-relative border p-1 rounded" style={{ height: "150px" }}>
                                            <Link className='d-block overflow-hidden h-100 rounded' to={`/media/activities/${readableLink(node.title)}`}>
                                                <img
                                                    src={node.Cover.file.publicURL}
                                                    className="img-fluid"
                                                    style={{ minHeight: "100%", minWidth: "100%" }}
                                                />

                                            </Link>
                                            <Badge color='dark' className='position-relative' t style={{ top: "-1.8rem", left: "0.5rem" }}>{node.activity_types[0].name}</Badge>
                                        </figure>
                                        <h6 className="m-0">
                                            <Link
                                                to={`/media/activities/${readableLink(node.title)}`}
                                                className='text-dark'
                                            >
                                                {node.title}
                                            </Link>
                                        </h6>
                                        <p className="text-muted m-0"><small>{formateDate(node.date)}</small></p>
                                    </Col>
                                ))}
                            </Row>
                            <div className="clearfix border-top mb-3" />
                            <PaginationNav
                                className="float-right"
                                currentPage={currentPage}
                                totalPages={totalPages}
                                linkGenerator={linkGenerator}
                            />
                            <p className="float-left mt-2">
                                Page {currentPage} / {totalPages}
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Layout>
    );
}