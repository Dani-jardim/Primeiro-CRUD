const { findAll, addNew, update, clear} = require("../controllers/techmaromba-controller")

const express  = require("express")
const router = express.Router()

router.get("/all", findAll)

router.post("/add", addNew)

router.patch("/update/:id", update)

router.delete("/clear/:id", clear)

module.exports = router