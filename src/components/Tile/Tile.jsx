import React from "react";
import "./Tile.css";

const Tile = ({ className, value, onClick }) => {
  return (
    <div className={`tile ${className}`} onClick={onClick}>
      {value}
    </div>
  );
};

export default Tile;
