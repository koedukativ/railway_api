const express = require("express");
const router = express.Router();
const trainController = require("../controllers/trainController");

router.get("/", trainController.getAll);
router.get("/getAll", (req, res) => res.send("all trains"));

module.exports = router;
