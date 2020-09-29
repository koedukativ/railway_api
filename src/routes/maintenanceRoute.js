const express = require("express");
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');

router.get("/", maintenanceController.getAll);
/*router.get("/:id", maintenanceController.getSingleUser);
router.put("/:id", maintenanceController.updateUser);
router.delete("/:id", maintenanceController.deleteUser);*/

module.exports = router;