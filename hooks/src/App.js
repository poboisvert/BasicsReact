import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const itemsList = [
  {
    title: "Ny mae",
    content: "It's Monday",
  },
  {
    title: "Why  React",
    content: "A simple front end",
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={itemsList} />
      <Search />
    </div>
  );
};

export default App;
