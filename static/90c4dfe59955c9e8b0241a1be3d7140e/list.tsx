import React from 'react';
import { Blog } from './query';
import { Section, SectionType } from '../layout';
import { Container, Row, Col } from 'reactstrap';
import { readableLink } from '../text/links';

export default ({ blogs }: { blogs: Blog[] }) => {
    return (
        <Section type={SectionType.darkOverAltGray}>
            <Container>
                {blogs.map((blog, idx) => (
                    <Row key={idx} className="py-4 border-bottom">
                        <Col md="8">
                            <h3 className="h4">
                                <a href={`/media/blog/${blog.slug}`}>
                                    {blog.title}
                                </a>
                            </h3>
                            <p className="text-justify mb-0">{blog.body_abstract}...</p>
                        </Col>
                        <Col md="4" className="align-self-center">
                            {blog.cover &&
                                <img
                                    src={blog.cover.file.publicURL}
                                    alt={blog.cover.caption}
                                    className="img-fluid"
                                />
                            }
                        </Col>
                    </Row>
                ))}
            </Container>
        </Section>
    );
}