const mongoose = require("mongoose")
const { Schema } = mongoose

const classTimeData = Schema({
  batch: String,
  time: String,
  room: String,
})

const classData = mongoose.model("classdata", classTimeData)
module.exports = classData
