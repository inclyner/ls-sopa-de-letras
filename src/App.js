import "./assets/styles/App.css";
import { useEffect, useState } from "react";
import { ControlPanel, Header, GamePanel } from "./components";
import shuffleArray from "./components/helpers/shuffleArray";
import GameOverModal from "./components/exit-screen/game-over-modal.component";

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(0);
  const [numOfWords, setNumOfWords] = useState(0);
  const [absoluteTime, setAbsoluteTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  let timerId = undefined;

  useEffect(() => {
    console.log(gameStarted);
    if (gameStarted) {
      timerId = setInterval(() => {
        let nextTimer;
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          if (nextTimer === 0) {
            setTimer(0);
            setGameStarted(false);
          }
          return nextTimer;
        });
      }, 1000);
    } else if (timer !== absoluteTime) {
      setTimer(absoluteTime);
    }

    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [gameStarted]);

  const handleGameStart = () => {
    if (gameStarted) {
      setGameStarted(false);
      setIsModalOpen(true);
    } else if (selectedLevel != "0") {
      setTotalPoints(0);
      setIsModalOpen(false);
      setGameStarted(true);
    }
  };


  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
    switch (value) {
      case "1":
        setNumOfWords(6);
        setAbsoluteTime(80);
        setTimer(80);
        break;
      case "2":
        setNumOfWords(10);
        setAbsoluteTime(120);
        setTimer(120);
        break;
      case "3":
        setNumOfWords(12);
        setAbsoluteTime(160);
        setTimer(160);
        break;
      default:
        setNumOfWords(0);
        setAbsoluteTime(0);
        setTimer(0);
        break;
    }
  };
  const updatePoints = (operacaoSoma = true) => {
    let pointsSum = totalPoints;
    if (operacaoSoma) {
    pointsSum += timer * (numOfWords / 2);
    } else {
    pointsSum < 5 ? (pointsSum = 0) : (pointsSum -= 5);
    }
    setTotalPoints(pointsSum);}

    const handleCloseModal=()=>{
      setIsModalOpen(!isModalOpen);
    }
  return (
    <div id="container">
      <Header />
      <ControlPanel
        gameStarted={gameStarted}
        selectedLevel={selectedLevel}
        onGameStart={handleGameStart}
        onSelectedLevel={handleLevelChange}
        timer={timer}
        points = {totalPoints}
      />
            <GameOverModal
      points = {totalPoints}
      gameStarted = {gameStarted}
      />
      <GamePanel
        numOfWords={numOfWords}
        selectedLevel={selectedLevel}
        gameStarted={gameStarted}
        onGameStart={handleGameStart}
        updatePoints = {updatePoints}
      />
    </div>
  );
}

export default App;
