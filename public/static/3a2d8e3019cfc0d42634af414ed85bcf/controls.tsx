import React, { PropsWithoutRef } from 'react';
import styles from './styles.module.scss';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

type Props = PropsWithoutRef<{
    next: () => void,
    prev: () => void
}>

export default ({ next, prev }: Props) => {
    return (
        <div className={styles.controlsContainer}>
            <MdChevronLeft
                className={styles.controlLeft}
                onClick={prev}
            />
            <MdChevronRight
                className={styles.controlRight}
                onClick={next}
            />
        </div>
    );
}