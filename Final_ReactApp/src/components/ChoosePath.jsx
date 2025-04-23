import "../styles/StartMoodie.css";
import { Link } from "react-router-dom";

function ChoosePath() {
  return (
    <>
      <button>
        <Link to="/quiz">Quiz</Link>
      </button>
      <button>Randomise</button>
    </>
  );
}

export default ChoosePath;
