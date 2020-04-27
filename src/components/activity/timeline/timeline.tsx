import dayjs from 'dayjs';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from 'reactstrap';
import { Section, SectionType } from '../../layout';
import { Activity, QueryResult } from '../query';
import Item from './item';
import * as styles from './styles.module.scss';

export default () => {
    const activities = useStaticQuery(graphql`
        query activityListing {
            allStrapiActivity(sort: {fields: date, order: DESC}) {
                edges {
                node {
                    date
                    Cover {
                    caption
                    file {
                        publicURL
                    }
                    }
                    title
                    venue
                    description
                    activity_types {
                        name
                    }
                }
                }
            }
        }
    `) as QueryResult['data'];

    return (
        <Section type={SectionType.darkOverGray}>
            <h3 className="text-center mb-0 pb-1">
                Activities
            </h3>
            <Container tag="ul" className={styles.timeline}>

                <li
                    key="timeline-bar"
                    className={`
                        ${styles.timelineBar}
                        d-none d-md-block
                    `}
                />

                {activities.allStrapiActivity.edges.map(({ node }, idx) => {
                    return (
                        <Item
                            key={idx}
                            activity={node}
                            idx={idx}
                        />
                    )
                })}
            </Container>
        </Section>
    );

}

type yearObj = {
    year: string,
    activities: Activity[],
}

function groupByYear(activities: QueryResult['data']) {
    let yearly: yearObj[] = [];

    const getYearObj = (year: string) => {
        let obj = yearly.reduce<yearObj | null>((old, curr) => {
            if (curr.year === year) {
                return curr;
            }

            return old;
        }, null);

        if (obj == null) {
            obj = { year: year, activities: [] }
            yearly.push(obj);
        }

        return obj;
    }

    activities.allStrapiActivity.edges.forEach(({ node: a }) => {
        getYearObj(dayjs(a.date).format("YYYY"))
            .activities
            .push(a);
    });

    return yearly;
}