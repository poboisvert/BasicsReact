import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class Form extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg m-2'>
          <div className='flex items-center justify-center w-12 bg-red-500'>
            <svg
              className='w-6 h-6 text-white fill-current'
              viewBox='0 0 40 40'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z' />
            </svg>
          </div>

          <div className='px-4 py-2 -mx-3'>
            <div className='mx-3'>
              <span className='font-semibold text-red-500 dark:text-red-400'>
                Error
              </span>
              <p className='text-sm text-gray-600 dark:text-gray-200'>
                {error}
              </p>
            </div>
          </div>
        </div>
      );
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
      <div className='mb-6'>
        <label>{label}</label>
        <input
          {...input}
          className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
        />
        {this.renderError(meta)}
      </div>
    );
  };

  // Submit action
  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    //console.log(this.props);
    return (
      <div className='max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-sm'>
        <div className='m-7'>
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
            <Field
              name='image'
              component={this.renderInput}
              label='Image URL'
            />
            <div class='mb-6'>
              <button
                type='submit'
                className='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
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

  if (!formValues.image) {
    errors.image = 'You must enter an image url';
  }

  return errors;
};
/* export default reduxForm({ form: 'create', validate: validate })(Create);
 */
export default reduxForm({
  form: 'streamForm',
  validate,
})(Form);
