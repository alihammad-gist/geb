import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalProps } from 'reactstrap';
import { Item } from '.';
import { Truncate } from '../text';
import { MdFileDownload } from 'react-icons/md';
import { Report } from './query';

type props = {
    isOpen: ModalProps['isOpen'],
    toggle: () => void
    report: Report
}

export default ({
    isOpen,
    toggle,
    report
}: props) => {
    return (
        <Modal size='lg' isOpen={isOpen} toggle={toggle} >
            <ModalHeader toggle={toggle}>
                <Truncate
                    text={report.title}
                    tag='span'
                    max={65}
                    expandable={false}
                />
            </ModalHeader>
            <ModalBody>
                <Item report={report} truncateSummary={true} excludeTitle={false} />
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" href={report.document.publicURL} tag='a' target="_blank">
                    <span className="icon-text">
                        <MdFileDownload size='1.3rem' />
                        <span>&nbsp;
                                Download PDF ({
                                (report.document.size / 1000000).toPrecision(2)
                            } MB)
                            </span>
                    </span>
                </Button>
            </ModalFooter>
        </Modal>

    );
}