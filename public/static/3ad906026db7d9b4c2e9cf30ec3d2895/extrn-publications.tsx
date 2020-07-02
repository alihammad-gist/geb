import React from 'react';
import { Layout, Section, SectionType } from '../../components/layout';
import Head from '../../components/head';
import { Container, Row, Col } from 'reactstrap';
import { WorkMenu } from '../../components/menu';
import { ExtrnPublicationListing } from '../../components/extrn-publication';

export default () => {
    return (
        <Layout>
            <Head title="Important Publications" />
            <Section type={SectionType.darkOverWhite}>
                <Container>
                    <Row>
                        <Col md="3">
                            <WorkMenu />
                        </Col>
                        <Col md="9">
                            <ExtrnPublicationListing />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Layout>

    );
}