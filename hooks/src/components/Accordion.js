import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  // Function
  const onClickAccordion = (index) => {
    console.log("Clicked", index);
    setActiveIndex(index);
  };
  // Mapping items props
  const renderedItems = items.map((item, index) => {
    // Toggle storage
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div
          className={`title ${active}`}
          onClick={() => onClickAccordion(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
