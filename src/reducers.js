import { combineReducers } from 'redux';
import UserReducer from './Pages/User/reducer';

export default combineReducers({
  user: UserReducer,
});
