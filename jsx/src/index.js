import React from "react";
import ReactDOM from "react-dom";
import ApproveContent from "./components/jsx/ApproveContent";
import CommenDetail from "./components/jsx/CommenDetail";
import Weather from "./components/jsx/Weather";

const App = () => {
  // Javascript button that we use in the JSX cpde
  /*   const buttonExample = "Action"; */

  /*   function getButtonValue() {
    return "This is a value";
  }
 */

  /*   const buttonExampleObj = { text: "New Value" }; */

  return (
    <div className="container">
      {/*  Project 1 */}
      <h1>Weather project</h1>

      <Weather />

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

      {/* <button style={{ color: "red" }}>{buttonExampleObj.text}</button> */}
      {/* <button style={{ color: "red" }}>{getButtonValue()}</button> */}
      {/* <button style={{ color: "red" }}>{buttonExample}</button> */}
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
