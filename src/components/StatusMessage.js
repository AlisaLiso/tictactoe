import React from 'react'

const StatusMessage = ({ winner, current }) => {
  const isNoMovesLeft = current.board.every(elem => elem !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !isNoMovesLeft && `Current player is ${current.isXNext ? 'X' : 'O'}`}
      {!winner && isNoMovesLeft && `It's a tie!`}
    </h2>
  )
}

export default StatusMessage
