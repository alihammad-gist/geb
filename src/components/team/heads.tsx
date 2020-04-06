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
}

export default ({ typ, centered = false }: props) => {
    const data = useStaticQuery(graphql`
        query teamHeads {
            allStrapiTeamMember(filter: {name: {in: ["Dr. Saleem Janjua", "Ms. Naheed Shah Durrani"]}}) {
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
                    }
                }
            }
        }
    `) as QueryResult;

    let dr: Member,
        sec: Member;

    if (data.allStrapiTeamMember.edges[0].node.id == 'Team-member_1') {
        dr = data.allStrapiTeamMember.edges[1].node;
        sec = data.allStrapiTeamMember.edges[0].node;
    } else {
        dr = data.allStrapiTeamMember.edges[0].node;
        sec = data.allStrapiTeamMember.edges[1].node;
    }

    return (
        <Section type={Type.darkOverWhite}>
            <Container>
                <h3 className="text-center mb-5 decorated">
                    <span>GEB Officials</span>
                </h3>
                <Row className={centered ? "justify-content-center" : ''}>
                    <Col md={centered ? '5' : '6'}>
                        <ScrollAnimation animateIn="fadeIn">
                            <MemberMedia
                                typ={typ}
                                member={sec}
                            />
                        </ScrollAnimation>
                    </Col>
                    <Col md={centered ? '5' : '6'}>
                        <ScrollAnimation animateIn="fadeIn" delay={300}>
                            <MemberMedia
                                typ={typ}
                                member={dr}
                            />
                        </ScrollAnimation>
                    </Col>
                </Row>
            </Container>

        </Section>
    );

};



