import { useState, useRef } from "react";

import PropTypes from "prop-types";
import {
  screenAnimal,
  screenAlimento,
  screenPais,
  screenProfissao,
  screenEsporte,
  screenTransporte,
  screenInstrumento,
  screenBebida,
} from "../data/screenCategory";

const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);
  let screen;

  if (pickedCategory === "Alimento") {
    screen = screenAlimento;
  } else if (pickedCategory === "Animal") {
    screen = screenAnimal;
  } else if (pickedCategory === "País") {
    screen = screenPais;
  } else if (pickedCategory === "Profissão") {
    screen = screenProfissao;
  } else if (pickedCategory === "Esporte") {
    screen = screenEsporte;
  } else if (pickedCategory === "Transporte") {
    screen = screenTransporte;
  } else if (pickedCategory === "Instrumento") {
    screen = screenInstrumento;
  } else {
    screen = screenBebida;
  }
  {
    const handleSubmit = (e) => {
      e.preventDefault();
      verifyLetter(letter);
      setLetter("");
      letterInputRef.current.focus();
    };
    return (
      <div
        className={
          "flex h-screen flex-col items-center justify-center py-6 px-2 gap-4 " +
          screen.bg
        }
      >
        <div className="">
          <img className="h-64 md:h-72" src={screen.img} alt={screen.alt} />
        </div>
        <p>
          Pontuação:<span className={screen.color}> {score} </span>
        </p>
        <p>
          Você ainda tem <span className={screen.color}>{guesses}</span>{" "}
          tentativas
        </p>
        <div className={"border-8 " + screen.border}>
          <div className="flex px-2 py-3">
            {letters.map((letter, i) =>
              guessedLetters.includes(letter) ? (
                <span
                  key={i}
                  className="border-2 border-black h-7 w-7 uppercase bg-white text-black"
                >
                  {letter}
                </span>
              ) : (
                <span
                  key={i}
                  className="border-2 border-black h-7 w-7 uppercase bg-white text-black"
                ></span>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>Escolha uma letra:</p>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              className={
                "text-4xl w-12 flex pl-3 border-2 focus:outline-none border-black focus:ring-1 " +
                screen.focus
              }
              type="text"
              name="letter"
              maxLength="1"
              required
              onChange={(e) => setLetter(e.target.value)}
              value={letter}
              ref={letterInputRef}
            />
            <button
              className={
                screen.buttom + " text-white font-bold py-2 px-4 rounded"
              }
            >
              Jogar
            </button>
          </form>
          <div>
            <p>
              Letras já jogadas:{" "}
              {wrongLetters.map((letter, i) => (
                <span key={i}>{letter} </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  }
};

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  letters: PropTypes.array.isRequired,
  guessedLetters: PropTypes.array.isRequired,
  wrongLetters: PropTypes.array.isRequired,
  guesses: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Game;
