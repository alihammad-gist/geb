
import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalProps, Media } from 'reactstrap';
import { Truncate } from '../text';
import { MdFileDownload } from 'react-icons/md';

type props = {
    isOpen: ModalProps['isOpen'],
    toggle: () => void
    publication: ExternalPublication
}

export default ({
    isOpen,
    toggle,
    publication
}: props) => {
    return (
        <Modal size='lg' isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>
                <Truncate
                    text={`Download Confirmation.`}
                    tag='span'
                    max={65}
                    expandable={false}
                />
            </ModalHeader>
            <ModalBody>
                <Media
                    className="p-2"
                >
                    <Media left className="mr-2">
                        <img
                            className="img-fluid img-thumbnail rounded-lg"
                            style={{ maxWidth: "250px" }}
                            src={publication.cover.publicURL}
                            alt={`Cover image for ${publication.title}`}
                        />

                    </Media>
                    <Media body>
                        <h2 className="h5">{publication.title}</h2>
                    </Media>
                </Media>
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" href={publication.document.publicURL} tag='a' target="_blank">
                    <span className="icon-text">
                        <MdFileDownload size='1.3rem' />
                        <span>&nbsp;
                                Download PDF ({
                                (publication.document.size / 1000000).toPrecision(2)
                            } MB)
                            </span>
                    </span>
                </Button>
            </ModalFooter>
        </Modal>

    );
}