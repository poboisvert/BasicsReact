import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
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

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Accordion items={itemsList} />
      <Search />
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};

export default App;
