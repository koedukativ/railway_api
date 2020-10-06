const express = require("express");
const router = express.Router();
const stationController = require("../controllers/stationController");


router.get("/", stationController.getAll);
router.get("/getAll", (req, res) => res.send("all stations"));

router.get('/specificTrain',stationController.getTrainsByStation );
router.get('/allTrains', stationController.getAllTrains);
router.get('/:id', stationController.selectStation);


module.exports = router;
