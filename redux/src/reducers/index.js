import { combineReducers } from "redux";

const booksReducer = () => {
  return [
    { title: "First Song", duration: "2.14" },
    { title: "No Flowers", duration: "2.62" },
  ];
};

const selectedSongReducer = (selectedBook = null, action) => {
  if (action.type === "BOOK_SELECTED") {
    return action.payload;
  }
  return selectedBook;
};

export default combineReducers({
  songs: booksReducer,
  selectedBook: selectedSongReducer,
});
