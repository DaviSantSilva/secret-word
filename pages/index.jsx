import React from "react";
import { Home } from "./Home";
import Game from "./Game";
import GameOver from "./GameOver";
import { useCallback, useEffect, useState } from "react";
import { wordsList } from "../src/data/words.js";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function Index() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState({
    letters: [{ letter: "b", isGuessed: true }],
    tries: [{ letter: "b", isCorrect: true }],
    rules: { maxTries: 3 },
  });

  const chooseWord = () => {
    const categories = Object.keys(words);

    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  };

  const getMaxTries = (word) => {
    return Math.ceil(word.length / 2);
  };

  const startGame = () => {
    const { word, category } = chooseWord();

    const maxTries = getMaxTries(word);

    const letters = word.split("").map((letter) => {
      return {
        letter,
        isGuessed: false,
      };
    });

    const tries = [];
    setGameState({
      letters,
      tries,
      rules: { maxTries },
    });
    console.debug(word, category, letters, gameState);

    setPickedWord(word);
    setPickedCategory(category);

    setGameStage(stages[1].name);

    console.debug("start game");
  };

  const verifyLetter = (letter) => {
    guessedLetters(setLetters);

    console.debug("veryfied letters");
  };

  const retry = () => {
    setGameStage(stages[0].name);
  };

  return (
    <div>
      {gameStage === "start" && <Home startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          score={score}
          gameState={gameState}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} />}
    </div>
  );
}

export default Index;
