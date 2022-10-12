import React from "react";

const Game = ({ verifyLetter }) => {
  return (
    <div className="game">
      <div> Game</div>
      <button onClick={verifyLetter}>Finalizar</button>
    </div>
  );
};

export default Game;
