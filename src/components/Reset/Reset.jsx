import React from "react";
import "./Reset.css";
import { GAME_STATE } from "../../assets/GameState";

const Reset = ({ gameState, onReset }) => {
  if (gameState === GAME_STATE.inProgress) {
    return;
  }

  return (
    <button className="reset-button" onClick={onReset}>
      Play Again
    </button>
  );
};

export default Reset;
