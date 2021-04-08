import React from "react";
import { connect } from "react-redux";

const BookDetail = ({ book }) => {
  console.log(book);
  if (!book) {
    return <div>Select a book</div>;
  }
  return <div>{book.title}</div>;
};

const mapStateToProps = (state) => {
  return { book: state.selectedBook };
};

export default connect(mapStateToProps)(BookDetail);
