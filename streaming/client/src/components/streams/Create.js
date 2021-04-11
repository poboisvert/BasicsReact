import React, { Component } from 'react';

//Redux
import { connect } from 'react-redux';
import { createStream } from '../../actions';
//
import Form from './Form';

class Create extends Component {
  // Callback
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    //console.log(this.props);
    return (
      <div class='max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm'>
        <h4>Create a stream</h4>
        <div class='m-7'>
          <Form onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
}

/* export default reduxForm({ form: 'create', validate: validate })(Create); */

export default connect(null, { createStream })(Create);
