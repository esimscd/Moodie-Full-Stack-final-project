import "../styles/ErrorPage.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-wrapper">
      <div className="error-card">
        <h1 className="error-code">404</h1>
        <p className="error-message">Oops! That page couldn’t be found.</p>
        <Link to="/" className="error-btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
// This is a simple error page component that displays a 404 error message
