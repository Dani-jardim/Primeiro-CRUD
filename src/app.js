const express = require("express")
const cors = require("cors")
const techMarombaRoute = require("./routes/techmaromba-route")

const app = express()

app.use(express.json[])
app.use(cors[])
app.use("techMarombaRoute", techMarombaRoute)

module.exports = app 