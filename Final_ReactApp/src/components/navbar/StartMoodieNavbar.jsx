import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import moodieLogo from "../../../moodie_logo.png";
import '../../styles/navbar.css';

const StartMoodieNavbar = () => {
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
                     </ul>
                  </nav>
               </div>
            </>
   );
};

export default StartMoodieNavbar;
