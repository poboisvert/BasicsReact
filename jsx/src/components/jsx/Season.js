import React from "react";

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const Season = (props) => {
  const seasonResult = getSeason(props.lat, new Date().getMonth());

  console.log(seasonResult);
  return (
    <div>
      {seasonResult == "winter" ? "Bring a hat" : "Bring one or 2 beers"}
    </div>
  );
};

export default Season;
