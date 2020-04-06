import { graphql, useStaticQuery } from 'gatsby';
import React, { useState, useEffect } from 'react';
import { MdPlace } from 'react-icons/md';
import { Carousel, CarouselIndicators, CarouselItem, Col, Container, Row } from 'reactstrap';
import { groupOf } from '../../lib/array';
import { Section } from '../layout';
import { Type } from '../layout/section';
import { QueryResult } from './query';
import * as styles from './styles.module.scss';
import { Animated } from 'react-animated-css';


const itemsPerGrid = 6;

export default () => {

    const [isBrowser, setBrowser] = useState<any>(false);
    useEffect(() => {
        setBrowser(true);
    });

    const [activeIdx, setActiveIdx] = useState(0);
    const { allStrapiActivity: { edges } } =
        useStaticQuery(graphql`
query activitesList {
    allStrapiActivity(
        sort: {
            fields: [date]
            order: DESC
        }
    ) {
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
                activity_types {
                    name
                }
            }
        }
    }
}
        `) as QueryResult['data'];

    const slides = groupOf(itemsPerGrid, ...edges).map((group, j) => {

        return (
            <CarouselItem className='my-4' key={j}>
                <Container>
                    <Row noGutters>
                        {
                            isBrowser && group.map(({ node }, idx) => (
                                <Col
                                    md="4"
                                    key={idx}
                                    className={styles.slideContainer}
                                >
                                    {
                                        React.createElement(
                                            Animated,
                                            {
                                                animationIn: "fadeIn",
                                                animationOut: "fadeOut",
                                                isVisible: true,
                                                animationInDelay: idx * 150,
                                                animationInDuration: 500
                                            },
                                            [

                                                <a className={`${styles.slide} m-1`} href="#">
                                                    <img
                                                        src={node.Cover.file.publicURL}
                                                        alt={node.Cover.captions}
                                                        className={styles.slideCover}
                                                    />
                                                    <h5 className={styles.slideTitle}>{node.title}</h5>

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

                                                    <div className={styles.slideTagContainer}>
                                                        <span className={`${styles.slideTag} badge badge-dark`}>
                                                            {node.activity_types[0].name}
                                                        </span>
                                                    </div>
                                                </a>
                                            ]

                                        )
                                    }
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
            <Container>
                <h2 className="text-center mb-4 decorated">
                    <span>Highlights</span>
                </h2>
            </Container>
            <Carousel
                next={next}
                previous={prev}
                activeIndex={activeIdx}
                className={`pb-4 ${styles.carousel}`}
                slide={false}
                interval={false}
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