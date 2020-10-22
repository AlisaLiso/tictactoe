import React, { useState } from "react";
import Board from "./components/Board";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from './helpers';

import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const { winner, winnerSquares } = calculateWinner(current.board);

  const handleSquareClick = (position) => {
    if (current.board[position] || winner) return;

    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      })

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    })

    setCurrentMove(prev => ++prev);
  }

  const onNewGame = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  }

  return (
    <div className="container">
      <div>
        <div className="container__item">
          <h1>Let&rsquo;s Play the Tic-Tac-Toe Game!</h1>
          <div className="left">
            <button className="btn" onClick={onNewGame} type="button">New Game</button>
          </div>
        </div>
        <div className="container__item">
          <StatusMessage winner={winner} current={current} />
          <Board board={current.board} handleSquareClick={handleSquareClick} winnerSquares={winnerSquares} />
          {/* <History history={history} moveTo={(move) => { setCurrentMove(move) }} currentMove={currentMove} /> */}
        </div>
      </div>
    </div>
  );
}
export default App;
