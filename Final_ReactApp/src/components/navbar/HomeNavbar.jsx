import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moodieLogo from "../../assets/logos/moodie_logo.png";
import "../../styles/navbar.css";

const HomeNavbar = () => {
  const navigate = useNavigate();

  const startMoodie = () => {
    navigate("/startmoodie");
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -95; // Navbar height
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="nav-container">
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("hero-section");
        }}
        className="logo-link"
      >
        <img id="moodie-logo" src={moodieLogo} alt="Moodie Logo" />
      </Link>
      <nav>
        <ul>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("hero-section");
              }}
              className="nav-link"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about-section");
              }}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("creators-section");
              }}
              className="nav-link"
            >
              The Creators
            </Link>
          </li>
          <li>
            <button id="start-moodie-btn" onClick={startMoodie}>
              Start Moodie
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomeNavbar;
