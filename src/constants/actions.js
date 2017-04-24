import {
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED
} from './';

export const fetchUserStarted = () => {
  return {
    type: FETCH_USERS_STARTED
  }
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    users
  }
};

export const fetchUserFailed = (err) => {
  return {
    type: FETCH_USERS_FAILED,
    err
  }
};