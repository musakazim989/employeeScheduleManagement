import React from "react"
import { Card, ListGroup, Col } from "react-bootstrap"
import { Link } from "react-router-dom"

const LeftSideBar = () => {
  return (
    <>
      <Col lg={3}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="images/1.jpg" />
          <Card.Body>
            <Card.Text>Name: Musa Kazim</Card.Text>
            <Card.Text>Designation: Musa Kazim</Card.Text>
            <Card.Text>Office Time: Musa Kazim</Card.Text>
            <Card.Text>Day Off: Musa Kazim</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <Link to="/employeelist">
              <ListGroup.Item action>Employee List</ListGroup.Item>
            </Link>
            <Link to="/todaysclass">
              <ListGroup.Item action>Todays Class</ListGroup.Item>
            </Link>
            <Link to="/postactivity">
              <ListGroup.Item action>Post Activity</ListGroup.Item>
            </Link>
            <Link to="/activitydetails">
              <ListGroup.Item action>Activity Details</ListGroup.Item>
            </Link>
            <ListGroup.Item action>Apply for Leave</ListGroup.Item>
            <ListGroup.Item action>Late List</ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </>
  )
}

export default LeftSideBar
