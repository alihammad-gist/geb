
import { graphql, useStaticQuery } from 'gatsby';
import { SingularResult } from 'ProjectDescriptionExcerpt';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Col, Container, Row, TabContent, TabPane } from 'reactstrap';
import { Section, SectionType } from '../layout';
import OutcomeMedia from './outcome-media';
import SideNav, { DocItem, items as navItems } from './sidebar-nav';
const whereWeWork = require('./where-we-work.jpg');
import * as styles from './styles.module.scss';
import { Animated } from 'react-animated-css';

const animationIn = 'fadeIn';
const animationOut = 'slideOutRight';
const animationDelay = 100;
const animationDuration = 900;

export default () => {

    const [activeTab, setActiveTab] = useState<DocItem>('background');

    const data = useStaticQuery(graphql`
    query ProjectDocumentation {
        strapiProjectDescription {
            background
            achievements
            next
            objectives
            outcomes {
                cover {
                    publicURL
                }
                body
                title
            }
        }
    }
    `) as SingularResult;

    return (
        <Section type={SectionType.darkOverWhite}>
            <Container>
                <Row>
                    <Col md="3">
                        <SideNav
                            active={activeTab}
                            onChange={setActiveTab}
                        />
                    </Col>
                    <Col md="9">
                        <TabContent activeTab={activeTab} className="overflow-hidden">
                            {(Object.keys(navItems) as DocItem[]).map(k => {
                                switch (k) {
                                    case "locations":
                                        return (
                                            <TabPane tabId={k} key={k}>
                                                <Animated
                                                    animationIn={animationIn}
                                                    animationOut={animationOut}
                                                    animationInDelay={animationDelay}
                                                    animationInDuration={animationDuration}
                                                    isVisible={k == activeTab}
                                                >
                                                    <h2 id={k} className="mb-4 text-primary">{navItems[k]}</h2>
                                                    <img
                                                        src={whereWeWork}
                                                        className="img-fluid mx-auto d-block"
                                                    />
                                                </Animated>
                                            </TabPane>
                                        );
                                    case 'results':
                                        return (
                                            <TabPane tabId={k} key={k}
                                            >
                                                <Animated
                                                    animationIn={animationIn}
                                                    animationOut={animationOut}
                                                    animationInDelay={animationDelay}
                                                    animationInDuration={animationDuration}
                                                    isVisible={k == activeTab}
                                                >
                                                    <h2 id={k} className="mb-4 text-primary">{navItems[k]}</h2>
                                                    <ul className="p-0 m-0">
                                                        {data.strapiProjectDescription.outcomes.map((outcome, idx) => (
                                                            <OutcomeMedia
                                                                outcome={outcome}
                                                                key={idx}
                                                                num={idx + 1}
                                                            />
                                                        ))}
                                                    </ul>
                                                </Animated>
                                            </TabPane>
                                        );
                                    default:
                                        const markdown = data.strapiProjectDescription[k];
                                        return (
                                            <TabPane tabId={k} key={k}>
                                                <Animated
                                                    animationIn={animationIn}
                                                    animationOut={animationOut}
                                                    animationInDelay={animationDelay}
                                                    animationInDuration={animationDuration}
                                                    isVisible={k == activeTab}
                                                >
                                                    <h2 id={k} className="mb-4 text-primary">{navItems[k]}</h2>
                                                    <ReactMarkdown
                                                        className="text-justify"
                                                        source={markdown}
                                                    />
                                                </Animated>
                                            </TabPane>
                                        );
                                }
                            })}
                        </TabContent>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}