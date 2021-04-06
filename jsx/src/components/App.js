import React from "react";

// JSX Component
import ApproveContent from "./jsx/ApproveContent";
import CommenDetail from "./jsx/CommenDetail";
import Weather from "./jsx/Weather";

// Search Component
import SearchBar from "./user/SearchBar";
import fetchImage from "../api/fetchImage";

//const App = () => {

class App extends React.Component {
  // State Init
  state = { images: [] };

  onSubmitSearch = async (term) => {
    //console.log(term);

    // Fetch data
    const res = await fetchImage.get("/search/photos", {
      params: {
        // From input module
        query: term,
      },
    });
    /*       
    .then((res) => {
        console.log(res.data.results);
      }); 
      */
    //console.log(res.data.results);
    //console.log(this);

    this.setState({ images: res.data.results });
  };

  // Javascript button that we use in the JSX cpde
  /*   const buttonExample = "Action"; */

  /*   function getButtonValue() {
    return "This is a value";
  }
 */

  /*   const buttonExampleObj = { text: "New Value" }; */
  render() {
    return (
      <div className="container">
        {/*  Project 1 */}
        <h1>Weather project</h1>
        {/*    <Weather /> */}

        {/* Project 2 */}
        <h1>Children project</h1>
        <div className="ui container comments">
          <ApproveContent>
            {/*    Child card */}
            <CommenDetail author="Keven" timestamp="At 1PM" content="text1" />
          </ApproveContent>

          <ApproveContent>
            <CommenDetail author="Alpatch" timestamp="At 2PM" content="text2" />
          </ApproveContent>

          <ApproveContent>
            <CommenDetail author="Nostra" timestamp="At 3PM" content="text3" />
          </ApproveContent>
        </div>

        {/*  Project 3 */}
        <h1>User Project</h1>
        <div className="ui container">
          <SearchBar onSubmit={this.onSubmitSearch} />
          Found: {this.state.images.length} images
        </div>
        {/* <button style={{ color: "red" }}>{buttonExampleObj.text}</button> */}
        {/* <button style={{ color: "red" }}>{getButtonValue()}</button> */}
        {/* <button style={{ color: "red" }}>{buttonExample}</button> */}
      </div>
    );
  }
}

export default App;
