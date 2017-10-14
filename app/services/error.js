/* eslint no-console: "off"*/

const HTTPStatus = require('http-status');

module.exports.notFound = (req, res, next) => {
  const err = HTTPStatus[404];
  err.status = HTTPStatus.NOT_FOUND;
  next(err);
};


const isDev = process.env.NODE_ENV === 'development';

module.exports.critical = (err, req, res) => {
  const status = err.status || HTTPStatus.INTERNAL_SERVER_ERROR;
  if (isDev) {
    console.log(err);
    return res.status(status).json({
      message: err.message,
      status: HTTPStatus[500]
    });
  }

  res.status(status).json({
    message: HTTPStatus.INTERNAL_SERVER_ERROR,
    status: HTTPStatus[500]
  });
};
