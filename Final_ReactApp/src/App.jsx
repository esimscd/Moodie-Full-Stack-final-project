import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import moodie_logo from "../moodie_logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <div className="app-container">
      <header className="header">
        <img src={moodie_logo} className="header-logo" alt="Moodie Logo" />
      <h1>🎬Group 1 Introduction🍿</h1>
      </header>

      <main className="main-content">
        <section className="intro-section">
        <h1>Welcome to Moodie: Our Movie Quiz App!</h1>
        <h3>
        We're building an app that recommends movies based on your mood using a short quiz. This project is currently known as:
        </h3>
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        
        <section className="team-section"></section>
        <h2>🎉 Meet the Team 🎉</h2>
          <h3>Here is a quick intro to the team and our favourite film (or two!)</h3>
        <div className="team-grid">
          <div className="Danni"></div>
            <h4>🎬 Danni</h4>
            <p>Loves Inception and/or Tangled!</p>
          </div>

          <div className="Lizzie">
              <h4>🍿 Lizzie</h4>
              <p>My favourite film is The Royal Tenenbaums but honerable mention to Encanto!</p>
          </div>

        <div className="Lisa">
          <h4>🎞 Lisa</h4>
          <p>I have too many favourite films so I selected 2 random ones: Avengers Age of Ultron and Disney's Hercules :D</p>
        </div>
      </section>
        </main>

        <footer className="footer">
          <p>&copy; 2025 Moodie Movie Picker | Group 1 </p>
        </footer>
      </div>
    </>
  );
}

export default App;
