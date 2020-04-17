const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

const app = express();

// To use format json
app.use(express.json());

// Expor a api
app.use(cors());

// Start DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true, useUnifiedTopology: true});

// Has a lib good for this - require-dir
// require('./src/models/Product'); <- Don't use this more
requireDir('./src/models'); // This get all

app.use('/api', require('./src/routes'));

// Run on the port 3001
app.listen(3001);