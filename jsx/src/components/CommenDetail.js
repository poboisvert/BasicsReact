import React from "react";

const CommenDetail = (props) => {
  //console.log(props);
  // Generate Avatar
  function avatarId() {
    let text;
    const possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img
          src={`https://avatars.dicebear.com/4.5/api/male/${avatarId()}.svg`}
          alt="avatar"
        />
      </a>

      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.timestamp}</span>
        </div>
        <div className="text">{props.content}</div>
      </div>
    </div>
  );
};

export default CommenDetail;
