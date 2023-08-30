
const mongoose = require("mongoose")

const connect = async () => {
  try {
    mongoose.connect("mongodb+srv://danialvesdesigner:gcfxiE0XSmk1JkoC@cluster0.vuenoti.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("Database connected")
  } catch (error) {
    console.error(error)
  }
}

module.exports = {connect}