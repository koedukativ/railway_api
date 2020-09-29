const express = require('express');
const app = express();
const cors = require("cors");
const router = express.Router();
require('dotenv').config();

/* CORS handling to be able to access endpoints from POSTMAN and others */
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Setup of Routes
app.use('/stations', require('./routes/stationsRoute')); 
app.use('/trains', require('./routes/trainsRoute'));
app.use('/maintenance', require('./routes/maintenanceRoute'));

// Declare Port 3000 as default
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Express Server started on port ${PORT}`));