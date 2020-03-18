import React from 'react';
import * as styles from './styles.module.scss';

export enum Type {
    lightOverDark,
    darkOverGray,
    darkOverWhite,
}

const Style = {
    [Type.lightOverDark]: styles.lightOverDark,
    [Type.darkOverGray]: styles.darkOverGray,
    [Type.darkOverWhite]: styles.darkOverWhite,
}

type Props = {
    type: Type
} & React.HTMLAttributes<HTMLDivElement>;

export default (props: Props) => {
    const className = `clearfix py-5 ${Style[props.type]} ${props.className ?? ''}`
    const { className: _, ...rest } = props;

    return (
        <section className={className} {...rest} />
    );
}