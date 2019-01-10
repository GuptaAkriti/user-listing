import {
    FETCH_USERS,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR,
  } from '../constant';
  
  export function fetchUsers() {
    return {
      type: FETCH_USERS,
    };
  }
  export function fetchUsersSuccess(data) {
    return {
      type: FETCH_USERS_SUCCESS,
      data,
    };
  }
  export function fetchUsersError(err) {
    return {
      type: FETCH_USERS_ERROR,
      err,
    };
  }
  