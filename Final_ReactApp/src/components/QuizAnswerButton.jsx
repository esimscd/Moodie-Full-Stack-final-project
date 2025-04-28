import React from "react";

const QuizAnswerButton = ({ quizAnswer, onClick }) => {
  return (
    <div>
      <button className="quiz-answer-button" onClick={onClick}>
        {/* This button will be dynamically generated based on the quiz question */}
        {quizAnswer}
      </button>
    </div>
  );
};

export default QuizAnswerButton;
