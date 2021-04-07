import React from "react";
import "./Season.css";

const seasonStorage = {
  summer: {
    text: "Gin and Soda Season",
    icon: "sun",
  },
  winter: {
    text: "Maple Sirup is back",
    icon: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = (props) => {
  // Pass lat and the month associated
  const season = getSeason(props.lat, new Date().getMonth());

  // Find the text and icon from storage
  const { text, icon } = seasonStorage[season];

  return (
    <div className={`season-filter ${season}`}>
      <i className={`top massive ${icon} icon `} />
      <h1>{text}</h1>
      {/*      <i className={`bottom massive ${icon} icon `} /> */}
    </div>
  );
};

export default Season;
