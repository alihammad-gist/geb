import React, { PropsWithChildren } from 'react';

import * as styles from './styles.module.scss';

export default (props: PropsWithChildren<{}>) => {
    return (
        <h2 className={`${styles.heading} my-4`} {...props} />
    );
}