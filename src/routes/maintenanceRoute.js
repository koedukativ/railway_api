const express = require("express");
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

// for all prefixed with /maintenance/
router.get("/", maintenanceController.getAll);
router.put("/", maintenanceController.updateMaintenance);

module.exports = router;