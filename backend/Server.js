const express = require("express")
const app = express()
const mongoose = require("mongoose")
const employeeRouter = require("./routes/employeeListRoute.js")
const todayClassRoute = require("./routes/todayClassRoute.js")
const PostActivityRoute = require("./routes/postActivityRoute.js")

var cors = require("cors")
var morgan = require("morgan")

app.use(cors())
app.use(express.json())

require("dotenv").config()
app.use(morgan("tiny"))

const DB = process.env.DB_LOCAL

mongoose.connect(DB, () => {
  console.log("mongoDB conncected")
})

app.use("/", employeeRouter)
app.use("/todayclass", todayClassRoute)
app.use("/activity", PostActivityRoute)

app.listen(4000, () => {
  console.log("backend running on 4000")
})
