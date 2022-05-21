const express = require("express")
const PostActivityData = require("../model/postActivity.js")
const PostActivityRoute = express.Router()

PostActivityRoute.post("/", (req, res) => {
  const details = {
    name: req.body.name,
    time: req.body.time,
    activity: req.body.activity,
  }

  const postActivityDetails = new PostActivityData(details)
  postActivityDetails.save()

  console.log(req.body)
})

PostActivityRoute.get("/", async (req, res) => {
  const activityData = await PostActivityData.find()
  res.send(activityData)
})

module.exports = PostActivityRoute
