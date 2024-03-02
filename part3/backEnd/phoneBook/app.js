const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config();
const connectToMongo = require('./mongo');

//error handler
const errorHandler = require('./middleware/errorhandler');

const infoRouter = require('./routes/info');
const personsRouter = require('./routes/person');

//connect to DB
connectToMongo();

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/info', infoRouter);
app.use('/api', personsRouter);

app.use(errorHandler.noPersonRecord);
app.use(errorHandler.cannotFindEntry);
app.use(errorHandler.cannotBeDeleted);
app.use(errorHandler.couldNotUpdateEntry);

module.exports = app;
