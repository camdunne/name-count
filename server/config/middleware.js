const morgan = require('morgan');
const { urlencoded, json } = require('body-parser');

module.exports = (app) => {
  app.use(morgan('dev'));
  app.use(urlencoded({ extended: true }));
  app.use(json());
};
