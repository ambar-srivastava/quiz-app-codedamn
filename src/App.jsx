import React, { useState } from "react";
import "./App.css";
import EndGame from "./Components/EndGame";
import Menu from "./Components/Menu";
import Quiz from "./Components/Quiz";
import { GameStateContext } from "./Helpers/Contexts";

const App = () => {
  const [gameState, setGameState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <GameStateContext.Provider
        value={{
          gameState,
          setGameState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {gameState === "menu" && <Menu />}
        {gameState === "playing" && <Quiz />}
        {gameState === "finished" && <EndGame />}
      </GameStateContext.Provider>
    </div>
  );
};

export default App;
