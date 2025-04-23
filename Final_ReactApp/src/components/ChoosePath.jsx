import "../styles/StartMoodie.css";
import { Link } from "react-router-dom";

function ChoosePath() {
  return (
    <>
      <div className="box">
        {/* This is using link at the moment just to show functionality - need to change to button with onClick function */}
        <Link to="/quiz" className="path-button">
          Quiz
        </Link>
        <button className="path-button">Randomise</button>
      </div>
    </>
  );
}

export default ChoosePath;
