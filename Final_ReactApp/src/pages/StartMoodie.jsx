import React from "react";
import StartMoodieNavbar from "../components/navbar/StartMoodieNavbar";
import { Link } from "react-router-dom";

const StartMoodie = () => {
  return (
    <>
      {/* <Navbar /> */}
      <StartMoodieNavbar />
      <h1>This is the Start Moodie page!</h1>
      <Link to="/quizquestions">
        <button>Take the Quiz</button>
      </Link>
    </>
  );
};

export default StartMoodie;
