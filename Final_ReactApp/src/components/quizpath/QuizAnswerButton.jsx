import "../../styles/QuizAnswerButton.css";

const QuizAnswerButton = ({ quizAnswer, onClick }) => {
  return (
    <>
      <button className="quiz-answer-button" onClick={onClick}>
        {/* This button will be dynamically generated based on the quiz question */}
        {quizAnswer}
      </button>
    </>
  );
};

export default QuizAnswerButton;
