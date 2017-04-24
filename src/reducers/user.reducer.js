import {
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  users: []
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
      const users = state.users.concat(action.users);
      return {
        loading: false,
        users
      }
    }
    case FETCH_USERS_FAILED: {
      return {
        loading: false,
        error: action.err
      }
    }
  }
  return state;
};

export default userReducer;