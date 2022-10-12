import React from 'react'

const GameOver = ({retry}) => {
  return (
    <div className='end'>
        <div>GameOver</div>
        <button onClick={retry}>Jogar</button>
    </div>
  )
}

export default GameOver