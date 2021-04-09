import fetchAPI from "../api/fetchAPI";
import _ from "lodash";

export const fetchPosts = () => async (dispatch) => {
  const response = await fetchAPI.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => (dispatch) => {
  _fetchUser(id, dispatch);
};

// Fetch data only once for a specific ID - XHR Google Chrome
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await fetchAPI.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});
