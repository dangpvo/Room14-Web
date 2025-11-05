import React from "react";
import "./Strike.css";

const Strike = ({ strikeClass }) => {
  return <div className={`strike ${strikeClass}`}></div>;
};

export default Strike;
