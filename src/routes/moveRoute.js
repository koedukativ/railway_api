const express = require("express");
const router = express.Router();
const moveController = require('../controllers/moveController');

// Test Purpose only
router.get('/', (req, res) => res.send('Move Route'));

// Select Train by ID (Test Purpose)
router.get('/:id', moveController.getTrain);

// Update Train Station by ID
router.put('/:id', moveController.moveTrain);

module.exports = router;