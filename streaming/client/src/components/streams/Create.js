import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';

class Create extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return <div className='pt-2 text-yellow-700'>{error}</div>;
    }
  }

  renderInput = ({ input, label, meta }) => {
    //console.log(meta);
    //console.log(meta); // errors
    return (
      /*       <input
        value={formProps.input.value}
        onChange={formProps.input.onChange}
      /> */
      // take formprops properties and inject
      <div class='mb-6'>
        <label>{label}</label>
        <input
          {...input}
          className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
        />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    //console.log(this.props);
    return (
      <div class='max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm'>
        <div class='m-7'>
          <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field
              name='title'
              component={this.renderInput}
              label='Enter Title'
            />
            <Field
              name='description'
              component={this.renderInput}
              label='Enter Description'
            />
            <div class='mb-6'>
              <button
                type='submit'
                class='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'You must enter a title';
  }

  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};
/* export default reduxForm({ form: 'create', validate: validate })(Create);
 */
const formWrapped = reduxForm({
  form: 'createStream',
  validate,
})(Create);

export default connect(null, { createStream })(formWrapped);
