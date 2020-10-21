import React from 'react'

const StatusMessage = ({ winner, current }) => {
  const isNoMovesLeft = current.board.every(elem => elem !== null);

  return (
    <div className="status">
      {winner &&
        <div className="status__item full">
          The winner is {winner}!
          <div className={`line ${winner === 'X' ? 'bgX' : 'bgO'}`}></div>
        </div>
      }
      {!winner && isNoMovesLeft &&
        <div className="status__item">
          `It's a tie!`
          <div className="line"></div>
        </div>
      }
      {!winner && !isNoMovesLeft &&
        // `Current player is ${current.isXNext ? 'X' : 'O'}`
        <div className={`status__item ${current.isXNext ? 'colorX' : 'not_active_color'}`}>
          X
          <div className={`line ${current.isXNext ? 'bgX' : 'not_active_bg'}`}></div>
        </div>
      }
      {!winner && !isNoMovesLeft &&
        // `Current player is ${current.isXNext ? 'X' : 'O'}`
        <div className={`status__item ${!current.isXNext ? 'colorO' : 'not_active_color'}`}>
          O
          <div className={`line ${!current.isXNext ? 'bgO' : 'not_active_bg'}`}></div>
        </div>
      }
    </div>
  )
}

export default StatusMessage
