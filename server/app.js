import express from 'express';
import middleware from './config/middleware';
import routes from './config/routes';

const app = express();

middleware(app, express);
routes(app);

app.use(express.static(`${__dirname}/../public`));
app.use(express.static(`${__dirname}/../build`));


export default app;
