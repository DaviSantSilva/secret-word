import React from "react";
import { useState, useRef } from "react";


const Game = ({
  verifyLetter,
  pickedCategory,
  pickedWord,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);

    setLetter("");

    letterInputRef.current.focus()
  };

  return (
    <div className="h-full w-full  flex justify-center mt-32">
      <div className="bg-project-yelllow flex flex-col h-full w-fit justify-center mt-20 rounded-lg md:scale-150">
        <div className="bg-red-600 w-full flex justify-center text-5xl ">
          Adivinhe a palavra
        </div>
        <div className="bg-pink-600 flex justify-center pt-2 text-xl">{score} Pontos</div>
        <div className="bg-green-600 flex justify-center pt-14 text-4xl">
          <div>Dica-</div>
          <div className="font-bold ml-1">{pickedCategory}</div>
        </div>
        <div className="bg-orange-600 flex justify-center pt-10 text-xl">
          {letters.map((letter, i) =>
            guessedLetters.includes(letter) ? (
              <div className="p-2">{letter}</div>
            ) : (
              <div className="p-2">_</div>
            )
          )}
        </div>
        <div className="flex justify-center bg-purple-700">
          {" "}
          você ainda tem {guesses} tentativas{" "}
        </div>
        <div className="bg-blue-500 flex justify-center pt-10 text-xl font-semibold">
          {" "}
          selecione uma letra de A-Z{" "}
        </div>
        <div className="flex justify-center">
          <form
            action="submit"
            className="flex flex-col bg-red-700 w-1/2 pt-8 "
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="letter"
              maxLength="1"
              required
              className="w-10 flex ml-20 "
              onChange={(e) => setLetter(e.target.value.toLocaleLowerCase())}
              value={letter}
              ref={letterInputRef}
            />
            <button
              onClick={verifyLetter}
              className="bg-project-nautilus mt-10 rounded-full w-1/2 ml-12  text-2xl border-2 outline-1 hover:bg-project-green"
            >
              Revelar
            </button>
          </form>
        </div>
        <div className="bg-green-600 flex justify-center text-xl">
          <div>Letras utilizadas - </div>
          <div className="font-bold ml-2 flex">
            {wrongLetters.map((letter, i) => (
              <div key={i} className='mr-1' >{letter},</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
