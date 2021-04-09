import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";

class PostList extends Component {
  // Lifecycle method
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Post List</div>;
  }
}

export default connect(null, { fetchPosts })(PostList);
