import React from "react"
import { Col, Row, Form, Button, Card, Table } from "react-bootstrap"

const PostActivity = () => {
  return (
    <>
      <Col lg={9} className="mt-5">
        <Card className="p-3 ">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control type="text" placeholder="Activity Name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control type="text" placeholder="Hour Take" />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Activity Details"
                />
              </Form.Group>
            </Row>
            <Button variant="danger" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </>
  )
}

export default PostActivity
