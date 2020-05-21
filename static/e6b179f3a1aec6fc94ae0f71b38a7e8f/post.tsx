import React from 'react';
import { Section, SectionType } from '.';
import { Container, Row, Col } from 'reactstrap';


type props = React.PropsWithChildren<{
    title: string
}>

export default ({ children, title }: props) => {
    if (!Array.isArray(children) || children.length !== 2) {
        throw new Error(
            `Post layout expects exactly two children`
        );
    }

    return (
        <Section type={SectionType.darkOverWhite}>
            <Container>
                <Row>
                    <Col md='8'>
                        <h3>{title}</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md='8'>
                        {children[0]}
                    </Col>
                    <Col md='4'>
                        {children[1]}
                    </Col>
                </Row>
            </Container>
        </Section>
    );
} 