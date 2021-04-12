import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';

// VIDEO STREAM
import flv from 'flv.js';

class Show extends Component {
  // video JSX to HTML
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  // Licecycle Method
  componentDidMount() {
    //
    // ES6 - Shorcut
    //
    const { id } = this.props.match.params;
    //
    //
    // console.log(this.props);
    this.props.fetchStream(id);
    // Build player
    this.buildVideoPlayer(); // Is called once
  }

  componentDidUpdate() {
    // Build player
    this.buildVideoPlayer(); // If fetch stream and rerender; It will be updated
  }

  componentWillUnmount() {
    console.log('unmount');
    // Clean up old player
    this.player.destroy();
  }

  buildVideoPlayer() {
    //
    // ES6 - Shorcut
    //
    const { id } = this.props.match.params;
    //
    //
    //
    if (this.player || !this.props.stream) {
      return; // Parameters to confirm stream
    }

    // Init video stream
    this.player = flv.createPlayer({
      type: 'flv',
      url: `http://localhost:8000/live/${id}.flv`,
    });

    // Player load
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    // ES6
    const { title, description } = this.props.stream;

    // Render HTML
    // controls={true} // without ={true} is working eg: controls
    return (
      <>
        <video ref={this.videoRef} style={{ width: '100%' }} controls={true} />
        <div>{title}</div>
        <h4>{description}</h4>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(Show);
