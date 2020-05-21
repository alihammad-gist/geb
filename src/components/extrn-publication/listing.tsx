import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Row, Col, Media } from 'reactstrap';
import { ExtrnPublicationModal } from '.';
import * as styles from './styles.module.scss';

export default () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const [isOpen, setIsOpen] = useState(false);

    /**
     * 
     * @param idx active external publication number
     */
    const openExtrnPublication = (idx: number) => {
        setActiveIdx(idx);
        toggle(); // assumes the modal was closed when this function was called.
    }

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const data = useStaticQuery(graphql`
        query listExternalPublications {
            allStrapiExternalPublication {
                edges {
                    node {
                        cover {
                        publicURL
                        size
                        }
                        id
                        title
                        document {
                        size
                        publicURL
                        }
                    }
                }
            }
        }

    `) as QueryList;

    return (
        <>
            <Row noGutters>
                {data.allStrapiExternalPublication.edges.map(({ node }, idx) => {
                    return (
                        <Col md="6" key={idx}>
                            <Media
                                className={`
                                    p-2 
                                    d-flex-block
                                    ${styles.item}
                                `}
                                tag="a"
                                href="#"
                                onClick={() => openExtrnPublication(idx)}
                            >
                                <Media left className="mr-2">
                                    <img
                                        className="img-fluid img-thumbnail rounded-lg"
                                        style={{ maxWidth: "200px" }}
                                        src={node.cover.publicURL}
                                        alt={`Cover image for ${node.title}`}
                                    />

                                </Media>
                                <Media body>
                                    <h4 className="h6">{node.title}</h4>
                                </Media>
                            </Media>
                        </Col>
                    );
                })}
            </Row>
            <ExtrnPublicationModal
                isOpen={isOpen}
                toggle={toggle}
                publication={data.allStrapiExternalPublication.edges[activeIdx].node}
            />
        </>
    );
}