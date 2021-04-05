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
  function avatarId() {
    let text;
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  return (
    <>
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img
              src={`https://avatars.dicebear.com/4.5/api/male/${avatarId()}.svg`}
              alt="avatar"
            />
          </a>

          <div className="content">
            <a href="/" className="author">
              Paul
            </a>
            <div className="metadata">
              <span className="date">Today at 6PM</span>
            </div>
            <div className="text">My first post</div>
          </div>
        </div>
      </div>

      {/*       <button style={{ color: "red" }}>{buttonExampleObj.text}</button> */}
      {/* <button style={{ color: "red" }}>{getButtonValue()}</button> */}
      {/*      <button style={{ color: "red" }}>{buttonExample}</button> */}
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
