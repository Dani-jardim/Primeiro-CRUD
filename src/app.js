const swaggerUi = require("swagger-ui-express")
const swaggerFile = require("../swagger/swagger_output.json")

const express = require("express")
const cors = require("cors")
const techMarombaRoute = require("./routes/techmaromba-route")
const mongoose = require("./database/dbConnect")

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use("/techmaromba", techMarombaRoute)
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile) )

module.exports = app 