// This component displays each quiz question one at a time and records the user's answers.
// Based on their responses, we build a profile to filter movie recommendations later.

import React, { useState } from "react";
import "../../styles/QuizQuestions.css";
import QuizAnswerButton from "./QuizAnswerButton";

// Images used for each quiz question to give a visual cue
import duneImage from "../../assets/quizImages/chalamet-ferguson-dune.jpg";
import beforeSunsetImage from "../../assets/quizImages/hawke-delpy-before-sunset.png";
import niagaraImage from "../../assets/quizImages/monroe-niagra.png";
import neverendingStoryImage from "../../assets/quizImages/never-ending-story.png";
import badBoysImage from "../../assets/quizImages/smith-lawrence-bad-boys.jpg";

// Props passed from parent: quizAnswers (all selected answers so far) and setQuizAnswers (function to update them)
const QuizQuestions = ({ quizAnswers, setQuizAnswers }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // We track which question the user is currently on

  // This is our list of questions for the quiz
  const quizQuestions = [
    {
      id: "eveningGenre", // used as the answer key
      question: "Pick your ideal evening vibe:", // This is the first genre filter
      options: [
        { label: "Fun, vibrant and lighthearted", value: 16 }, // Animation
        { label: "Creeping myself out for no reason", value: 27 }, // Horror
        { label: "Blanket, burrito and snacks", value: 10749 }, // Romance
        { label: "Thinking about the universe and stuff", value: 878 }, // Sci-Fi
      ],
      image: duneImage,
    },
    {
      id: "endingGenre", // second genre filter
      question: "At the end of the evening, how would you like to feel?",
      options: [
        { label: "Playful and carefree", value: 35 }, // Comedy
        { label: "Twisted with suspense ", value: 53 }, // Thriller
        { label: "Like I'm in an enchanted realm", value: 14 }, // Fantasy
        { label: "Exhilirated and like I'm ready to kick butt", value: 28 }, // Action
      ],
      image: beforeSunsetImage,
    },
    {
      id: "voteAverage", // rating preference
      question: "As a film connoisseur, how would you describe your taste?",
      options: [
        { label: "Good with an affinity for trash", value: 4 },
        { label: "Decent, but I'm no snob", value: 6 },
        { label: "Only the finest for me", value: 8 },
      ],
      image: niagaraImage,
    },
    {
      id: "filmReleaseDate", // release date filter
      question: "Which two fashion accessories are you mostly likely to own?",
      options: [
        {
          label: "Pearl earrings and bellbottom jeans",
          value: { start: "1950-01-01", end: "1979-12-31" },
        },
        {
          label: "Scrunchies and flannel shirts",
          value: { start: "1980-01-01", end: "1999-12-31" },
        },
        {
          label: "A studded belt and chunky sneakers",
          value: { start: "2000-01-01", end: "2025-12-31" },
        },
      ],
      image: neverendingStoryImage,
    },
    {
      id: "runTime", // how much time the user has
      question: "Finally, how long have you got?",
      options: [
        { label: "I'm in a rush", value: 60 },
        { label: "I've got a bit of time", value: 90 },
        { label: "I've got a while", value: 120 },
        { label: "I've got all the time in the world", value: 150 },
      ],
      image: badBoysImage,
    },
  ];

  // This grabs the question the user is currently viewing
  const currentQuestion = quizQuestions[currentIndex];

  // When a user selects an answer, this function:
  // - updates the quizAnswers object with the selected answer
  // - moves the user to the next question
  const handleAnswer = (questionId, answer) => {
    const updatedAnswers = {
      ...quizAnswers,
      [questionId]: answer,
    };

    setQuizAnswers(updatedAnswers);
    setCurrentIndex((prev) => prev + 1); // Show next question
  };

  // Once all questions have been answered, parent displays the results instead.
  if (currentIndex >= quizQuestions.length) return null;

  return (
    <div className="quiz-question-wrapper">
      <div className="quiz-question-box">
        {/* Show the question text */}
        <h2 className="question-wording">{currentQuestion.question}</h2>

        {/* Display the related image for the question */}
        <div className="image-container">
          <img
            src={currentQuestion.image}
            alt="Question image"
            id="question-image"
          />
        </div>

        {/* List all answer options as buttons */}
        <div className="quiz-options-container">
          {currentQuestion.options.map((option, index) => (
            <QuizAnswerButton
              key={option.label + index}
              onClick={() => handleAnswer(currentQuestion.id, option.value)}
              quizAnswer={option.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizQuestions;
