import {
  put, call, takeLatest
} from 'redux-saga/effects';
import { FETCH_USER } from '../constant';
import {
  fetchUserSuccess,
  fetchUserError,
} from './action';
import { getRequest } from '../../../Utils/api';

export function* callUsers({username}) {
  try {
    const response = yield call(
      getRequest, `https://api.github.com/users/${username}`,
    );
    yield put(fetchUserSuccess(response.data));
  } catch (exceptions) {
    yield put(fetchUserError(exceptions.toString()));
  }
}

export function* fetchUserSaga() {
  yield takeLatest(FETCH_USER, callUsers);
}
