import createReducer from '../../../Utils/createReducer';
import {
  FETCH_USER,
  FETCH_USER_SUCCESS,
  FETCH_USER_ERROR,
} from '../constant';

const defaultState = {
  data: [],
  err: '',
  isLoading: false,
};
export default createReducer(defaultState, {
  [FETCH_USER]: state => ({
    ...state,
    isLoading: true,
    data: defaultState.data,
  }),
  [FETCH_USER_SUCCESS]: (state, action) => ({
    ...state,
    isLoading: false,
    data: action.data,
  }),
  [FETCH_USER_ERROR]: (state, action) => ({
    ...state,
    isLoading: false,
    data: defaultState.data,
    err: action.err,
  }),
});
