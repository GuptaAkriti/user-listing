import {
  put, call, takeLatest
} from 'redux-saga/effects';
import { FETCH_USERS } from '../constant';
import {
  fetchUsersSuccess,
  fetchUsersError,
} from './action';
import { getRequest } from '../../../Utils/api';

export function* callUsers() {
  try {
    const response = yield call(
      getRequest, `https://api.github.com/users?since=135`,
    );
    yield put(fetchUsersSuccess(response.data));
  } catch (exceptions) {
    yield put(fetchUsersError(exceptions.toString()));
  }
}

export function* fetchUsersSaga() {
  yield takeLatest(FETCH_USERS, callUsers);
}
