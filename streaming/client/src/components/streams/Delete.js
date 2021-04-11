import React, { Component } from 'react';
import Modal from '../shared/Modal';

//Redux
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

// Router
import history from '../history';
import { Link } from 'react-router-dom';

/* const Delete = () => { */
class Delete extends Component {
  componentDidMount() {
    //console.log(this.props);
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <Link
          to='/'
          className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='button'
        >
          Cancel
        </Link>
        <button
          onClick={() => {
            this.props.deleteStream(this.props.match.params.id);
          }}
          className='bg-green-500 text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
          type='button'
        >
          Delete
        </button>
      </React.Fragment>
    );
  }

  renderLoading() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete this stream';
    }
    return `Are you sure you want to delete this stream: ${this.props.stream.title}`;
  }

  render() {
    return (
      <>
        <Modal
          title='Delete Stream'
          content={this.renderLoading()}
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(Delete);
