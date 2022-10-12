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
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const chooseWord = () => {
    const categories = Object.keys(words);

    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return {word, category};
  };

  const startGame = () => {
    const {word, category} = chooseWord();

    let wordLetters = word.split("")

    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(word, category)
    console.log(wordLetters)

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters)

    setGameStage(stages[1].name);
    
  };

  const verifyLetter = () => {
    setGameStage(stages[2].name);
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div>
      {gameStage === "start" && <Home startGame={startGame} />}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} />}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default index;
