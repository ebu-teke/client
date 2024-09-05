import React, { useState } from 'react'
import Board from './components/Board'
import Scoreboard from './components/Scoreboard'

function App() {
  const  [player, setPlayer] = useState('X');
  const [score, setScore] = useState({"X":0,"O":0});
  const gameOver = (winner) => {

  }
  const switchPlayer = () => {
    setPlayer(player === "X" ? "O" : "X");
  }
  return (
    <div className="container">
      <div className='body'>
      <div className="left">
        <Scoreboard player="1" color="red"/>
      </div>
      <div className="middle">
        <h1>Tic Tac Toe</h1>
        <p>Click the boxes to mark them. Player 1 starts with X!</p>
        <Board currentPlayer={player} handleWin={gameOver} nextTurn={switchPlayer} />
      </div>
      <div className="right">
        <Scoreboard player="2" color="blue"/>
      </div>
    </div>
    <h2 className="footer">Copyright © {new Date().getFullYear()}</h2>
    </div>
    
  )
}

export default App