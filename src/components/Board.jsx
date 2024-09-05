import React, { useState } from 'react'
import Cell from './Cell'

function Board() {
  const [player,setPlayer] = useState(1);
  const [cells, setCells] = useState([]);

  const checkWin = () => {
    const situations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6] ];
    for (let situation of situations){
      
    }

  }
  const cellClicked = (index) => {

  }
  return (
    <div className="board">
        {cells.map((index,value) => <Cell key={index} value={value} onClick={()=>cellClicked(index)} ></Cell>)}

    </div>
  )
}

export default Board