const express = require('express');
const path = require('path');

const app = express();

require('./config/middleware')(app, express);
require('./config/routes')(app);

app.use(express.static(`${__dirname}/../public`));
app.use(express.static(`${__dirname}/../build`));

app.get('/*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../public/index.html`));
});

module.exports = app;
