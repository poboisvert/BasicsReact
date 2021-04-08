import React, { useEffect, useState } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [activate, setActivate] = useState(false);

  // Close dropdown if click outside the dropdown
  useEffect(() => {
    document.body.addEventListener(
      "click",
      () => {
        setActivate(false);
      },
      { capture: true }
    );
  }, []);

  const optionsHTML = options.map((option) => {
    // Remove duplicate
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select</label>
        <div
          onClick={() => setActivate(!activate)}
          className={`ui selection dropdown ${
            activate ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${activate ? "visible transition" : ""}`}>
            {optionsHTML}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
