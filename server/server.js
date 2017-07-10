import { config } from 'dotenv';
import app from './app';

if (process.env.NODE_ENV === 'production') {
  process.env.NPM_CONFIG_PRODUCTION = false;
}

config();

const server = app.listen(process.env.PORT || 8000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
