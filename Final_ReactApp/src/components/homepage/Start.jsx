import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const startMoodie = () => {
    navigate("/startmoodie");
  };
  return (
    <>
      <div className="start-moodie-container">
        <button className="start-moodie-btn" onClick={startMoodie}>
          Start Moodie
        </button>
      </div>
    </>
  );
};

export default Start;
