import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Section } from '../layout';
import { Type } from '../layout/section';
import { Container, Row, Col } from 'reactstrap';
import { QueryResult, Member } from './query';
import * as styles from './styles.module.scss';
import { Truncate } from '../text';

const truncateLen = 120;

export default () => {
    const data = useStaticQuery(graphql`
        query teamHeads {
            allStrapiTeamMember(filter: {job_title: {in: ["Sec. MoCC, National Project Director", "National Project Coordinator"]}}) {
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
                    }
                }
            }
        }
    `) as QueryResult;

    let dr: Member = null,
        sec: Member = null;

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
                <h3 className="text-center mb-5">GEB Officials</h3>
                <Row className="justify-content-center">
                    <Col md="4">
                        <div className={styles.media}>
                            <img
                                className="img-fluid"
                                style={{ maxWidth: '250px' }}
                                src={sec.Image.file.publicURL}
                                alt={sec.Image.caption} />
                            <h4 className="text-center mb-0 mt-3">{sec.name}</h4>
                            <p className="text-center"><small>{sec.job_title}</small></p>
                            <p className="text-center">
                                <Truncate
                                    text={sec.about}
                                    expandable={false}
                                    max={truncateLen}
                                />
                            </p>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className={styles.media}>
                            <img
                                className="img-fluid"
                                style={{ maxWidth: '250px' }}
                                src={dr.Image.file.publicURL}
                                alt={dr.Image.caption} />
                            <h4 className="text-center mb-0 mt-3">{dr.name}</h4>
                            <p className="text-center"><small>{dr.job_title}</small></p>
                            <p className="text-center">
                                <Truncate
                                    text={dr.about}
                                    expandable={false}
                                    max={truncateLen}
                                />
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Section>
    );

}