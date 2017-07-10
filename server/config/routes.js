const { root, macbeth, xml } = require('../controllers');

module.exports = (app) => {
  app.get('/', root);
  app.get('/api/macbeth', macbeth);
  app.post('/api/xml', xml);
};
