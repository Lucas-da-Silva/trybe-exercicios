const express = require('express');
const ecotourismRouter = require('./routes/ecotourismRouter');
require('express-async-errors');

const app = express();

app.use(express.json());

app.use(ecotourismRouter);

module.exports = app;
