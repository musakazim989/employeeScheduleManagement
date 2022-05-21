import React, { useState, useEffect } from "react"
import { Col, Row, Form, Button, Card, Table } from "react-bootstrap"
import axios from "axios"

const EmployeeList = () => {
  const [name, setName] = useState("")
  const [designation, setDesignation] = useState("")
  const [officeTime, setOfficeTime] = useState("")
  const [dayOff, setDayOff] = useState("")
  const [employeeList, setEmployeeList] = useState([])

  let handleSubmit = (e) => {
    e.preventDefault()
    axios.post("http://localhost:4000/", {
      name: name,
      designation: designation,
      officeTime: officeTime,
      dayOff: dayOff,
    })
  }

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("http://localhost:4000/")
      let employeelist = data
      setEmployeeList(employeelist)
      console.log(employeelist)
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
                      type="email"
                      placeholder="Name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="text"
                      placeholder="Designation"
                      onChange={(e) => setDesignation(e.target.value)}
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control
                      type="text"
                      placeholder="Office Time"
                      onChange={(e) => setOfficeTime(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control
                      type="text"
                      placeholder="Day Off"
                      onChange={(e) => setDayOff(e.target.value)}
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
        </Row>
        <Row className="p-2 mt-5">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Office Time</th>
                <th>Day Off</th>
              </tr>
            </thead>
            <tbody>
              {employeeList.map((item, i) => (
                <tr key={i}>
                  <>
                    <td>{item.name}</td>
                    <td>{item.designation}</td>
                    <td>{item.officetime}</td>
                    <td>{item.dayoff}</td>
                  </>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Col>
    </>
  )
}

export default EmployeeList
