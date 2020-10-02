const express = require("express");
const router = express.Router();
const stationController = require("../controllers/stationController");

router.get("/", stationController.getAll);
router.get("/getAll", (req, res) => res.send("all stations"));

module.exports = router;
