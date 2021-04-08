import React, { useState } from "react";
import Dropdown from "./components/Dropdown";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Translate from "./components/Translate";

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
      <Translate />
      <Search />
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />

      <Accordion items={itemsList} />
    </div>
  );
};

export default App;
