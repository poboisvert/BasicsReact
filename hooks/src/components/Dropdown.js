import React, { useEffect, useState, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange }) => {
  const [activate, setActivate] = useState(false);
  const ref = useRef();

  // Close dropdown if click outside the dropdown
  useEffect(() => {
    // Body listenner
    document.body.addEventListener(
      "click",
      (e) => {
        /*         console.log("click");
        console.log(e.target); */
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
        onClick={() => {
          onSelectedChange(option);
          /*  console.log("click form"); */
        }}
      >
        {option.label}
      </div>
    );
  });

  console.log(ref.current);

  return (
    <div ref={ref} lassName="ui form">
      <div className="field">
        <label className="label">Select</label>
        <div
          onClick={() => {
            // Item selected
            setActivate(!activate);
            /*     console.log("click dropdown"); */
          }}
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
