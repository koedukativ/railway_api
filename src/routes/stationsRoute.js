const express = require("express");
const router = express.Router();
const stationController = require('../controllers/stationController');

router.get('/',stationController.getTrainsByStation );


module.exports = router;