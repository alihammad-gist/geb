import React from 'react';
import { Report } from './query';
import { Row, Col, Table, ListGroup, ListGroupItem } from 'reactstrap';
import { Truncate } from '../text';
import { formateDate } from '../text/formating';

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
                <ListGroup flush>
                    <ListGroupItem>
                    </ListGroupItem>
                </ListGroup>
            </Col>
            <Col md="8">
                {!excludeTitle ?
                    <>
                        <h4 className="text-info">Title</h4>
                        <p>{report.title}</p>
                    </>
                    : null}
                <h4 className="text-info">Summary</h4>
                <Truncate
                    max={350}
                    text={report.summary}
                    expandable={true}
                />

                <h4 className="text-info">Publishing Date</h4>
                <p>{formateDate(report.publishing_date)}</p>
            </Col>
        </Row>
    );
}