const express = require("express")
const employeeData = require("../model/employee.js")
const employeeRouter = express.Router()

employeeRouter.post("/", function (req, res) {
  const details = {
    name: req.body.name,
    designation: req.body.designation,
    officetime: req.body.officeTime,
    dayoff: req.body.dayOff,
  }

  const employees = new employeeData(details)
  employees.save()

  // console.log(req.body.dayoff)
})

employeeRouter.get("/", async (req, res) => {
  const employeedata = await employeeData.find()
  res.send(employeedata)
})

module.exports = employeeRouter
