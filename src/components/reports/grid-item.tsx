import React, { useState } from 'react';
import { Report } from './query';
import { Modal, ModalHeader, ModalFooter, Button, ModalBody } from 'reactstrap';
import { Item } from '.';
import * as styles from './styles.module.scss';
import { MdClose, MdFileDownload } from 'react-icons/md';
import { Truncate } from '../text';

export default ({ report }: { report: Report }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <a
                className={styles.reportGridItem}
                onClick={(e) => {
                    e.preventDefault();
                    toggle();
                }}
            >
                <img src={report.cover.publicURL} className='img-fluid' />
            </a >
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
                    <Button color="accent" href={report.document.publicURL} tag='a' target="_blank">
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
        </>
    );
}