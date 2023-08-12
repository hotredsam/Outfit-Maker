const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// Import necessary modules at the top of server.js
const outfitsRoutes = require('./routes/outfits'); // Create this file

const app = express();
const port = 5000;

// Use the routes
app.use(bodyParser.json());
app.use(cors());
app.use('/api/outfits', outfitsRoutes);

// Define routes here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
