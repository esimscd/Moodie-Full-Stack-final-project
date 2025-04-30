import React from "react";
import "../styles/QuizQuestion.css";

const QuizQuestion = ({ question, image }) => {
  return (
    <div className="quiz-question-box">
      <h1 className="question-wording">{question}</h1>
      {/* Conditionally render the image if image is provided as part of the question */}
      {image && (
        <div className="question-image">
          <img src={image} alt="question image" />
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
