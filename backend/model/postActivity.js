const mongoose = require("mongoose")

const { Schema } = mongoose

const detailActivity = Schema({
  name: String,
  time: String,
  activity: String,
})

const PostActivityDetails = mongoose.model("activity", detailActivity)

module.exports = PostActivityDetails
