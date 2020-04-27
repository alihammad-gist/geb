import React from 'react';
import { Col, Row } from 'reactstrap';
import { Truncate } from '../text';
import { formateDate } from '../text/formating';
import { Report } from './query';

const initialSummaryLength = 350;

type Props = {
    report: Report
    truncateSummary?: boolean
    excludeTitle?: boolean
}

export default ({ report, truncateSummary = false, excludeTitle = false }: Props) => {
    return (
        <Row>
            <Col md="4">
                <img
                    src={report.cover.publicURL}
                    className="img-fluid"
                />
            </Col>
            <Col md="8">
                {!excludeTitle ?
                    <>
                        <h4 className="h5">Title</h4>
                        <p>{report.title}</p>
                    </>
                    : null}
                <h4 className="h5">Summary</h4>
                <Truncate
                    max={initialSummaryLength}
                    text={report.summary}
                    expandable={true}
                />

                <h4 className="h5">Publishing Date</h4>
                <p>{formateDate(report.publishing_date)}</p>
            </Col>
        </Row>
    );
}