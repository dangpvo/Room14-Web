import React from "react";
import { GAME_STATE } from "../../assets/GameState";

const GameOver = ({ gameState }) => {
  switch (gameState) {
    case GAME_STATE.inProgress:
      return <></>;
    case GAME_STATE.playerOWins:
      return <div className="game-over">O Wins</div>;
    case GAME_STATE.playerXWins:
      return <div className="game-over">X Wins</div>;
    case GAME_STATE.draw:
      return <div className="game-over">Draw</div>;
    default:
      return <></>;
  }

  return <div>GameOver</div>;
};

export default GameOver;
