import React from "react";

export default class Weather extends React.Component {
  // Call before anything else
  constructor(props) {
    // Require
    super();

    this.state = { lat: null };
  }

  // Get window localisation
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => console.log(err)
    );

    return <div>Latitude: {this.state.lat}</div>;
  }
}
