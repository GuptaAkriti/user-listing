import createReducer from '../../../Utils/createReducer';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
} from '../constant';

const defaultState = {
  data: [],
  err: '',
  isLoading: false,
};
export default createReducer(defaultState, {
  [FETCH_USERS]: state => ({
    ...state,
    isLoading: true,
    data: defaultState.data,
  }),
  [FETCH_USERS_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    data: action.data,
  }),
  [FETCH_USERS_ERROR]: (state, action) => ({
    ...state,
    isLoading: false,
    data: defaultState.data,
    err: action.err,
  }),
});
