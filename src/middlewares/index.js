import thunkMiddleware from 'redux-thunk';
import logger from './logger.middleware';

export default [
  thunkMiddleware,
  logger
]