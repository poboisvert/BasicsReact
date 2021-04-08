import React, { useState } from "react";
import Convert from "./Convert";
import Dropdown from "./Dropdown";

const list = [
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(list[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a language"
        selected={language}
        onSelectedChange={setLanguage}
        options={list}
      />
      <hr />
      <h2 className="ui header">Output</h2>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
