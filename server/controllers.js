import axios from 'axios';
import { resolve } from 'path';
import getCount from './utils/getCount';

export const root = (req, res) => {
  res.sendFile(resolve(`${__dirname}/../public/index.html`));
};
export const macbeth = (req, res) => {
  axios.get('http://www.ibiblio.org/xml/examples/shakespeare/macbeth.xml')
    .then(({ data }) => { res.send(getCount(data)); })
    .catch(err => console.error(err));
};

export const xml = (req, res) => {
  const { xmlfile } = req.body;
  axios.get(xmlfile)
    .then(({ data }) => { res.send(getCount(data)); })
    .catch(err => console.error(err));
};
