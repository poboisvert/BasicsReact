export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_USER":
      // add new to old
      return [...state, action.payload];
    default:
      return state;
  }
};
