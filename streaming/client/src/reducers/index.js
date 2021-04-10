import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  // replaceThis: () => 1,
  auth: authReducer,
});
