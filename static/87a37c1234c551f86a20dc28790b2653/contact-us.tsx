import React from 'react';
import { Layout, Section, SectionType } from '../components/layout';
import Head from '../components/head';
import { Container, Row, Col } from 'reactstrap';
import { RoadMap, Address, ContactForm } from '../components/contact';

export default () => {
    return (
        <Layout>
            <Head title="Contact Us" />
            <Section type={SectionType.darkOverWhite}>
                <Container>
                    <h2 className="text-center mb-4">Contact Us</h2>
                    <Row>
                        <Col md="6">
                            <RoadMap />
                            <Address />
                        </Col>
                        <Col md="6">
                            <ContactForm />
                        </Col>
                    </Row>
                </Container>
            </Section>
        </Layout>
    );
}