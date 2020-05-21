import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Head from '../../components/head';
import { Layout, Section, SectionType } from '../../components/layout';
import { WorkMenu } from '../../components/menu';
import { SingleSuccessStory } from '../../components/success-story';
import { SuccessStoryBanner } from '../../components/banner';

export default () => {
    return (
        <Layout>
            <Head title="Important Publications" />
            <SuccessStoryBanner />
            <Section type={SectionType.darkOverWhite}>
                <Container>
                    <Row>
                        <Col md="3">
                            <WorkMenu />
                        </Col>
                        <Col md="9">
                            <SingleSuccessStory />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Layout>

    );
}