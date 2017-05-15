//https://github.com/manoj-nama/react-webpack-basic

console.log("This is React");

import {createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import fetch

let reducer = (state, action) => {
    let updatedState = state;
    switch (action.type) {
        case Events.RoomAdded: {
                let updatedState = { ...state };
                let rooms = [ ...state.rooms, action.data];
                updatedState = { ...state, rooms};
                return updatedState;
            }
            break;
        case Events.UserAdded: {
                let updatedState = { ...state };
                updatedState.userCount = updatedState.userCount ? (updatedState.userCount + 1) : 0;
                return updatedState;
            }
            break;
        case Events.UserRemoved: {
            let updatedState = { ...state };
            updatedState.userCount = updatedState.userCount ? ( updatedState.userCount - 1) : 0;
            return updatedState;
        }
        default:
            break;
    }
    return updatedState;
};

const initialState = {
        rooms: []
    },
    Events = {
        RoomAdded: 'RoomAdded',
        UserAdded: 'UserAdded',
        UserRemoved: 'UserRemoved',
        RoomRemoved: 'RoomRemoved'
    };
// store needs reducers..
const loggerMiddleware = (store) => (next) => (action) => {
    console.log(`${action.type} is fired`);
    next(action);
};

const myAsyncMiddleware = (store) => (next) => (action) => {
  if(typeof action == 'function'){
      action(store.dispatch);
      return;
  }
    next(action);
};

const middlewares = applyMiddleware(myAsyncMiddleware, loggerMiddleware);
const store = createStore(reducer, initialState, middlewares);


store.subscribe(() => console.log(`Current state is `, store.getState()));


// store.dispatch({ type: Events.RoomAdded, data: { name: 'India'} });
// store.dispatch({ type: Events.UserAdded, data: { room: 'India', user: 'Gaurav'} });


store.dispatch({ type: Events.RoomAdded});
store.dispatch(function (dispatch) {
    dispatch({type: Events.UserAdded});

    setTimeout(() => {
        dispatch({ type: Events.UserRemoved});
    }, 2000);
});
