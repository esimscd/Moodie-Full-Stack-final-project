import React, { useState, useEffect } from "react";
import StartAgainNavbar from "../components/navbar/StartAgainNavbar";
import QuizQuestions from "../components/QuizQuestions";
import QuizResults from "../components/QuizResults";


const QuizFlow = () => {

  const [quizAnswers, setQuizAnswers] = useState ({})
  const [quizComplete, setQuizComplete] = useState (false);

  useEffect (() => {
    //Checking if all qs are answered, hardcoded as 5 so not ideal but hard to get length in here
    if (Object.keys(quizAnswers).length === 5){
      setQuizComplete(true);
    }
  }, [quizAnswers]); //Quiz answers as dependency

  return (
    <>
      <StartAgainNavbar/>
      <h1>This is the Quiz page!</h1>
      <QuizQuestions quizAnswers ={quizAnswers} setQuizAnswers = {setQuizAnswers} setQuizComplete = {setQuizComplete}/>
      {quizComplete && (<QuizResults quizAnswers = {quizAnswers}/> )}
    </>
  );
};

export default QuizFlow;
