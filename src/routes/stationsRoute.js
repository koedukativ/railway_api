const express = require("express");
const router = express.Router();

router.get('/', (req, res) => res.send('Stations route'));

module.exports = router;