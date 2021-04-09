import fetchAPI from "../api/fetchAPI";

export const fetchPosts = () => {
  // Redux thunk with async is ok without thunk we can not use a return request (async & await})
  return async (dispatch) => {
    const res = await fetchAPI.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: res });
  };
};
