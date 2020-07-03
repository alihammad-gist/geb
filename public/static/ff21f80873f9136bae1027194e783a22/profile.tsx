import React from 'react';
import { Section, SectionType } from '../layout';
import { Container, Row, Col, Table } from 'reactstrap';
import { Member } from './query';
import { Truncate } from '../text';
import * as styles from './styles.module.scss';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

type props = {
    member: Member
}

export default ({ member }: props) => {
    return (
        <>
            <Section type={SectionType.darkOverGray}>
                <Container>
                    <Row>
                        <Col md="5" className="text-center">
                            <img
                                src={member.Image.file.publicURL}
                                className="img-fluid" />
                        </Col>
                        <Col md="7">
                            <Row className="h-100">

                                {/** About Section */}
                                <Col xs="12" className="align-self-start">
                                    <h1 >{member.name}</h1>
                                    <p className={`mb-0`}>
                                        {member.job_title}
                                    </p>
                                    <p >
                                        <small
                                            dangerouslySetInnerHTML={{
                                                __html: member.job_desc
                                            }}
                                        />
                                    </p>
                                    <ReactMarkdown
                                        source={member.about}
                                        className='text-justify'
                                    />

                                    {/* <Truncate
                                        text={member.about}
                                        expandable={true}
                                        max={275}
                                        className="text-justify"
                                    /> */}
                                </Col>

                                {/** Contact Info */}
                                <Col xs="12" className='align-self-end'>
                                    <Table>
                                        <tbody>
                                            {member.email != null ?
                                                <tr key="email">
                                                    <th scope="row">Email</th>
                                                    <td>{member.email}</td>
                                                </tr>
                                                : null
                                            }
                                            {member.phone != null ?
                                                <tr key="phone">
                                                    <th scope="row">Office Phone</th>
                                                    <td>{member.phone}</td>
                                                </tr>
                                                : null
                                            }
                                        </tbody>
                                    </Table>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Section>
            {/* Social Icons             <Section type={SectionType.darkOverAltGray}>
                {(member.linkedIn || member.twitter) ?
                    <Container>
                        <Row className="align-items-center">
                            <Col className={styles.profileIcons}>
                                {member.linkedIn &&
                                    <a href={member.linkedIn} className={styles.linkedInIcon}>
                                        <FaLinkedin />
                                    </a>
                                }
                                {member.twitter &&
                                    <a href={member.linkedIn} className={styles.twtIcon} >
                                        <FaTwitter />
                                    </a>
                                }
                            </Col>
                            <Col className={styles.profileIconsDash}></Col>
                            <Col className={styles.profileIconsHeading}>
                                <h5>Social Profiles</h5>
                            </Col>
                        </Row>
                    </Container>
                    : null
                }
            </Section>
            */}
        </>
    );
}