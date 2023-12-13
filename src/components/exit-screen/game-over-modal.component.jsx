//@ts-check
import React, { useEffect, useState } from "react";
import "./game-over-modal.css";


function GameOverModal({points, gameStarted }) {
  //let aux;
  const [primeiraVezAMudar,setPrimeiraVezAMudar] = useState(false);
  const [string,setString] = useState(false);
  /*
  const handleGameOver = ()=>{
    if (!primeiraVezAMudar){
      setPrimeiraVezAMudar(true);
    }
  }
  */



  return (
    <div id={gameStarted ? "hidden" : "gameOver"}>
        <header>
          <div></div>
        </header>
          <p>Pontuação: {points}</p>
        </div>
  );
}

export default GameOverModal;
