import React, { Component } from "react";

export default class Weather extends Component {
  render() {
    // Geet window localisation
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>Latitude:</div>;
  }
}
