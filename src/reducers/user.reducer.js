import {
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  list: []
};

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_STARTED: {
      return {
        ...state,
        loading: true
      }
    }
    case FETCH_USERS_SUCCESS: {
      const list = state.list.concat(action.users);
      return {
        ...state,
        loading: false,
        list
      }
    }
    case FETCH_USERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.err
      }
    }
  }
  return state;
};

export default userReducer;