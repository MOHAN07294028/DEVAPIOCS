const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
dotenv.config();
app.use(cors());
const registerModule = require('./module/register');
const commonModule = require('./module/commonData');
const loginModule = require('./module/login');
const PORT = process.env.PORT || 3000; // Defaulting to 3000 if PORT is not set

app.use(express.json());

// Serving static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.use('/', registerModule);
app.use('/common', commonModule);
app.use('/', loginModule);

// Handling all other routes to serve React app
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
