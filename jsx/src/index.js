import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  // Javascript button that we use in the JSX cpde
  /*   const buttonExample = "Action"; */

  /*   function getButtonValue() {
    return "This is a value";
  }
 */

  const buttonExampleObj = { text: "New Value" };

  return (
    <div>
      <h1>Hello World</h1>
      <div>
        <label className="label" htmlFor="name">
          Enter name
        </label>
        <input id="name" type="text" />
        <button style={{ color: "red" }}>{buttonExampleObj.text}</button>
        {/* <button style={{ color: "red" }}>{getButtonValue()}</button> */}
        {/*      <button style={{ color: "red" }}>{buttonExample}</button> */}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
