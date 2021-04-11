import { combineReducers } from 'redux';
import authReducer from './authReducer';
import streamsReducer from './streamsReducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  // replaceThis: () => 1,
  auth: authReducer,
  form: formReducer, // Redux store var
  streams: streamsReducer, // REDUX DEV TOOLS in State
});

// MAI NREDUCER to storage
