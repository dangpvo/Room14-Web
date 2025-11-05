import React from "react";
import "./Tile.css";

const Tile = ({ className }) => {
  return <div className={`tile ${className}`}>X</div>;
};

export default Tile;
