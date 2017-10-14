/* eslint no-console: "off"*/
const express = require('express');
const chalk = require('chalk');

const constants = require('./config/constants.js');
const error = require('./services/error');
const middlewaresInit = require('./config/middlewares');
const api = require('./routes/api/v1/index');

const app = express();

//middlewares
middlewaresInit(app);

// routers
app.use('/api/v1', api);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler
app.use(error.critical);

if (!module.parent) {
  app.listen(constants.PORT, err => {
    if (err) {
      console.log(chalk.red('Cannot run!'));
    } else {
      console.log(
        chalk.green.bold(`
        App runing on port: http://localhost/${constants.PORT}
        Env: ${process.env.NODE_ENV}
        `)
      );
    }
  });
}

module.exports = app;
