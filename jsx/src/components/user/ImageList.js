import React from "react";
import ImageCard from "./ImageCard";

// CSS
import "./ImageList.css";

const ImageList = (props) => {
  console.log(props);

  const img = props.images.map((img) => {
    // Key are for performance in loading the updated data
    return <ImageCard key={img.id} img={img} />;
  });
  return <div className="image-container">{img}</div>;
};

export default ImageList;
