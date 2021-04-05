import React from "react";
import ReactDOM from "react-dom";
import ApproveContent from "./components/ApproveContent";
import CommenDetail from "./components/CommenDetail";

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
        <ApproveContent>
          {/*    Child card */}
          <CommenDetail author="Keven" timestamp="At 1PM" content="text1" />
        </ApproveContent>
        <CommenDetail author="Alpatch" timestamp="At 2PM" content="text2" />
        <CommenDetail author="Nostra" timestamp="At 3PM" content="text3" />
      </div>

      {/* <button style={{ color: "red" }}>{buttonExampleObj.text}</button> */}
      {/* <button style={{ color: "red" }}>{getButtonValue()}</button> */}
      {/* <button style={{ color: "red" }}>{buttonExample}</button> */}
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
