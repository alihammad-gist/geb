import React from 'react';
import * as styles from './styles.module.scss';

export enum Type {
    lightOverDark,
    darkOverGray,
    darkOverWhite,
    darkOverAltGray,
}

const Style = {
    [Type.lightOverDark]: styles.lightOverDark,
    [Type.darkOverGray]: styles.darkOverGray,
    [Type.darkOverWhite]: styles.darkOverWhite,
    [Type.darkOverAltGray]: styles.darkOverAltGray,
}

type Props = {
    type: Type
} & React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
    const className = `${Style[props.type]} ${props.className ? props.className : ''} clearfix py-4 `
    const { className: _, ...rest } = props;

    return (
        <section className={className} {...rest} />
    );
}