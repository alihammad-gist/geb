import React, { PropsWithChildren } from 'react';

import * as styles from './styles.module.scss';

export default (props: PropsWithChildren<{}>) => {
    return (
        <div className={`${styles.texture} clearfix`} {...props} />
    );
};