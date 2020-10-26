import React, { useState } from "react";
import Board from "./components/Board";
import StatusMessage from "./components/StatusMessage";
import { calculateWinner } from './helpers';
import ThemeSwitcher from './components/ThemeSwitcher';

import './styles/root.scss';

const NEW_GAME = [{ board: Array(9).fill(null), isXNext: true }];

function App() {
  const [history, setHistory] = useState(NEW_GAME);
  const [score, setScore] = useState({ x: 0, o: 0 });
  const [currentMove, setCurrentMove] = useState(0);
  const [isGameStarted, setIsGameStarted] = useState(false);

  const current = history[currentMove];

  const { winner, winnerSquares } = calculateWinner(current.board);

  const handleSquareClick = (position) => {
    setIsGameStarted(true);
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
    setIsGameStarted(false);
  }

  return (
    <div className="container">
      <ThemeSwitcher />
      <div>
        <div className="container__item">
          <h1>Let&rsquo;s Play the Tic-Tac-Toe Game!</h1>
          <div className="left">
            {isGameStarted &&
              <button className="btn" onClick={onNewGame} type="button">New Game</button>
            }
          </div>
        </div>
        <div className="container__item">
          <StatusMessage winner={winner} current={current} score={score} setScore={setScore} />
          <Board board={current.board} handleSquareClick={handleSquareClick} winnerSquares={winnerSquares} />
        </div>
      </div>
    </div>
  );
}
export default App;
