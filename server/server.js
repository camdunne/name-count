import { config } from 'dotenv';
import app from './app';

config();

const server = app.listen(process.env.PORT || 8000, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Listening at http://%s:%s', host, port);
});
