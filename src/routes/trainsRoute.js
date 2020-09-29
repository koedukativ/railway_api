const express = require("express");
const router = express.Router();
const trainController = require('../controllers/trainController');

router.get('/', (req, res) => res.send('Trains route'));

module.exports = router;