import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselIndicators, Container, Row, Col } from 'reactstrap';
import { useStaticQuery, graphql } from 'gatsby';
import { MdPlace } from 'react-icons/md';

import { QueryResult } from './query';
import { groupOf } from '../../lib/array';
import * as styles from './styles.module.scss';
import { Section } from '../layout';
import { Type } from '../layout/section';

export default () => {

    const [activeIdx, setActiveIdx] = useState(0);
    const { allStrapiActivity: { edges } } =
        useStaticQuery(graphql`
            query activitesList {
                allStrapiActivity {
                    edges {
                    node {
                        id
                        title
                        date
                        venue
                        Cover {
                            caption
                            file {
                                publicURL
                            }
                        }
                    }
                    }
                }
            }
        `) as QueryResult['data'];

    const slides = groupOf(3, ...edges).map((group, j) => {

        return (
            <CarouselItem className='my-4' key={j}>
                <Container>
                    <Row>
                        {
                            group.map(({ node }, idx) => (
                                <Col
                                    md="4"
                                    key={idx}
                                    className={styles.slideContainer}
                                >
                                    <a className={styles.slide} href="#">
                                        <img
                                            src={node.Cover.file.publicURL}
                                            alt={node.Cover.captions}
                                            className={styles.slideCover}
                                        />
                                        <h4 className={styles.slideTitle}>{node.title}</h4>
                                        <div className={styles.slideMeta}>
                                            <span className={styles.slideVenue}>
                                                <MdPlace size="1rem" />
                                                &nbsp;
                                                <span
                                                    style={{ verticalAlign: "middle", lineHeight: '100%' }}>
                                                    {node.venue}
                                                </span>
                                            </span>
                                        </div>
                                    </a>
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </CarouselItem>
        );
    });

    const next = () => {
        if (activeIdx < slides.length - 1) {
            setActiveIdx(activeIdx + 1);
        } else {
            setActiveIdx(0);
        }
    }

    const prev = () => {
        if (activeIdx <= 0) {
            setActiveIdx(slides.length - 1);
        } else {
            setActiveIdx(activeIdx - 1);
        }
    }

    const setIdx = (idx: number) => {
        if (idx >= 0 && idx < slides.length) {
            setActiveIdx(idx);
        }
    }

    return (
        <Section type={Type.darkOverWhite}>
            <Carousel
                next={next}
                previous={prev}
                activeIndex={activeIdx}
                className={`pb-4 ${styles.carousel}`}
            >
                <CarouselIndicators
                    items={slides.map((_, idx) => ({ key: idx }))}
                    activeIndex={activeIdx}
                    onClickHandler={setIdx}
                    className={styles.slideIndicators}
                />
                {slides}
            </Carousel>
        </Section >
    );
}