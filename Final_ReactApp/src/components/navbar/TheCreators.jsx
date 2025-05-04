import { Link } from "react-router-dom";
import moodieLogo from "../../assets/logos/moodie_logo.png"; // Import the logo image
import "../../styles/navbar.css";

const TheCreators = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img id="moodie-logo" src={moodieLogo} />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/thecreators">The Creators</Link>
            </li>
            <button id="start-moodie-btn" onClick={startMoodie}>
              Start Moodie
            </button>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default TheCreators;
