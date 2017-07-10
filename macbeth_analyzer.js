const axios = require('axios');

const getCount = require('./server/utils/getCount');

axios.get('http://www.ibiblio.org/xml/examples/shakespeare/macbeth.xml')
.then(({ data }) => {
  const { k, v } = getCount(data);
  k.forEach((key, i) => {
    console.log(v[i], key);
  });
})
.catch(err => console.error(err));
