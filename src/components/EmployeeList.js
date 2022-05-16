import React from "react"
import { Col, Row, Form, Button, Card, Table } from "react-bootstrap"

const EmployeeList = () => {
  return (
    <>
      <Col lg={9} className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col lg={8}>
            <Card className="p-3 ">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                </Row>
                <Button variant="danger" type="submit" className="w-100">
                  Submit
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
        <Row className="p-2 mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Office Time</th>
                <th>Day Off</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@fat</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </Table>
        </Row>
      </Col>
    </>
  )
}

export default EmployeeList
