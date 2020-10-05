const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const router = express.Router();
require('dotenv').config();
const logging = require('./logging/logging');



/* CORS handling to be able to access endpoints from POSTMAN and others */
app.use(cors({ origin: "*" }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* required to correctly transfer data in request body */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logging);

// Setup of Routes
app.use('/stations', require('./routes/stationsRoute')); 
app.use('/trains', require('./routes/trainsRoute'));
app.use('/maintenance', require('./routes/maintenanceRoute'));
app.use('/move', require('./routes/moveRoute'));


// Declare Port 3001 as default
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Express Server started on port ${PORT}`));