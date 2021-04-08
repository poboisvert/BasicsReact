import React, { Component } from "react";
import { connect } from "react-redux";
import { selectBook } from "../actions";

class BookList extends Component {
  renderList() {
    return this.props.songs.map((book) => {
      return (
        <div key={book.title} className="item">
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectBook(book)}
            >
              Select
            </button>
          </div>
          <div className="content">{book.title}</div>
        </div>
      );
    });
  }
  render() {
    console.log(this.props);
    //console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log(state); // log on click
  return { songs: state.songs };
};

export default connect(mapStateToProps, { selectBook })(BookList);
