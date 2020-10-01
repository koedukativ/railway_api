const express = require('express');
const cors = require('cors');
const app = express();
const router = express.Router();
require('dotenv').config();

app.use(cors());
// Setup of Routes
app.use('/stations', require('./routes/stationsRoute')); 
app.use('/trains', require('./routes/trainsRoute'));
app.use('/move', require('./routes/moveRoute'));

// Declare Port 3001 as default
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Express Server started on port ${PORT}`));