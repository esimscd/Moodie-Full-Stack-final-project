import "../styles/StartMoodie.css";
import { useNavigate } from "react-router-dom";

function ChoosePath() {
  const navigate = useNavigate();
  // Function to handle the answer that is chosen by the user
  const handleClick = (page) => {
    navigate(page);
  };

  return (
    <>
      <div className="box">
        <button onClick={() => handleClick("/QuizFlow")} className="path-button">
          Quiz
        </button>
        <button
          onClick={() => handleClick("/Randomise")}
          className="path-button"
        >
          Randomise
        </button>
      </div>
    </>
  );
}

export default ChoosePath;
