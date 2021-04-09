import fetchAPI from "../api/fetchAPI";
import _ from "lodash";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // dispatch to redux thunk will invoce and pass it as first argument
  console.log("Pre - fetched");

  await dispatch(fetchPosts());
  //console.log(getState().posts); // All posts fetched
  /*   const userIds = _.uniq(_.map(getState().posts, "userId")); // fetch and map unique id */
  //console.log(userIds);
  //userIds.forEach((id) => dispatch(fetchUser(id)));
  console.log("Post - fetched");
  // if chain then map or other then argument will be getState().posts automatically
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach((id) => dispatch(fetchUser(id)))
    .value(); // lodash mandatory
};

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
