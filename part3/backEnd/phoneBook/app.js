const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const infoRouter = require('./routes/info');
const personsRouter = require('./routes/person');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/info', infoRouter);
app.use('/api', personsRouter);

module.exports = app;
