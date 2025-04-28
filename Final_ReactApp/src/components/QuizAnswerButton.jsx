import React from "react";
import "../styles/QuizAnswerButton.css";

const QuizAnswerButton = ({ quizAnswer, onClick }) => {
  return (
    <div className="quiz-answer-button-container">
      <button className="quiz-answer-button" onClick={onClick}>
        {/* This button will be dynamically generated based on the quiz question */}
        {quizAnswer}
      </button>
    </div>
  );
};

export default QuizAnswerButton;
