import React, { useState } from 'react';
import { ReportModal } from '.';
import { Report } from './query';
import * as styles from './styles.module.scss';
import { DefaultTooltip } from '../text';

export default ({ report }: { report: Report }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <a
                id={`report_grid_${report.id}`}
                className={styles.reportGridItem}
                onClick={(e) => {
                    e.preventDefault();
                    toggle();
                }}
            >
                <img src={report.cover.publicURL} className='img-fluid' />
            </a >
            <DefaultTooltip
                target={`report_grid_${report.id}`}
                placement="top"
            >
                {report.title}
            </DefaultTooltip>
            <ReportModal
                isOpen={isOpen}
                toggle={toggle}
                report={report}
            />
        </>
    );
}