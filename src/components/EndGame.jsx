import PropTypes from 'prop-types'
const EndGame = ({ retry, score }) => {
  return (
    <div>
        <h1>Parabéns!!</h1>
        <h2>Sua pontuação foi de <span>{ score }</span></h2>
        <button onClick={ retry }>Jogar Novamente</button>
    </div>

    
  )
}

EndGame.propTypes = {
  retry: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
}

export default EndGame