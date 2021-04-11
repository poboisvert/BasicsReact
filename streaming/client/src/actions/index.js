import streams from '../api/streams';
// Router history
import history from '../components/history';
// Type to dispatch action
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from './types'; // Avoid typing mistake

// Type and paylaod - format function for components - GoogleAuth
export const signIn = (userId) => {
  return {
    type: SIGN_IN, // From types
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT, // From types
  };
};

/* export const createStreams = () => {
  return {
    type: 'CREATE_STREAM',
  };
}; */

// EXPORT to GOOGLEAUTH
// Routes specific
// Information specific
// Response logged
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth; // State REdux dev tool
  const res = await streams.post('/streams', { ...formValues, userId }); // post request with folder API - Need a type to dispatch

  dispatch({ type: CREATE_STREAM, payload: res.data });
  //Router
  history.push('/');
};

// Streams many records (ACTION, METHOD, ROUTE, RESPONSE)
export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');

  // Dispatch Redux
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};
// Stream fetch one (ACTION, METHOD, ROUTE, RESPONSE)
export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: response.data });
};
// Stream edit one (ACTION, METHOD, ROUTE, RESPONSE)
export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: response.data });

  //Router
  history.push('/');
};
// Stream delete one (ACTION, METHOD, ROUTE, RESPONSE)
export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id }); // Delete no res and only payload id

  //Router
  history.push('/');
};

/* 
const listSounds = {auto: 'vroum', bus: 'vrroum'}

const newVehicule = 'tracktor'

const newSound = 'VROOMMMMMMM'

{...listSounds, [newVehicule]: newSound} // Key interpolation SOURCE: https://stackoverflow.com/questions/5640988/how-do-i-interpolate-a-variable-as-a-key-in-a-javascript-object/30608422

const listSounds = {auto: 'vroum', bus: 'vrroum', 'tracktor': 'VROOMMMMMMM' }
 */
