import React, { useState, useEffect } from "react"
import { Col, Row, Form, Button, Card, Table } from "react-bootstrap"
import axios from "axios"

const TodaysClass = () => {
  let [batch, setBatch] = useState("")
  let [time, setTime] = useState("")
  let [room, setRoom] = useState("")
  let [classData, setClassData] = useState([])

  console.log(classData)

  let hadleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/todayclass/", {
      batch: batch,
      time: time,
      room: room,
    })
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:4000/todayclass/")
      let classdata = data
      setClassData(classdata)
      // console.log(classdata)
    }
    fetchData()
  }, [])

  return (
    <>
      <Col lg={9} className="mt-5">
        <Row className="d-flex justify-content-center">
          <Col lg={8}>
            <Card className="p-3 ">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="text"
                      placeholder="Batch "
                      onChange={(e) => setBatch(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="text"
                      placeholder="Time"
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="text"
                      placeholder="Room"
                      onChange={(e) => setRoom(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Button
                  variant="danger"
                  type="submit"
                  className="w-100"
                  onClick={hadleSubmit}
                >
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
                <th>Batch </th>
                <th>Time</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {classData.map((item, i) => (
                <tr key={i}>
                  <td>{item.batch}</td>
                  <td>{item.time}</td>
                  <td>{item.room}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Col>
    </>
  )
}

export default TodaysClass
