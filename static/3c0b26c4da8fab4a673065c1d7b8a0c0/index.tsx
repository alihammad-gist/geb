import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { QueryResult } from '../query';
import Navigator from './navigator';
import Viewer from './viewer';
import { Container } from 'reactstrap';
import * as styles from './styles.module.scss';
import { Section } from '../../layout';
import { Type } from '../../layout/section';

export default () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const data = useStaticQuery(graphql`
query teamExplorer {
    allStrapiTeamMember {
        edges {
            node {
                name
                Image {
                    file {
                        publicURL
                    }
                    caption
                }
                about
                remarks
                job_title
                job_desc
            }
        }
    }
} 
    `) as QueryResult;

    return (
        <Section type={Type.darkOverWhite} className={styles.section}>
            <Container className={styles.memberViewerContainer}>
                <Viewer member={data.allStrapiTeamMember.edges[activeIdx].node} />
            </Container>
            <Container className={styles.navigatorContainer}>
                <Navigator
                    members={data.allStrapiTeamMember.edges}
                    setActiveIdx={setActiveIdx}
                />
            </Container>
        </Section>
    );
}