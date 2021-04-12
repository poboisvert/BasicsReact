import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// Type for Redux
import { fetchStreams } from '../../actions';

class List extends Component {
  // Component properties
  componentDidMount() {
    this.props.fetchStreams(); // after render fetch all strems from API server
  }

  // Helper logic to display buttons
  renderButtonsLogic(stream) {
    if (stream.userId === this.props.currentActiveUserId) {
      return (
        <div className='col-span-12 lg:col-span-8'>
          <Link
            to={`/streams/delete/${stream.id}`}
            className='inline-block rounded-full text-white 
                  bg-red-400 hover:bg-red-500 duration-300 
                  text-xs font-bold 
                  mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                  opacity-90 hover:opacity-100'
          >
            Delete
          </Link>

          <Link
            to={`/streams/edit/${stream.id}`}
            className='inline-block rounded-full text-white 
                  bg-green-400 hover:bg-green-500 duration-300 
                  text-xs font-bold 
                  mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                  opacity-90 hover:opacity-100'
          >
            Edit
          </Link>
        </div>
      );
    }
  }

  // RenderHelper
  renderList() {
    console.log(this.props.streams);
    return this.props.streams.map((stream) => {
      return (
        <div
          key={stream.title}
          className='bg-white rounded-lg px-2 sm:px-6 md:px-2 py-4 my-6'
        >
          <div id='header' className='flex'>
            <img
              alt='mountain'
              className='rounded-md w-48'
              src={
                stream.image
                  ? stream.image
                  : 'https://tailwindcss.com/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg'
              }
            />
            <div id='body' className='flex flex-col ml-5'>
              <h4 id='name' className='text-xl font-semibold mb-2'>
                <Link to={`/streams/${stream.id}`}>{stream.title}</Link>
              </h4>
              <p id='job' className='text-gray-800 mt-2'>
                {stream.description}
              </p>
              <div className='flex mt-5'>{this.renderButtonsLogic(stream)}</div>
            </div>
          </div>
        </div>
      );
    });
  }

  // Helper if login to create a post
  renderAddCreate() {
    if (this.props.isSignedIn) {
      return (
        <>
          <div className='bg-white rounded-lg px-2 sm:px-6 md:px-2 py-4 my-6'>
            <Link to='/streams/new'>
              {/*            https://heroicons.com/ */}
              <button
                type='button'
                className='focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-blue-500 hover:bg-blue-600 hover:shadow-lg'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </button>
            </Link>
          </div>
        </>
      );
    }
  }
  // Render user
  render() {
    // console.log(this.props.streams);
    return (
      <div className='flex flex-col mx-auto px-20'>
        {/*      Button Navigation */}
        {this.renderAddCreate()}

        {/*       Display content */}
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentActiveUserId: state.auth.userId, // Signed In user
    isSignedIn: state.auth.isSignedIn, // Redux Dev Tool
  }; // Redux object and mapStateToProps is an array (easier)
};
export default connect(mapStateToProps, { fetchStreams })(List);
