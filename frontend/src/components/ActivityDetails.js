import React, { useState, useEffect } from "react"
import { Col, Row, Table } from "react-bootstrap"
import axios from "axios"

const ActivityDetails = () => {
  const [activityData, setActivityData] = useState([])

  useEffect(() => {
    async function fetchData() {
      let { data } = await axios.get("http://localhost:4000/activity")

      let Data = data
      setActivityData(Data)
    }
    fetchData()
  }, [])

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
              {activityData.map((item, i) => (
                <tr key={i}>
                  <td>{item.name}</td>
                  <td>{item.time}</td>
                  <td>{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Col>
    </>
  )
}

export default ActivityDetails
