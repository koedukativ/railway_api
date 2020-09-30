const express = require("express");
const router = express.Router();
const trainController = require("../controllers/trainController");

router.get("/", (req, res) => res.send("Trains route"));
router.get("/getAll", (req, res) => res.send("all trains"));

module.exports = router;
