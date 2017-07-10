import morgan from 'morgan';
import { urlencoded, json } from 'body-parser';

export default (app) => {
  app.use(morgan('dev'));
  app.use(urlencoded({ extended: true }));
  app.use(json());
};
