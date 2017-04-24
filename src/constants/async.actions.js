import fetch from 'isomorphic-fetch';
import {
  fetchUserStarted,
  fetchUserSuccess,
  fetchUserFailed
} from './actions';

const URL = 'http://rest.learncode.academy/api/manoj/users';

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserStarted());
    return fetch(URL)
      .then(resp => resp.json())
      .then(users => {
        return dispatch(fetchUserSuccess(users));
      })
      .catch(err => {
        return dispatch(fetchUserFailed(err));
      });
  }
}