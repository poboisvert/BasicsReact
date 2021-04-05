import React from "react";
import ReactDOM from "react-dom";
import CommenDetail from "./CommenDetail";

const App = () => {
  // Javascript button that we use in the JSX cpde
  /*   const buttonExample = "Action"; */

  /*   function getButtonValue() {
    return "This is a value";
  }
 */

  /*   const buttonExampleObj = { text: "New Value" }; */

  return (
    <>
      <div className="ui container comments">
        <CommenDetail />
      </div>

      {/* <button style={{ color: "red" }}>{buttonExampleObj.text}</button> */}
      {/* <button style={{ color: "red" }}>{getButtonValue()}</button> */}
      {/* <button style={{ color: "red" }}>{buttonExample}</button> */}
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
