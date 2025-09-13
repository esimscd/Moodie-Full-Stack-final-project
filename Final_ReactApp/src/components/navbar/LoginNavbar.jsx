import { Link } from "react-router-dom"
import moodieLogo from "../../assets/logos/moodie_logo.png";
import "../../styles/navbar.css";

function LoginNavBar () {
    return (
        <div className="nav-container">
            <Link to="/">
                <img id="moodie-logo" src={moodieLogo}/>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/#hero-section">
                            Home
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )   
}

export default LoginNavBar