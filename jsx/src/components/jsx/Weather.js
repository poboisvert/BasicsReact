import React from "react";
import { Loading } from "./Loading";
import Season from "./Season";

export default class Weather extends React.Component {
  // Without a constructor
  state = { lat: null, errorMsg: "" };
  // Call before anything else
  /*   constructor(props) {
    // Require
    super();

    // Only once then setState - Component
    // (1) Run n init and (2) run again below at  this.setState({ lat:  ...
    this.state = { lat: null, errorMsg: "" };
  } */

  componentDidMount() {
    console.log("Component DidMount is ON");

    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMsg: err.message })
    );
  }

  componentDidUpdate() {
    // Run after getting the lat
    console.log("Component DidUpdate is ON and rerender");
  }

  renderLoading() {
    if (this.state.errorMsg && !this.state.lat) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (!this.state.errorMsg && this.state.lat) {
      return <Season lat={this.state.lat} />;
    }

    return <Loading message="Loading..." />;
  }

  // Get window localisation
  render() {
    return <div>{this.renderLoading()}</div>;
  }
}
