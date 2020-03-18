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
                        <h4>Title</h4>
                        <p>{report.title}</p>
                    </>
                    : null}
                <h4>Summary</h4>
                <Truncate
                    max={350}
                    text={report.summary}
                    expandable={true}
                />

                <h4>Publishing Date</h4>
                <p>{report.publishing_date}</p>
                {/* <Table borderless>
                    <tbody>
                        {!excludeTitle ?
                            <tr>
                                <th>Title</th>
                                <td>{report.title}</td>
                            </tr>
                            : null}
                        <tr>
                            <th>Summary</th>
                            <td>
                                />
                            </td>
                        </tr>
                        <tr>
                            <th style={{
                                width: "25%",
                            }}>Publishing Date</th>
                            <td>{formateDate(report.publishing_date)}</td>
                        </tr>
                    </tbody>
                </Table> */}
            </Col>
        </Row>
    );
}