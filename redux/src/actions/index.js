// Creator
export const selectBook = (book) => {
  // return action
  return {
    type: "BOOK_SELECTED",
    payload: book,
  };
};
