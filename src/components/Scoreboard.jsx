import React from 'react'

function Scoreboard(props) {
  return (
    <div className='scoreboard'>
      <h1 style={{color: props.color}}>Player {props.player}</h1>
      <p className="point">Puan: 7</p>
      <p className="win">Kazanılan: 2</p>
      <p className="lose">Kaybedilen: 3</p>
    </div>
  )
}

export default Scoreboard