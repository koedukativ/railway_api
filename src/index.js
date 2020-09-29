const express = require('express');
const app = express();
const router = express.Router();
require('dotenv').config();

// Setup of Routes
app.use('/stations', require('./routes/stationsRoute')); 
app.use('/trains', require('./routes/trainsRoute'));
app.use('/maintenance', require('./routes/maintenanceRoute'));

// Declare Port 3000 as default
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Express Server started on port ${PORT}`));