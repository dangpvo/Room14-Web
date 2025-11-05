import React from "react";
import Tile from "../Tile/Tile";
import Strike from "../Strike/Strike";
import "./Board.css";

const Board = () => {
  return (
    <div className="board">
      <Tile className="right-border bottom-border" />
      <Tile className="right-border bottom-border" />
      <Tile className="bottom-border" />
      <Tile className="right-border bottom-border" />
      <Tile className="right-border bottom-border" />
      <Tile className="bottom-border" />
      <Tile className="right-border" />
      <Tile className="right-border" />
      <Tile />
      <Strike />
    </div>
  );
};

export default Board;
