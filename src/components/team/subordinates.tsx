import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Col, Container, Row } from 'reactstrap';
import { MemberMedia, MemberMediaType } from '.';
import { Section } from '../layout';
import { Type } from '../layout/section';
import { QueryResult } from './query';


export default () => {

    const data = useStaticQuery(graphql`
    query teamSubordinates {
            allStrapiTeamMember(filter: {id: {nin: ["Team-member_1", "Team-member_2"]}} ) {
                edges {
                    node {
                        name
                        Image {
                            file {
                                publicURL
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

    const dummyMembers = [0, 1, 2, 3, 4, 5].map(idx => ({
        id: `${idx}`,
        Image: {
            caption: '',
            file: {
                publicURL: `//placeimg.com/120/120/people?${Math.random()}`
            }
        },
        job_title: 'Project Lead',
        job_desc: '',
        name: `Member Name#${idx}`,
        about: '',
        remarks: '',
        fields: {
            slug: "/dr-saleem-janjua"
        },
        email: '',
        phone: '',
        linkedIn: '',
        twitter: '',
    }));

    return (
        <Section type={Type.darkOverWhite}>
            <Container>
                {/* <h3 className="text-center mb-5 decorated">
                    <span>GEB Team</span>
                </h3> */}
                <Row>
                    {/* data.allStrapiTeamMember.edges.map(({ node }, idx) => {
                        return (
                            <Col md="4" key={idx}>
                                <ScrollAnimation animateIn="fadeIn" delay={(idx + 1) * 120}>
                                    <MemberMedia
                                        typ={MemberMediaType.HorizontalSmall}
                                        member={node}
                                    />
                                </ScrollAnimation>
                            </Col>
                        );
                    })*/ }

                    {dummyMembers.map((member, idx) => {
                        return (
                            <Col md="4" key={idx} className="mb-4">
                                <ScrollAnimation
                                    animateOnce
                                    animateIn="fadeIn"
                                    delay={(idx % 3 + 1) * 120}>

                                    <MemberMedia
                                        typ={MemberMediaType.HorizontalSmall}
                                        member={member}
                                    />
                                </ScrollAnimation>
                            </Col>
                        );
                    })}

                </Row>
            </Container>
        </Section>
    )
}