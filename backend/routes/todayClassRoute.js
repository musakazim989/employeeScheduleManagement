const express = require("express")
const todayClassData = require("../model/todayClassData.js")
const todayClassDataRouter = express.Router()

todayClassDataRouter.post("/", function (req, res) {
  const details = {
    batch: req.body.batch,
    time: req.body.time,
    room: req.body.room,
  }

  const todayclassdata = new todayClassData(details)
  todayclassdata.save()

  console.log(req.body)
})

todayClassDataRouter.get("/", async (req, res) => {
  const classdata = await todayClassData.find()
  res.send(classdata)
})

module.exports = todayClassDataRouter
