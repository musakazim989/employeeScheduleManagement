import React, { useState } from "react"
import { Col, Row, Form, Button, Card } from "react-bootstrap"
import axios from "axios"

const PostActivity = () => {
  const [name, setName] = useState("")
  const [time, setTime] = useState("")
  const [activity, setActivity] = useState("")

  let handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/activity", {
      name,
      time,
      activity,
    })

    console.log("click")
  }

  return (
    <>
      <Col lg={9} className="mt-5">
        <Card className="p-3 ">
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Control
                  type="text"
                  placeholder="Activity Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Control
                  type="text"
                  placeholder="Hour Take"
                  onChange={(e) => setTime(e.target.value)}
                />
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
                  onChange={(e) => setActivity(e.target.value)}
                />
              </Form.Group>
            </Row>
            <Button
              variant="danger"
              type="submit"
              className="w-100"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </>
  )
}

export default PostActivity
