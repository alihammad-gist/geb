import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, ModalProps, Form, InputGroup, InputGroupAddon, Input, InputGroupText } from 'reactstrap';
import { Item } from '.';
import { Truncate, DefaultTooltip } from '../text';
import { MdFileDownload, MdEmail, MdSend } from 'react-icons/md';
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
                    text='Send a Download request for this report'
                    tag='span'
                    max={65}
                    expandable={false}
                />
            </ModalHeader>
            <ModalBody>
                <Item report={report} truncateSummary={true} excludeTitle={false} />
            </ModalBody>
            <ModalFooter>
                <Form>
                    <InputGroup>
                        <InputGroupAddon addonType='prepend'>
                            <InputGroupText>
                                <MdEmail />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input type='email' placeholder='youremail@domain.com' style={{ width: '300px' }} id='email_for_report' />
                        <InputGroupAddon addonType='append'>
                            <Button color="secondary" type='button'>
                                <span className="icon-text">
                                    <MdSend size='1.3rem' />
                                    <span>&nbsp; Send</span>
                                </span>
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Form>
                {/* <DefaultTooltip
                    target='email_for_report'
                >
                    Your email address goes here
                </DefaultTooltip> */}
            </ModalFooter>
        </Modal>

    );
}