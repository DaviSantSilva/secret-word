import React from "react";

const Game = ({ verifyLetter }) => {
  return (
    <div class="game" className="h-full w-full  flex justify-center mt-32">
      <div className="bg-project-yelllow flex flex-col h-full w-fit justify-center mt-20 rounded-lg md:scale-150">
        <div className="bg-red-600 w-full flex justify-center text-5xl ">Adivinhe a palavra</div>
        <div className="bg-green-600 flex justify-center pt-14 text-4xl">
          <div>Dica-</div>
          <div className="font-bold ml-1">*xxx*</div>
        </div>
        <div className="bg-orange-600 flex justify-center pt-10 text-xl" >
          <div> P A L A V R A </div>
          <div> bs </div>
        </div>
        <div className="bg-blue-500 flex justify-center pt-10 text-xl font-semibold"> selecione uma letra de A-Z </div>
        <div className="flex justify-center">
          <form action="submit" className="flex flex-col bg-red-700 w-1/2 pt-8 ">
            <input type="text" name="letter" maxLength='1' required className="w-10 flex ml-20 "/>
            <button onClick={verifyLetter} className="bg-project-nautilus mt-10 rounded-full w-1/2 ml-12  text-2xl border-2 outline-1 hover:bg-project-green">Revelar</button>
          </form>
        </div>
        <div className="bg-green-600 flex justify-center text-xl">
          <div>Letras utilizadas - </div>
          <div className="font-bold ml-2">*xxx*, -xxx-, -xxx*</div>
        </div>
      </div>
    </div>
  );
};

export default Game;
