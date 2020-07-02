import React from 'react';
import { Section, SectionType } from '../layout';
import { Container, Row, Col } from 'reactstrap';
import { Blog } from './query';
import dayjs from 'dayjs';
import { AuthorMedia } from '../team';
import { Link } from 'gatsby';

export default ({ blog }: { blog: Blog }) => {
    return (
        <Section
            type={SectionType.darkOverWhite}
            className="px-4"
        >
            <Container>
                <Row noGutters>
                    <Col md="6" className="pr-md-4">
                        <div className="clearfix">
                            <p className="text-right text-muted mb-2" style={{ fontSize: '1.2rem' }}>
                                Featured Story
                            </p>
                            <p className="h6 text-right mb-0">
                                {dayjs(blog.created_at).format("dddd MMMM Do, YYYY")}
                            </p>
                        </div>
                        <h2 className="h4 border-top pt-2">
                            <Link to={`/media/blog/${blog.slug}`}>
                                {blog.title}
                            </Link>
                        </h2>
                        <p className='text-justify'>{blog.body_abstract}...</p>
                        <AuthorMedia author={blog.author} />
                    </Col>
                    <Col
                        md="6"
                        className="bg-white shadow-lg"
                        style={{
                            backgroundImage: `url(${blog.cover.file.publicURL})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center right'
                        }}
                    >
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}