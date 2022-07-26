import React, { useContext } from "react";
import { GameStateContext } from "../Helpers/Contexts";
import { Questions } from "../Helpers/Questions";

const EndGame = () => {
  const { setGameState, score, setScore, userName } =
    useContext(GameStateContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };

  return (
    <div className="EndGame">
      <h1>Quiz Finished</h1>
      <h2>{userName}</h2>
      <h1>
        {score} / {Questions.length}
      </h1>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
};

export default EndGame;
