import express from 'express';
import { resolve } from 'path';
import middleware from './config/middleware';
import routes from './config/routes';

const app = express();

middleware(app, express);
routes(app);

app.use(express.static(`${__dirname}/../public`));
app.use(express.static(`${__dirname}/../build`));

app.get('/*', (req, res) => {
  res.sendFile(resolve(`${__dirname}/../public/index.html`));
});

export default app;
