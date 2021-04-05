import React from "react";

const CommenDetail = () => {
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
          Paul
        </a>
        <div className="metadata">
          <span className="date">Today at 6PM</span>
        </div>
        <div className="text">My first post</div>
      </div>
    </div>
  );
};

export default CommenDetail;
