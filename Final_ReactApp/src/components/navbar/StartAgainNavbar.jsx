import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moodieLogo from "../../assets/logos/moodie_logo.png";
import "../../styles/navbar.css";

const StartAgainNavbar = () => {
  const navigate = useNavigate();

  const startMoodie = () => {
    navigate("/startmoodie"); // This takes the user to the Start Moodie page when they press the button
  };
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img id="moodie-logo" src={moodieLogo} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/#hero-section">Home</Link>
            </li>
            <li>
              <Link to="/#about-section">About</Link>
            </li>
            <li>
              <Link to="/#creators-section">The Creators</Link>
            </li>
            <button id="start-moodie-btn" onClick={startMoodie}>
              Start Again
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default StartAgainNavbar;
