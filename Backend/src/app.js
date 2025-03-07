const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const jobRoute = require('./routes/jobRoute');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/jobs', jobRoute);

module.exports = app;