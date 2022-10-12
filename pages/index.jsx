import React from "react";
import { Home } from "./Home";
import Game from "./Game";
import GameOver from "./GameOver";
import { useCallback, useEffect, useState } from "react";
import { wordsList } from "../src/data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function index() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const startGame = () => {
    setGameStage(stages[1].name);
  };

  return (
    <div>
      {gameStage === "start" && <Home startGame={startGame} />}
      {gameStage === "game" && <Game />}
      {gameStage === "end" && <GameOver />}
    </div>
  );
}

export default index;
