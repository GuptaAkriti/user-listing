import {
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
  } from '../constant';
  
  export function fetchUser(username) {
    return {
      type: FETCH_USER,
      username,
    };
  }
  export function fetchUserSuccess(data) {
    return {
      type: FETCH_USER_SUCCESS,
      data,
    };
  }
  export function fetchUserError(err) {
    return {
      type: FETCH_USER_ERROR,
      err,
    };
  }
  