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
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMessage winner={winner} current={current} />
      <Board board={current.board} handleSquareClick={handleSquareClick} winnerSquares={winnerSquares} />
      <button onClick={onNewGame} type="button">New game</button>
      <History history={history} moveTo={(move) => { setCurrentMove(move) }} currentMove={currentMove} />
    </div>
  );
}
export default App;
