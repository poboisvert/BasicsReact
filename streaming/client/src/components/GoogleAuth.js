import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends Component {
  //  state = { isSignedIn: null };
  // Already render then call componentDidMount
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '589082165700-mupj2ueq98bjgkcg27er8qshs6ao7bnd.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          // Dispatch after initialize
          this.onAuthChange(this.auth.isSignedIn.get()); // action folder index.js

          // Wiat to change status
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  // Actions
  onAuthChange = (isSignedIn) => {
    // this.setState({ isSignedIn: this.auth.isSignedIn.get() });

    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.auth.signIn();
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>Can not confirm session</div>;
    } else if (this.props.isSignedIn) {
      return (
        <button
          type='button'
          onClick={this.onSignOut}
          className='focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-red-500 hover:bg-red-600 hover:shadow-lg flex items-center'
        >
          <svg
            className='w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01'
            />
          </svg>
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          type='button'
          onClick={this.onSignIn}
          className='focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg flex items-center'
        >
          <svg
            className='w-4 h-4 mr-2'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth); // pass mapStateToProps to reducer with connect
