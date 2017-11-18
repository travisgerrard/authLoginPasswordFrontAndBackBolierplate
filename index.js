// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');

// DB Setup
mongoose.connect(
  'mongodb://travisgerrard:iw78NfQb@ds259105.mlab.com:59105/authtutorial'
);
mongoose.Promise = global.Promise;

// App Setup
app.use(morgan('combined')); // Logs incoming requires
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const PORT = process.env.PORT || 5000;
app.listen(PORT);
