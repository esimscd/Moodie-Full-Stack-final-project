import LoginNavBar from "../components/navbar/LoginNavbar";
import "../styles/LoginPage.css";
import popcornLogo from "../assets/logos/moodie-popcorn.png";
import { FaRegUser } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

function LoginPage() {
  return (
    <div className="login-page">
      <LoginNavBar />
      <div className="login-wrapper">
        <img
            src={popcornLogo}
            alt="Moodie Popcorn Logo"
            className="popcorn-background"
        />
        <form action="">

          <h1 className="login-heading">Login</h1>

          <div className="input-box">
            <FaRegUser className="icon"/>
            <input type="text" placeholder="Username" required/>
          </div>

          <div className="input-box">
            <FaLock className="icon"/>
            <input type="password" placeholder="Password" required/>
          </div>
          
          <button className="login-btn" type="submit">
            Sign In
          </button>

        </form>
      </div>
    </div>
  );
}

export default LoginPage;
