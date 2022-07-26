import React, { useState, useContext } from "react";
import { Questions } from "../Helpers/Questions";
import { GameStateContext } from "../Helpers/Contexts";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const { score, setScore, setGameState } =
    useContext(GameStateContext);

  const chooseOption = (option) => {
    setOptionChosen(option);
  };

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("finished");
  };

  return (
    <div className="Quiz">
      <h2>{Questions[currentQuestion].prompt}</h2>
      <div className="questions">
        <button className="btn" onClick={() => chooseOption("optionA")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button className="btn" onClick={() => chooseOption("optionB")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button className="btn" onClick={() => chooseOption("optionC")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button className="btn" onClick={() => chooseOption("optionD")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>
      {currentQuestion === Questions.length - 1 ? (
        <button onClick={finishQuiz}>Finish Quiz</button>
      ) : (
        <button onClick={nextQuestion}>Next Question</button>
      )}
    </div>
  );
};

export default Quiz;
