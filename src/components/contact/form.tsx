import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { FaEnvelope, FaExternalLinkAlt, FaHeading, FaUser } from 'react-icons/fa';
import { Button, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, FormFeedback } from 'reactstrap';
import { DefaultTooltip } from '../text';
import { ErrorFeedback, hasError } from '../../lib/errors';

export default () => {

    const { register, handleSubmit, errors } = useForm<{
        name: string
        email: string
        subject: string
        body: string
    }>({ mode: 'onBlur' });

    const formRef = useRef(null);

    const onSubmit = handleSubmit((d, e) => {
        const f = document.createElement('form');
        const action = `mailto:gebundp@gmail.com?subject=${
            encodeURIComponent(d.subject)
            }&body=${
            encodeURIComponent(`${d.body}


${d.name}
${d.email}`)}`;

        f.style.display = 'none';
        f.target = '_blank';
        f.action = action;
        f.method = 'POST';

        document.body.appendChild(f);
        f.submit();
        document.body.removeChild(f);
    });


    return (
        <>
            <Form
                action={`mailto:gebundp@gmail.com`}
                method="POST"
                encType="text/plain"
                target="_blank"
                onSubmit={onSubmit}
                ref={formRef}
            >
                <FormGroup>
                    <Label for="senderName">Name <sup className="text-danger">*</sup></Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <FaUser />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            innerRef={register({
                                required: true,
                            })}
                            invalid={hasError(errors, 'name')}
                            id="senderName" type="text" name="name" placeholder="John Smith"
                        />
                        <ErrorFeedback
                            name='name'
                            errors={errors}
                            label='Name'
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="senderEmail">Email <sup className="text-danger">*</sup></Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <FaEnvelope />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            innerRef={register({
                                required: true,
                            })}
                            invalid={hasError(errors, 'email')}
                            id="senderEmail" type="email" name="email" placeholder="you@email.com" />
                        <ErrorFeedback
                            errors={errors}
                            name='email'
                            label='Email Address'
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="subject">Subject <sup className="text-danger">*</sup></Label>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <FaHeading />
                            </InputGroupText>
                        </InputGroupAddon>
                        <Input
                            innerRef={register({
                                required: true,
                            })}
                            invalid={hasError(errors, 'subject')}
                            id="subject" type="text" name="subject" placeholder="Subject heading" />
                        <ErrorFeedback
                            errors={errors}
                            name='subject'
                            label='Subject Heading'
                        />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <Label for="message">Message <sup className="text-danger">*</sup></Label>
                    <Input
                        innerRef={register({
                            required: true,
                            minLength: 15
                        })}
                        id="message"
                        type="textarea"
                        name="body"
                        style={{
                            minHeight: "250px"
                        }}
                        placeholder="Write your message here!"
                        invalid={hasError(errors, 'body')}
                    />
                    <ErrorFeedback
                        errors={errors}
                        name='body'
                        label="Message"
                    />
                </FormGroup>
                <Button
                    type="submit"
                    value="Send"
                    className="float-right"
                    id="contact-form-send"
                >
                    Send
					<span className="svg-icon svg-baseline ml-2">
                        <FaExternalLinkAlt />
                    </span>
                </Button>
                <DefaultTooltip
                    target="contact-form-send"
                >
                    This will open your email client.
                </DefaultTooltip>
            </Form>
        </>
    );
}