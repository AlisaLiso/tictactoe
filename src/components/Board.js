import React from 'react'
import Square from './Square';

const Board = () => {
  return (
    <div>
      <div>
        <Square value={1} />
        <Square value={1} />
        <Square value={1} />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
      <div>
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  )
}

export default Board
