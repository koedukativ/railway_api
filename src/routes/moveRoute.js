const express = require("express");
const router = express.Router();
const moveController = require('../controllers/moveController');

// Test Purpose only
router.get('/', moveController.getAll);

// Select Train by ID (Test Purpose)
router.get('/:id', moveController.getTrain);

// Update Train Station by ID
router.put('/:id', moveController.moveTrain);

module.exports = router;