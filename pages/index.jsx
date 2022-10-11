import React from "react";

const index = () => {
  return (
    <div className="h-full w-full  flex justify-center mt-64">
      <div className="bg-project-yelllow h-ful w-fit flex flex-col text-center p-10 rounded-lg md:scale-150">
        <div className="text-5xl font-bold "> Secret Word</div>
        <div className="pt-6 text-lg border-b-2 font-light">
          Um jogo de adivinhar palavras
        </div>
        <button className="bg-project-nautilus mt-10 rounded-full w-full text-2xl border-2 outline-1 ">
          Começar partida
        </button>
      </div>
    </div>
  );
};

export default index;
