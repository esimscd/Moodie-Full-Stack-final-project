import { Link } from "react-router-dom";
import moodieLogo from "../../assets/logos/moodie_logo.png"; // Import the logo image
import "../../styles/navbar.css";

const StartMoodieNavbar = () => {
  return (
    <div className="nav-container">
      <Link to="/" className="logo-link">
        <img id="moodie-logo" src={moodieLogo} alt="Moodie Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/#hero-section" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/#about-section" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/#creators-section" className="nav-link">
              The Creators
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default StartMoodieNavbar;
