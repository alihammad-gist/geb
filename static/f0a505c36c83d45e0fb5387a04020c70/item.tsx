import dayjs from 'dayjs';
import React, { useState } from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { MdPlace } from 'react-icons/md';
import { Col, Media, Row } from 'reactstrap';
import { Activity } from '../query';
import * as styles from './styles.module.scss';
import { Truncate } from '../../text';
import { Link } from 'gatsby';
import { readableLink } from '../../text/links';

enum Orien {
    Left,
    Right,
}

type props = {
    activity: Activity
    idx: number
}

export default ({ activity, idx }: props) => {

    const [active, setActive] = useState(false);
    const leftAlign = idx % 2 == 0;

    return (
        <Row
            tag="li"
            key={idx}
            className={`mb-4 ${active ? styles.entryActive : styles.entry}`}
        >
            <Col
                md="6"
                className={`
                    ${leftAlign ? 'order-md-1 justify-content-end' : 'order-md-2'}
                    d-none d-md-flex align-items-start
                    mt-1
                    ${styles.dateContainer}
                    ${leftAlign ? styles.leftAligned : styles.rightAligned}
                `}
            >
                <h5
                    className={`
                        d-inline-block
                        p-1
                        px-3
                        h6
                        mx-2
                        ${styles.date}
                    `}
                >
                    {dayjs(activity.date).format("MMM Do, YYYY")}
                </h5>
            </Col>

            <Col
                md="6"
                className={`
                    ${leftAlign ? 'order-md-2' : 'order-md-1'}
                `}
            >
                <ScrollAnimation
                    animateIn="fadeIn"
                    animateOnce
                >
                    <Link
                        to={`/media/activities/${readableLink(activity.title)}`}
                        className={`
                            ${styles.title}
                            ${leftAlign ? 'text-md-left' : 'text-md-right'}
                            rounded
                        `}

                        onMouseOver={() => setActive(true)}
                        onMouseOut={() => setActive(false)}
                        onFocus={() => setActive(true)}
                        onBlur={() => setActive(false)}
                    >
                        <div className="d-md-none">
                            <h6 className={`font-weight-normal`}>
                                {dayjs(activity.date).format("MMM Do, YYYY")}
                            </h6>
                        </div>
                        <h3 className="h5 text-primary">
                            {activity.title}
                        </h3>
                        <Media className="clearfix align-items-stretch">
                            <div
                                className={`
                                    position-relative
                                    ${leftAlign ? 'mr-2 order-md-1' : 'ml-2 order-md-2'}
                                `}
                            >
                                <img
                                    src={activity.Cover.file.publicURL}
                                    alt={activity.Cover.caption}
                                    className='float-left img-fluid'
                                    style={{ maxWidth: '160px' }}
                                />
                                <div className={styles.floatingTag}>
                                    <span className="badge badge-dark">
                                        {activity.activity_types[0]?.name}
                                    </span>
                                </div>

                            </div>
                            <Media
                                body
                                className={`
                                d-flex flex-row flex-wrap
                                    ${leftAlign ? 'order-md-2' : 'order-md-1'}
                                `}
                            >
                                <Truncate
                                    text={activity.description}
                                    max={150}
                                    expandable={false}
                                    tag='p'
                                    style={{ fontSize: '0.85rem' }}
                                />
                                <p className="m-0 w-100 align-self-end" style={{ fontSize: '.7rem' }}>
                                    {leftAlign ? null : activity.venue}
                                    <span className="svg-icon svg-baseline mx-1" style={{ fontSize: "0.8rem" }}>
                                        <MdPlace />
                                    </span>
                                    {leftAlign ? activity.venue : null}
                                </p>
                            </Media>
                        </Media>
                    </Link>
                </ScrollAnimation>
            </Col>
        </Row>
    );
}