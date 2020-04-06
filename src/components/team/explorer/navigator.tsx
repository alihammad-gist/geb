import React, { PropsWithoutRef, useState, useEffect } from 'react';
import { QueryResult } from '../query';
import styles from './styles.module.scss';
import Controls from './controls';

type Props = PropsWithoutRef<{
    members: QueryResult['allStrapiTeamMember']['edges']
    setActiveIdx: (idx: number) => void
}>

let Carousel: any = null;
let SpringConfig: any = null;

let carouselProps = {
    offsetRadius: 3,
    showNavigation: false,
};

export default ({ members, setActiveIdx }: Props) => {

    const [_, rerender] = useState(false);
    const [goToSlide, setGoToSlide] = useState(0);

    useEffect(() => {
        if (!Carousel) {
            Carousel = require('react-spring-3d-carousel').default;
            SpringConfig = require('react-spring').config;
            rerender(true);
        }
    })

    const next = () => {
        let idx = 0

        if (goToSlide + 1 < members.length) {
            idx = goToSlide + 1;
        }

        setGoToSlide(idx);
        setActiveIdx(idx);
    }

    const prev = () => {
        let idx = members.length - 1;

        if (goToSlide > 0) {
            idx = goToSlide - 1;
        }

        setGoToSlide(idx);
        setActiveIdx(idx);
    }

    const getSlideClickHandler = (idx: number) => () => {
        setGoToSlide(idx);
        setActiveIdx(idx);
    }

    return (
        Carousel ?
            <>
                <div className={styles.carouselContainer}>
                    <Carousel
                        {...carouselProps}
                        slides={members.map(({ node }, idx) => {
                            return {
                                key: idx,
                                content: (
                                    <div
                                        className={`${styles.slide} ${goToSlide == idx ? styles.slideActive : ''}`}
                                        onClick={getSlideClickHandler(idx)}
                                    >
                                        <img
                                            className={`rounded-circle img-fluid img-thumbnail`}
                                            src={node.Image.file.publicURL}
                                        />
                                        <img
                                            className={`rounded-circle img-fluid img-thumbnail ${styles.slideReflection}`}
                                            src={node.Image.file.publicURL}
                                        />
                                    </div>
                                )
                            };
                        })}
                        goToSlide={goToSlide}
                        animationConfig={SpringConfig.gentle}
                    />
                </div>
                <Controls next={next} prev={prev} />
            </>
            : null
    );
}