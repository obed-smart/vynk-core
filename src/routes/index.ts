import Router from 'express';
import authRoute from './auth.route.js';

export default () => {
  /**
   * @TODO import all routes in this file to have a central control for easy changes, versioning and scalability
   */
  const router = Router();

  authRoute(router);

  return router;
};
