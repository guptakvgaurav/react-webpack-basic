import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from '../reducers';
import middlewares from '../middlewares';

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(...middlewares)
);

export default store;