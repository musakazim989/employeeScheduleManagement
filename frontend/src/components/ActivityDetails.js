import React from "react"
import { Col, Row, Form, Button, Card, Table } from "react-bootstrap"

const ActivityDetails = () => {
  return (
    <>
      <Col lg={9} className="mt-5">
        <Row className="p-2 mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Time</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Col>
    </>
  )
}

export default ActivityDetails
