import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/StartMoodieChoosePath.css";

function ChoosePath() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
      <div className="choose-path-card">
        <h1 className="choose-path-heading">Choose a path</h1>

        <div className="choose-path-buttons">
          <button
            onClick={() => handleClick("/quizflow")}
            className="choose-path-btn quiz-btn"
          >
            Mood quiz
          </button>
          <button
            onClick={() => handleClick("/genre")}
            className="choose-path-btn random-btn"
          >
            Random Movie Generator
          </button>
        </div>

        <p className="choose-path-description">
          Not sure what you're in the mood for? Spin the wheel or take the quiz!
        </p>
      </div>
  );
}

export default ChoosePath;
