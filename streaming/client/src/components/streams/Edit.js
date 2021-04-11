import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';

import _ from 'lodash';

import From from './Form';
// THe issue with function is the lifecycle that do not fetch data if we go directly to /edit/2
/* const Edit = (props) => {
  //console.log(props); // match params and then id
  return <div>Edit</div>;
}; */

class Edit extends Component {
  // After rendering, second rendering with data
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    //console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  // HTML render
  render() {
    // Avoid error first render
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h3>Edit a stream</h3>
        <From
          //initialValues={{ title: 'title', description: 'change me to' }}
          initialValues={_.pick(
            this.props.stream,
            'title',
            'description',
            'image'
          )} // LODASH -- > STATE IN REDUX DEV TOOL
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

//ownProps acces to const Edit
//console.log(ownProps); //  EQUAL TO console.log(props); // match param
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(Edit);
