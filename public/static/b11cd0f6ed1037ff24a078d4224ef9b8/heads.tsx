import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Section } from '../layout';
import { Type } from '../layout/section';
import { Member, QueryResult } from './query';
import ScrollAnimation from 'react-animate-on-scroll';
import { MemberMedia, MemberMediaType } from '.';


type props = {
    typ: MemberMediaType,
    centered?: boolean,
    shadow?: boolean
    decoratedHeading?: boolean
    mimicReportDesign?: boolean
    description?: boolean
}

export default ({
    typ,
    centered = false,
    shadow = false,
    decoratedHeading = false,
    mimicReportDesign = false,
    description = false,
}: props) => {
    const data = useStaticQuery(graphql`
        query teamHeads {
            allStrapiTeamMember(filter: {id: {in: ["Team-member_1", "Team-member_2"]}}) {
                edges {
                    node {
                        id
                        name
                        Image {
                            file {
                                publicURL
                                childImageSharp {
                                    fluid (maxWidth: 250) {
                                        src
                                    }
                                }
                            }
                            caption
                        }
                        about
                        remarks
                        job_title
                        job_desc
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `) as QueryResult;

    let dr: Member,
        sec: Member;

    if (data.allStrapiTeamMember.edges[0].node.id == 'Team-member_2') {
        dr = data.allStrapiTeamMember.edges[1].node;
        sec = data.allStrapiTeamMember.edges[0].node;
    } else {
        dr = data.allStrapiTeamMember.edges[0].node;
        sec = data.allStrapiTeamMember.edges[1].node;
    }

    return (
        <Section type={Type.darkOverWhite} className={shadow ? 'shadow' : ''}>
            <Container>
                <h3 className={`text-center mb-4 ${decoratedHeading ? "decorated" : ''}`}>
                    <span>GEB Management</span>
                </h3>
                <Row className={centered ? "justify-content-center" : ''}>
                    <Col md={centered ? '6' : '6'}>
                        <ScrollAnimation animateIn="fadeIn" animateOnce>
                            <MemberMedia
                                typ={typ}
                                member={sec}
                            />
                        </ScrollAnimation>
                    </Col>
                    {!mimicReportDesign &&
                        <Col md={centered ? '6' : '6'}>
                            <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce>
                                <MemberMedia
                                    typ={typ}
                                    member={dr}
                                />
                            </ScrollAnimation>
                        </Col>
                    }
                </Row>
                {mimicReportDesign &&
                    <Row className={`${centered ? "justify-content-center" : ''} mt-3`}>
                        <Col md={centered ? '5' : '6'}>
                            <ScrollAnimation animateIn="fadeIn" delay={300} animateOnce>
                                <MemberMedia
                                    typ={typ}
                                    member={dr}
                                />
                            </ScrollAnimation>
                        </Col>
                    </Row>
                }
            </Container>

        </Section>
    );

};



