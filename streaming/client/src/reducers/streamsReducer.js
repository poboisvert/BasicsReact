import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from '../actions/types';

import _ from 'lodash';

// Default template for reducer
/* 
export default (state = [], action) => {
  switch (action.type) {
    default:
      return state;
  }
};
 */

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }; // ...state current records and mapKeys create an
    // Case single stream
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload }; // return new object
    // Case create stream
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    // Case edit stream
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    // Case delete stream
    case DELETE_STREAM:
      return _.omit(state, action.payload); // omit lodash create a new object
    // default case
    default:
      return state;
  }
};
