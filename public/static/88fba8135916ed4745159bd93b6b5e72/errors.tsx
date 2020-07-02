import React from 'react';
import { FormFeedback } from 'reactstrap';
import { FieldErrors, FieldError } from 'react-hook-form';

type props<E> = {
    errors: FieldErrors<E>
    name: keyof E
    label?: string
}

export function ErrorFeedback<E>({ name, errors, label = '' }: props<E>) {
    return (
        <FormFeedback valid={!hasError(errors, name)}>
            {errMsg(errors, name, label)}
        </FormFeedback>
    );
}

export function hasError<E>(errors: FieldErrors<E>, name: keyof E): boolean {
    return errors[name] ? true : false;
}

export function errMsg<E>(errors: FieldErrors<E>, name: keyof E, label: string = ''): string | null {
    if (typeof errors[name] === 'undefined') {
        return null;
    }

    if (label === '' && typeof name === 'string') {
        label = name;
    }

    const err = errors[name] as FieldError;

    switch (err.type) {
        case 'required':
            return `${label} is required field and cannot be left empty.`;
        case 'minLength':
            return `${label} is too short.`;
        default:
            return `Provided value is not a valid ${label}`;
    }
}
