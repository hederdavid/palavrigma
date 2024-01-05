import PropTypes from "prop-types";
import palavrigma from "../assets/img/palavrigma-logo.png";
const EndGame = ({ retry, score }) => {
  let frase = "";

  if (score < 100) {
    frase =
      "Ops! Parece que você está precisando de mais prática. Não desista, você chega lá!";
  } else if (score < 200) {
    frase = "Hmm, quase lá! Continue assim e logo estará dominando!";
  } else if (score < 300) {
    frase = "Continue assim! Você está no caminho certo!";
  } else if (score < 400) {
    frase = "Uau! Está indo muito bem! Continue brilhando!";
  } else if (score < 500) {
    frase = "Você é incrível! Continue superando seus limites!";
  } else if (score < 1000) {
    frase = "Fantástico! Você está se destacando cada vez mais!";
  } else if (score < 1500) {
    frase = "Impressionante! Seu desempenho é digno de aplausos!";
  } else if (score < 2000) {
    frase = "Você é um mestre! Continue elevando o nível!";
  } else if (score < 2500) {
    frase = "Incrível! Seu talento é indiscutível!";
  } else if (score < 3000) {
    frase = "Caramba, você é um gênio! Continue assim!";
  } else {
    frase =
      "Incrível! Você é uma verdadeira lenda! Não há desafio grande demais para você!";
  }

  console.log(frase);

  return (
    <div className="flex flex-col items-center text-center p-4 gap-8 h-screen justify-center align-middle">
      <h1 className="text-3xl">{frase}</h1>
      <h2 className="text-xl ">
        Sua pontuação foi de <span className="text-blue-700">{score}</span>
      </h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-xl inline-block mx-16 px-4 "
        onClick={retry}
      >
        Jogar Novamente
      </button>
      <img className="pt-12 md:w-1/3" src={palavrigma} alt="" />
    </div>
  );
};

EndGame.propTypes = {
  retry: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default EndGame;
