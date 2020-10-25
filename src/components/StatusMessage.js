import React, { useEffect } from 'react'
import '../confetti';


const StatusMessage = ({ winner, current, score, setScore }) => {
  const isNoMovesLeft = current.board.every(elem => elem !== null);

  useEffect(() => {
    if (winner) {
      setScore(prev => {
        if (winner === 'X') {
          return { x: ++prev.x, o: prev.o }
        } else {
          return { x: prev.x, o: ++prev.o }
        }
      });
      window.initBurst();
    }
  }, [winner]);

  return (
    <div className="status" id="status">
      { winner &&
        <div className="status__item full">
          The winner is {winner}!
          <div className={`line ${winner === 'X' ? 'bgX' : 'bgO'}`}></div>
        </div>
      }
      {
        !winner && isNoMovesLeft &&
        <div className="status__item full">
          It's a tie!
          <div className="line not_active_bg"></div>
        </div>
      }
      {
        !winner && !isNoMovesLeft &&
        <div className={`status__item ${current.isXNext ? 'colorX' : 'not_active_color'}`}>
          X
          <div className={`line ${current.isXNext ? 'bgX' : 'not_active_bg'}`}></div>
        </div>
      }
      {!winner && !isNoMovesLeft &&
        <div className="score">
          <div className="score-item">{score.x}</div>:
          <div className="score-item">{score.o}</div>
        </div>
      }
      {
        !winner && !isNoMovesLeft &&
        <div className={`status__item ${!current.isXNext ? 'colorO' : 'not_active_color'}`}>
          O
          <div className={`line ${!current.isXNext ? 'bgO' : 'not_active_bg'}`}></div>
        </div>
      }
      <canvas id="confetti"></canvas>
    </div >
  )
}

export default StatusMessage
