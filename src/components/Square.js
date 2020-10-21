import React from 'react'

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button className="square" type="button" style={{
      fontWeight: isWinningSquare ? 'bold' : 'normal'
    }} onClick={onClick}><div className={`${value}`}></div></button>
  )
}

export default Square;
