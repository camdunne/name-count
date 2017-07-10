const axios = require('axios');
const { resolve } = require('path');
const getCount = require('./utils/getCount');

module.exports = {
  root: (req, res) => {
    res.sendFile(resolve(`${__dirname}/../public/index.html`));
  },
  macbeth: (req, res) => {
    axios.get('http://www.ibiblio.org/xml/examples/shakespeare/macbeth.xml')
    .then(({ data }) => { res.send(getCount(data)); })
    .catch(err => console.error(err));
  },
  xml: (req, res) => {
    const { xmlfile } = req.body;
    axios.get(xmlfile)
    .then(({ data }) => { res.send(getCount(data)); })
    .catch(err => console.error(err));
  },
};
