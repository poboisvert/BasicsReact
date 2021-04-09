export default (state = [], action) => {
  // Case on type
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    // If no match type
    default:
      return state;
  }
};
