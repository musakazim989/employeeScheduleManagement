import { Container, Row, Col } from "react-bootstrap"
import { Route, Routes } from "react-router-dom"
import LeftSideBar from "./components/LeftSideBar"
import TodaysClass from "./components/TodaysClass"
import EmployeeList from "./components/EmployeeList"
import PostActivity from "./components/PostActivity"
import ActivityList from "./components/ActivityList"

function App() {
  return (
    <Container className="d-flex ">
      <LeftSideBar />

      <Routes>
        <Route path="/employeelist" element={<EmployeeList />} />
        <Route path="/todaysclass" element={<TodaysClass />} />
        <Route path="/postactivity" element={<PostActivity />} />
        <Route path="/activitylist" element={<ActivityList />} />
      </Routes>
    </Container>
  )
}

export default App
