/// <reference path="query.d.ts" />
import { Outcome } from 'ProjectDescriptionExcerpt';

import React from 'react';
import { Row, Col, Container, Button } from "reactstrap";

import * as styles from './styles.module.scss';


const AnimationDuration = 1000; // in miliseconds
const WaitDuration = 4000; // time spent static (for readability)

type Props = {
    outcome: Outcome
}

export default ({ outcome }: Props) => {
    return (
        <div style={{
            backgroundImage: `url("${outcome.slider_background.publicURL}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "4rem 0"
        }}
            className={styles.slide}>
            <Container>
                <Row xs={2} className={styles.slideRow}>
                    {/* Outcome image */}
                    <Col className={styles.imageContainer}>
                        <div>
                            <img className="outcome-slide-cover" src={outcome.cover.publicURL} />
                        </div>
                    </Col>

                    {/* Outcome Text */}
                    <Col>
                        <div className={`outcome-slide-text ${styles.textContainer}`}>
                            <h2>{outcome.title}</h2>
                            {/* <p>
                                {outcome.body}
                                <br />
                                <br />
                                <Button>Read More</Button>
                            </p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

// In and Out animations hence multiplying AnimationDuration by 2
export const animationDuration = () => AnimationDuration * 2 + WaitDuration