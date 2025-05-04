import React from "react";
import "../styles/QuizQuestion.css";
import Danni from "../assets/TeamAvatars/Danni.png";

const QuizQuestion = ({ question, image }) => {
   return (
      <>
         <div className="quiz-question-container">
            <div className="quiz-content-container">
               <div className="quiz-question-box">
                  <h1 className="question-wording">{question}</h1>
                  {/* Conditionally render the image if image is provided as part of the question */}
               </div>
            </div>
            <div className="image-container">
               {image && (
                  <div className="question-image">
                     <img src={image} alt="question image" />
                  </div>
               )}
               <div className="question-image">
                  <img id="danni" src={Danni} alt="" />{" "}
                  {/* This is a placeholder for the real images */}
               </div>
            </div>
         </div>
      </>
   );
};

export default QuizQuestion;
