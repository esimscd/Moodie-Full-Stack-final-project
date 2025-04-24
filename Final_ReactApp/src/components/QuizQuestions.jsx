import React from "react";
import { useState } from "react";
import "../styles/QuizQuestions.css";

const QuizQuestions = () => {
  // Utilise useState to manage the current question to to be displayed and the options for answers
  const [currentIndex, setCurrentIndex] = useState(0);
  // Utilise useState to manage the answers selected by the user
  // Quiz Answers will initially be an empty object and will be updated each time a user selects an answer
  // Note: the Below state is not in use yet but we will need to use it to store the answers and then pass this to the API
  const [quizAnswers, setQuizAnswers] = useState({});

  // Array containing quiz questions and different options for the corresponding buttons
  // We can potential abstract this out into a JSON file to make it easier to manage but for an MVP it does the work!
  const quizQuestions = [
    {
      id: "ageRange",
      question: "Who will be watching the movie?",
      options: ["12 and under", "Between 12 and 15", "18+", "Mixture of Ages"],
    },
    {
      id: "genre",
      question: "What genre are you interested in?",
      options: ["Fantasy", "Horror", "Romantic", "Thriller"],
    },
    {
      id: "filmReleaseDate",
      question: "What decade of film are you interested in?",
      options: ["1920s", "1930s", "1940s", "1950s"],
    },
    {
      id: "countryOfOrigin",
      question: "What country of origin are you interested in?",
      options: ["USA", "UK", "France", "Germany"],
    },
    {
      id: "ratingsRange",
      question: "What ratings range of film are you interested in?",
      options: ["0-5", "5-10", "10-15", "15+"],
    },
    {
      id: "runTime",
      question: "What run time of film are you interested in?",
      options: [
        "0-30 minutes",
        "30-60 minutes",
        "60-90 minutes",
        "90+ minutes",
      ],
    },
    {
      id: "mostCommonAdjective",
      question: "What is the most common adjective in reviews?",
      options: ["Great", "Good", "Bad", "Terrible"],
    },
  ];

  const currentQuestion = quizQuestions[currentIndex];

  // Function to handle the answer that is chosen by the user
  // Updates the quizAnswers state with the selected answer
  // Increments the currentIndex to enable the quiz to move to the next question
  const handleAnswer = (questionId, answer) => {
    setQuizAnswers((quizAnswers) => ({
      ...quizAnswers,
      [questionId]: answer,
    }));
    console.log(quizAnswers);
    // Move to the next question
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <>
      {currentIndex < quizQuestions.length - 1 ? (
        <>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option) => (
            // We will need to add a key to each of the buttons to ensure that React can identify them
            // We can also create button components to make it easier to manage
            <button
              key={option}
              onClick={() => handleAnswer(currentQuestion.id, option)}
            >
              {option}
            </button>
          ))}
        </>
      ) : (
        <>
          {/* This is purely for development purposes and will be removed in the final version */}
          <h3 className="answers">Your Answers:</h3>
          <pre className="answers">{JSON.stringify(quizAnswers, null, 2)}</pre>
        </>
      )}
    </>
  );
};

export default QuizQuestions;
