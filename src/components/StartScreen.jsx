import PropTypes from "prop-types";
import logo from "../assets/img/logo.png";
import logoPalavrigma from "../assets/img/palavrigma-logo.png";

const StartScreen = ({ startGame, personApresentation }) => {
  return (
    <div className="flex flex-col p-4 gap-6 md:items-center h-screen">
      <div className="flex flex-col gap-8 ">
        <img className="pt-8" src={logoPalavrigma} alt="logo palavrigma" />
        <img className="md:w-1/2 self-center" src={logo} alt="Personagens" />
      </div>
      <div className="flex flex-col items-center pt-10">
        <button
          className="py-3 w-1/2 bg-blue-500 text-white font-bold rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out text-2xl"
          onClick={startGame}
        >
          Jogar
        </button>
        <button className="mt-4 py-3 px-3 bg-blue-500 text-white font-bold rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out" onClick={personApresentation}>
          Conheça os Personagem
        </button>
      </div>
    </div>
  );
};

StartScreen.propTypes = {
  startGame: PropTypes.func.isRequired,
  personApresentation: PropTypes.func.isRequired,
};

export default StartScreen;
