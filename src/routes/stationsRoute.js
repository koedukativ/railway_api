const express = require("express");
const router = express.Router();
const stationController = require("../controllers/stationController");

router.get("/", (req, res) => res.send(stationController));
router.get("/getAll", (req, res) => res.send("all stations"));

module.exports = router;
