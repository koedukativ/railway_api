const express = require("express");
const router = express.Router();
const stationController = require('../controllers/stationController');

router.get('/', (req, res) => res.send('Stations route'));

module.exports = router;