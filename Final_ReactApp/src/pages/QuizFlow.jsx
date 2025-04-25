import React from "react";
import StartAgainNavbar from "../components/navbar/StartAgainNavbar";
import QuizQuestions from "../components/QuizQuestions";
import QuizResults from "../components/QuizResults";


const QuizFlow = () => {

  const [quizAnswers, setQuizAnswers] = useState ({})
  return (
    <>
      <StartAgainNavbar/>
      <h1>This is the Quiz page!</h1>
      <QuizQuestions quizAnswers ={quizAnswers} setQuizAnswers = {setQuizAnswers} />
      <QuizResults quizAnswers = {quizAnswers}/>
    </>
  );
};

export default QuizFlow;
