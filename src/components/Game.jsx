import { useState, useRef } from "react";
import SrKinkas from "../assets/img/SrKinkasGame.png";
import PropTypes from "prop-types";

const Game = ({
  verifyLetter,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault()
    verifyLetter(letter)
    setLetter("")
    letterInputRef.current.focus()
  }
  return (
    <div className="flex flex-col items-center justify-center py-6 px-2 gap-4">
      <div className="relative">
        <img className="pl-16 h-64" src={SrKinkas} alt="SrKinkas" />
        <h1 className="text-sm absolute top-2 right-10 z-10 ">
          Adivinhe se <br /> puder!
        </h1>
        <h3 className="text-sm absolute top-12 right-3 z-10">
          Dica: <span className="text-blue-500">{pickedCategory}</span>
        </h3>
      </div>
      <p>
        Pontuação:<span className="text-blue-500"> {score} </span>
      </p>
      <p>Você ainda tem <span className="text-blue-500">{guesses}</span> tentativas</p>
      <div className="border-8 border-blue-500">
        <div className="flex px-2 py-3">
          {letters.map((letter, i) => (
            guessedLetters.includes(letter) ? (
              <span
                key={i}
                className="border-2 border-black h-7 w-7 uppercase bg-white text-black"
              >{letter}</span>
            ) : (
              <span
                key={i}
                className="border-2 border-black h-7 w-7 uppercase bg-white text-black"
              ></span>
            )
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p>Escolha uma letra:</p>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            className="text-4xl w-12 flex pl-3 border-2 focus:outline-none border-black focus:border-cyan-500 focus:ring-1"
            type="text"
            name="letter"
            maxLength="1"
            required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Jogar
          </button>
        </form>
        <div>
          <p>
            Letras já jogadas: {wrongLetters.map((letter, i) => (
              <span key={i}>{letter} </span>

            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
  pickedWord: PropTypes.string.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  letters: PropTypes.array.isRequired,
  guessedLetters: PropTypes.array.isRequired,
  wrongLetters: PropTypes.array.isRequired,
  guesses: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Game;
