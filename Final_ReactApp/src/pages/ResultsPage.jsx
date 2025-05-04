import QuizResults from "../components/QuizResults";
import { useLocation, Link } from "react-router-dom";
import "../styles/ResultsPage.css";

const ResultsPage = () => {
  const location = useLocation();
  const quizAnswers = location.state?.quizAnswers;

  const handleShare = () => {
    const shareUrl = window.location.href;
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard! 📋");
  };

  if (!quizAnswers) {
    return (
      <div className="results-page-container">
        <h2>No quiz answers found.</h2>
        <p>Please complete the quiz first.</p>
        <Link to="/quiz" className="btn">
          Go to Quiz
        </Link>
      </div>
    );
  }

  return (
    <div className="results-page-container">
      <QuizResults quizAnswers={quizAnswers} />

      <div className="results-actions">
        <button className="btn" onClick={handleShare}>
          Share Results
        </button>
        <Link to="/quiz" className="btn">
          Retake Quiz
        </Link>
        <Link to="/" className="btn btn-secondary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ResultsPage;
