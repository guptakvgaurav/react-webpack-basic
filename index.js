//https://github.com/manoj-nama/react-webpack-basic
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducer = (state = {a: 10, counter: 0}, action) => {
  switch(action.type) {
    case 'INC': {
      return {
        ...state, counter: state.counter + action.val
      }
    }
    case 'DEC': {
      return {
        ...state, counter: state.counter - action.val
      };
    }
    case 'FOO': {
      return {
        ...state,
        a: 'xyz'
      }
    }
  }
  return state;
}

const reducerTwo = (state = 0, action) => {
  switch(action.type) {
    case 'INC': {
      return state + action.val;
    }
    case 'DEC': {
      return state - action.val;
    }
  }
  return state;
}

const logger = (store) => (next) => (action) => {
  console.log(action.type, store.getState());
  next(action);
}

const reducers = combineReducers({
  state1: reducer,//{a: 10, counter: 0}
  state2: reducerTwo//0
});

const middlewares = applyMiddleware(logger);

const store = createStore(reducers, middlewares);


store.subscribe(() => {
  console.log(store.getState());
});

function increment(val) {
  return {type: 'INC', val};
}

store.dispatch(increment(1));
store.dispatch(increment(2));
store.dispatch(increment(3));
store.dispatch(increment(4));
store.dispatch(increment(5));
store.dispatch({type: 'DEC', val: 2});
store.dispatch({type: 'DEC', val: 2});
store.dispatch(increment(1));
store.dispatch({type: 'FOO'});