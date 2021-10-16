import express from 'express';
import handleDomainErrors from '../../api/http/middlewares/handle-domain-errors';
import routes from '../../api/http/routes';
import container from '../../container';
import { adapt } from './express-middleware-adapter';
import PathNotFoundMiddleware from '../../api/http/middlewares/path-not-found';
import { errorHandler } from './error-handler-express';

const startExpressServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use('/', routes);

  app.use(adapt(container.resolve(PathNotFoundMiddleware)));
  app.use(handleDomainErrors);
  app.use(errorHandler);

  return app;
};

export default startExpressServer;
