import { all } from 'redux-saga/effects';
import { fetchUsersSaga } from './Pages/User/UserList/sagas';
import {fetchUserSaga} from './Pages/User/UserProfile/sagas';

export default function* rootSaga() {
  yield all([
    fetchUsersSaga(),
    fetchUserSaga(),
  ]);
}
