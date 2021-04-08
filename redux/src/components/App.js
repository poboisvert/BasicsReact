import React from "react";
import BookDetail from "./BookDetail";
import BookList from "./BookList";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <BookList />
        </div>
        <div className="column eight wide">
          <BookDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
