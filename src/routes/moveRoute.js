const express = require("express");
const router = express.Router();
const moveController = require('../controllers/moveController');

// Get all trains
router.get('/', moveController.getAllTrains);

// Get all stations
router.get('/stations', moveController.getAllStations);

// Select Train by ID (Test Purpose)
router.get('/:id', moveController.getTrain);

// Update Train Station by ID
router.put('/', moveController.moveTrain);

module.exports = router;