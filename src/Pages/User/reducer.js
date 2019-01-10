import { combineReducers } from 'redux';
import list from './UserList/reducer';
import profile from './UserProfile/reducer';

export default combineReducers({
  list,
  profile,
});
