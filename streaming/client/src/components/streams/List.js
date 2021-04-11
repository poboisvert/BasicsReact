import React, { Component } from 'react';
//Redux
import { connect } from 'react-redux';
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
        <div className='flex-initial bg-white rounded-lg shadow-sm px-2 sm:px-6 md:px-2 py-4 my-6'>
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

  // Render user
  render() {
    // console.log(this.props.streams);
    return (
      <div className='flex flex-col mx-auto px-20'>
        <div>{this.renderList()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentActiveUserId: state.auth.userId, // Signed In user
  }; // Redux object and mapStateToProps is an array (easier)
};
export default connect(mapStateToProps, { fetchStreams })(List);
