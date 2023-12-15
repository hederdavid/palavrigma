import PropTypes from 'prop-types';
import logo from '../assets/img/logo.png'

const StartScreen = ({ gameScreen, personApresentation }) => {
  return (
    <div>
      <h1 className='text-5xl pb-3'>PalaVrigma</h1>
      <div className='flex justify-center'>
        <img className='h-80' src={logo} alt="Personagens" />
      </div>
      <button className="bg-yellow-400 text-white font-bold py-3 px-16 rounded-full transition-transform transform hover:scale-125 duration-300 ease-in-out text-2xl" onClick={gameScreen}>
      Jogar
    </button>
    <button className='bg-blue-200' onClick={personApresentation}>Conheça os Personagem</button>
    </div>
  );
};

StartScreen.propTypes = {
  gameScreen: PropTypes.func.isRequired,
  personApresentation: PropTypes.func.isRequired,
};

export default StartScreen;




