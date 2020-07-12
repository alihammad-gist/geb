import { graphql, useStaticQuery, Link } from 'gatsby';
import { QueryResult } from './query';
import React from 'react';
import { Row, Col, Container, Media } from 'reactstrap';
import { Section, SectionType } from '../layout';
import { Truncate } from '../text';
import { MdEmail, MdPhone } from 'react-icons/md';


export default () => {
    const data = useStaticQuery(graphql`
        query teamHeadsAlt {
            allStrapiTeamMember(
                filter: {id: {in: ["Team-member_2", "Team-member_1"]}},
                sort: {order: DESC, fields: id}
            ) {
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
    return (
        <Section type={SectionType.darkOverWhite}>
            <Container>
                {data.allStrapiTeamMember.edges.map(({ node }, idx) => (
                    <Row>
                        <Col md="10" className="my-3 border-bottom">
                            <Media>
                                <Media left className='p-3 text-center' style={{ width: '200px' }}>
                                    <img
                                        src={node.Image.file.publicURL}
                                        className="rounded-circle img-fluid img-thumbnail"
                                    />

                                </Media>

                                <Media body>
                                    <h4><Link to={`/about/${node.fields.slug}`}>{node.name}</Link></h4>
                                    <p className="mb-0">
                                        {node.job_title}
                                    </p>
                                    <p>
                                        <small
                                            dangerouslySetInnerHTML={{
                                                __html: node.job_desc
                                            }}
                                        />
                                    </p>
                                    <Truncate
                                        text={node.about}
                                        expandable={false}
                                        max={275}
                                        className="text-justify"
                                    />
                                </Media>

                            </Media>
                        </Col>
                    </Row>
                ))}
            </Container>
        </Section>
    );
}
