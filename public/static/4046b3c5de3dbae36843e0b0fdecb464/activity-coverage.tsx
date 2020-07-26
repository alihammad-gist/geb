import React, { useState } from "react"
import { Activity } from "../activity/query"
import {
  Row,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  Badge,
} from "reactstrap"
import { Truncate } from "../text"
import { formateDate } from "../text/formating"
import { getPublisher } from "./util"

type props = {
  activity: Activity
  publishers: NewsPublisher[]
  filterId?: number | null
}

export default ({ activity, publishers, filterId = null }: props) => {
  return (
    <div className="py-2 border-bottom">
      <h6 className="text-uppercase">{activity.title}</h6>
      <p className="">
        <Badge>{formateDate(activity.date)}</Badge>
      </p>
      <Row noGutters>
        {activity.press_coverages
          .filter(p => (filterId ? p.news_publisher === filterId : true))
          .map((press, idx) => (
            <Coverage
              press={press}
              key={idx}
              activity={activity}
              publisher={getPublisher(press.news_publisher ?? 0, publishers)}
            />
          ))}
      </Row>
    </div>
  )
}

type CoverageProps = {
  press: PressCoverage
  activity: Activity
  publisher: NewsPublisher
}

const Coverage = ({ press, activity, publisher }: CoverageProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <Col md="3">
      <a
        href="#"
        className="img-thumbnail d-block m-1"
        style={{
          height: "120px",
          overflow: "hidden",
        }}
        onClick={toggle}
      >
        <img
          className="img-fluid"
          src={press.prints[0].localFile.childImageSharp.fluid.src}
        />
      </a>
      <Modal isOpen={isOpen} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>
          <Truncate text={activity.title} max={50} expandable={false} />
        </ModalHeader>
        <ModalBody>
          <img
            src={press.prints[0].localFile.publicURL}
            className="img-fluid d-block mx-auto"
          />
          <Table borderless striped size="sm" className="mt-2">
            <tbody>
              <tr>
                <th scope="row" style={{ minWidth: "150px" }}>
                  Event Title
                </th>
                <td>{activity.title}</td>
              </tr>
              <tr>
                <th scope="row">Event Date</th>
                <td>{formateDate(activity.date)}</td>
              </tr>
              <tr>
                <th scope="row">News Publisher</th>
                <td>
                  {publisher.website ? (
                    <a href={publisher.website} target="_blank">
                      {publisher.name}
                    </a>
                  ) : (
                    publisher.name
                  )}
                </td>
              </tr>
              {press.link && (
                <tr>
                  <th scope="row">Story Link</th>
                  <td>
                    <a href={press.link} target="_blank">
                      {press.link}
                    </a>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </ModalBody>
      </Modal>
    </Col>
  )
}
