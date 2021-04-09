import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";

class UserHeader extends Component {
  componentDidMount() {
    this.props.fetchUser(this.props.userId);
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }
    return <div className="header">{user.name}</div>;
  }
}

// precalculation component props and redux state
const mapStateToProps = (state, ownProps) => {
  // Send to reducer
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
