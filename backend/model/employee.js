const mongoose = require("mongoose")
const { Schema } = mongoose

const detailsSchema = Schema({
  name: String,
  designation: String,
  officetime: String,
  dayoff: String,
})

const employeeDetails = mongoose.model("employeedetails", detailsSchema)

module.exports = employeeDetails
