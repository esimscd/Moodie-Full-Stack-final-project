import React from "react";
import { useState } from "react";
import "../styles/QuizQuestions.css";

const QuizQuestions = ({ quizAnswers, setQuizAnswers, setQuizComplete}) => {
  // Utilise useState to manage the current question to to be displayed and the options for answers
  const [currentIndex, setCurrentIndex] = useState(0);
  // Utilise useState to manage the answers selected by the user
  // Quiz Answers will initially be an empty object and will be updated each time a user selects an answer
  // Note: the Below state is not in use yet but we will need to use it to store the answers and then pass this to the API
  // const [quizAnswers, setQuizAnswers] = useState({});

  // Array containing quiz questions and different options for the corresponding buttons
  // We can potential abstract this out into a JSON file to make it easier to manage but for an MVP it does the work!
  const quizQuestions = [
    // {
    //   id: "ageRange",
    //   question: "Who will be watching the movie?",
    //   options: ["12 and under", "Between 12 and 15", "18+", "Mixture of Ages"],
    // },
    {//Set label value pairs for button so value is compatible with api - e.g. genre searches are done by genre id number
      id: "genre",
      question: "What genre are you interested in?",
      options: [
        {label: "Fantasy", value: 14},
        {label: "Comedy", value: 35},
        {label: "Horror", value: 27},
        {label: "Romantic", value: 10749},
        {label: "Thriller", value: 53}
      ]
    },
    {
      id: "filmReleaseDate",
      question: "What decade of film are you interested in?",
      options: [
        {label: "1920s", value: {start: "1920-01-01", end: "1929-12-01"}},
        {label: "1930s", value: {start: "1930-01-01", end: "1939-12-01"}},
        {label: "1940s", value: {start: "1940-01-01", end: "1949-12-01"}},
        {label: "1950s", value: {start: "1950-01-01", end: "1959-12-01"}}
      ]
    },
    {
      id: "countryOfOrigin",
      question: "What country of origin are you interested in?",
      options: [
        {label: "USA", value: "US"},
        {label: "UK", value: "GB"},
        {label: "France", value: "FR"},
        {label: "Germany", value: "DE"},
        {label: "Japan", value: "JP"}
        ]
    },
    {
      id: "ratingsRange",
      question: "How well rated should this film be?",
      options: [
        {label: "Terrible", value: 0},
        {label: "Okay", value: 5},
        {label: "Good", value: 7},
        {label: "Great", value: 8.5} //this question may need tweaking, I'm currently using the "rating" 0-10 system but there is a popularity filter
        //Popularity filter could be better as far as I can tell currently you can only "sort by" with it so doesn't matter much as 
        //I'm selecting a math.random one to display, but maybe this is tweaked to random from first 20 results? what if there aren't 20? 
        //
      ]
    },
    {
      id: "runTime",
      question: "How long have you got?",
      options: [
        {label: "I'm in a rush", value: 45},
        {label: "I've got a bit of time", value: 60},
        {label: "I've got a while", value: 90},
        {label: "I've got all the time in the world", value: 120}
      ]
    },
    // {
    //   id: "mostCommonAdjective",
    //   question: "What is the most common adjective in reviews?",
    //   options: ["Great", "Good", "Bad", "Terrible"],
    // },
  ];

  const currentQuestion = quizQuestions[currentIndex];

  // Function to handle the answer that is chosen by the user
  // Updates the quizAnswers state with the selected answer
  // Increments the currentIndex to enable the quiz to move to the next question
  const handleAnswer = (questionId, answer) => {
    const updatedAnswers = {
      ...quizAnswers,
      [questionId]: answer,
    }

    setQuizAnswers(updatedAnswers)
    console.log(quizAnswers);

    setCurrentIndex((prevIndex) => prevIndex + 1);

  };


  return (
    <>
      {currentIndex < quizQuestions.length ? (
        <>
          <h2>{currentQuestion.question}</h2>
          {currentQuestion.options.map((option, index) => (
            // We will need to add a key to each of the buttons to ensure that React can identify them
            // We can also create button components to make it easier to manage
            <button
              key={option.label + index}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
            >
              {option.label}
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
