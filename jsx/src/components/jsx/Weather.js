import React from "react";

export default class Weather extends React.Component {
  // Call before anything else
  constructor(props) {
    // Require
    super();

    // Only once then setState - Component
    // (1) Run n init and (2) run again below at  this.setState({ lat:  ...
    this.state = { lat: null, errorMsg: "" };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  // Get window localisation
  render() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading - Hell of a page!</div>;
  }
}