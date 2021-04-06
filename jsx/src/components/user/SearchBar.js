import React, { Component } from "react";

// State tool
export default class SearchBar extends Component {
  // Listenner
  // onClick, onChange or onSubmit

  // State init
  state = { term: "" };

  // Without state
  // Must be onSubmit when using JSX
  onChange() {
    console.log("e.targe.tvalue");
  }

  onClick() {
    console.log("click");
  }

  onSubmit = (e) => {
    e.preventDefault();

    //
    //console.log(this.state.term);
    // onSubmit props we pass onSubmitSearch
    // From App.js - <SearchBar onSubmit={this.onSubmitSearch} />
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="field">
            <label htmlFor="">Search Bar</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
              onClick={this.onClick}
            />
          </div>
        </form>
      </div>
    );
  }
}
