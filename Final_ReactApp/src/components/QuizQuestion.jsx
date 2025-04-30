import React from "react";

const QuizQuestion = ({ question }) => {
  return (
    <div className="quiz-question-box">
      <h1>{question}</h1>
    </div>
  );
};

export default QuizQuestion;
