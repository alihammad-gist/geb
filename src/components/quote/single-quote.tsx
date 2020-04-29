import React from 'react';
import { Section, SectionType } from '../layout';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { Quote } from './query';
import { Media, Container, Row, Col } from 'reactstrap';
import * as styles from './styles.module.scss';
import ReactMarkdown from 'react-markdown';

type props = {
    title?: string
    quote: Quote
}

export default ({ quote, title }: props) => {

    const slug = quote.team_member.name
        .toLowerCase()
        .replace(/[^a-zA-Z]+/g, '-');


    return (
        <Section
            type={SectionType.darkOverWhite}
            className="shadow"
        >

            <Container>
                {title &&
                    <h2 className="text-right">{title}</h2>
                }
                <Row>
                    <Col md="4">
                        <img
                            src={quote.team_member.Image.file.publicURL}
                            alt={quote.team_member.Image.caption}
                            className="img-fluid"
                        />
                        <div
                            className="text-center"
                        >
                            <h4 className="mb-0 mt-2">
                                <Link to={`/about/${slug}`}>
                                    {quote.team_member.name}
                                </Link>
                            </h4>
                            <p className="mb-0">{quote.team_member.job_title}</p>
                            <p>
                                <small
                                    dangerouslySetInnerHTML={{
                                        __html: quote.team_member.job_desc
                                    }}
                                />
                            </p>
                        </div>
                    </Col>
                    <Col md="8">
                        <blockquote
                            className={`blockquote text-justify ${styles.message}`}
                        >
                            <ReactMarkdown>
                                {quote.message}
                            </ReactMarkdown>
                            <footer className="blockquote-footer text-right">
                                {quote.team_member.name}
                            </footer>
                        </blockquote>
                    </Col>
                </Row>
            </Container>

        </Section>
    );
}