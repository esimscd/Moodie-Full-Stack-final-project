import React from "react";
import StartMoodieNavbar from "../components/navbar/StartMoodieNavbar";
import QuizQuestions from "../components/QuizQuestions";

const Quiz = () => {
  return (
    <>
      <StartMoodieNavbar />
      <h1>This is the Quiz page!</h1>
      <QuizQuestions />
    </>
  );
};

export default Quiz;
