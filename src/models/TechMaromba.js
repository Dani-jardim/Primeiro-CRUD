const mongoose = require("mongoose")
const techMarombaSchema = mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      default: () => new mongoose.Types.ObjectId()
    },
    name: {
      type: String,
      required:true,
      unique:true,
    },
    description: {
      type: String,
      required:true,
    },
    urlProfile: {
      type: String,
      required:true,
    },
    urlImage: {
      type: String,
      required:true,
    },
    createdAt: {
      type: Date,
      required:true,
    }
  },
  {timeStamp: true}
)

const TechMaromba = mongoose.model("techMaromba", techMarombaSchema)

module.exports = TechMaromba