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
          <a
            href='#'
            className='inline-block rounded-full text-white 
                  bg-red-400 hover:bg-red-500 duration-300 
                  text-xs font-bold 
                  mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                  opacity-90 hover:opacity-100'
          >
            Delete
          </a>

          <a
            href='#'
            className='inline-block rounded-full text-white 
                  bg-green-400 hover:bg-green-500 duration-300 
                  text-xs font-bold 
                  mr-1 md:mr-2 mb-2 px-2 md:px-4 py-1 
                  opacity-90 hover:opacity-100'
          >
            Edit
          </a>
        </div>
      );
    }
  }

  // RenderHelper
  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <div className='bg-white rounded-lg px-2 sm:px-6 md:px-2 py-4 my-6'>
          <div className='grid grid-cols-12 gap-3'>
            {/*        <!-- Meta Column --> */}
            <div className='col-span-0 sm:col-span-2 text-center hidden sm:block'>
              {/*      <!-- Answer Counts --> */}
              <a
                href='#'
                className='grid grid-rows-2 mx-auto mb-3 py-1 w-4/5 2lg:w-3/5 rounded-md bg-green-400'
              >
                <div className='inline-block font-medium text-2xl text-white'>
                  12
                </div>

                <div className='inline-block font-medium text-white mx-1 text-sm lg:text-md'>
                  Answers
                </div>
              </a>
            </div>
            {/*   <!-- Summary Column --> */}
            <div className='col-span-12 sm:col-start-3 sm:col-end-13 px-3 sm:px-0'>
              <div className='grid block sm:hidden'>
                <div className='flex flex-wrap'>
                  <div className='mr-2'>
                    <div className='inline-block font-light capitalize'>
                      <i className='uil uil-arrow-circle-up mr-1'></i>
                      <span className='text-sm'>21 Votes</span>
                    </div>
                  </div>
                  <div className='mr-2'>
                    <div className='inline-block font-light capitalize'>
                      <i className='uil uil-check-circle mr-1'></i>
                      <span className='text-sm'>21 Answers</span>
                    </div>
                  </div>
                  <div className='mr-2'>
                    <div className='inline-block'>
                      <i className='uil uil-eye mr-1'></i>
                      <span className='text-sm capitalize font-light'>
                        21 Views
                      </span>
                    </div>
                  </div>

                  <div className='mr-2'>
                    <div className='inline-block'>
                      <i className='uil uil-clock mr-1'></i>
                      <span className='text-sm font-light'>
                        a few mins ago ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class='mt-2'>
                <a
                  href='#'
                  className='sm:text-sm md:text-md lg:text-lg text-gray-700 font-bold hover:underline'
                >
                  {stream.title}
                </a>

                <p className='mt-2 text-gray-600 text-sm md:text-md'>
                  {stream.description}
                </p>
              </div>

              {/*   <!-- Question Labels --> */}
              <div className='grid grid-cols-2 mt-4 my-auto'>
                {this.renderButtonsLogic(stream)}

                {/*        <!-- User --> */}
                <div className='col-none hidden mr-2 lg:block lg:col-start-9 lg:col-end-12'>
                  <a href='#' className='flex items-center'>
                    <img
                      src='https://avatarfiles.alphacoders.com/165/thumb-1920-165285.png'
                      alt='avatar'
                      className='mr-2 w-8 h-8 rounded-full'
                    />

                    <div className='text-gray-600 font-bold text-sm hover:underline'>
                      {this.currentActiveUserId}
                    </div>
                  </a>
                </div>
              </div>
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
