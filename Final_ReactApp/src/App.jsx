import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>🎬Group 1 Introduction🍿</h1>
      <div className="card">
        <h3>
          Hello! And welcome to our React App <br />
          We will be building an app which will offer movie choices based on a
          short quiz currently known as:
        </h3>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <img className="logo" src="../moodie_logo.png" />
        <p>
          Here is a quick intro to the team and our favourite film (or two!)
          <ul style={{ listStyle: "none", paddingLeft: 0 }}>
            <li>
              🎬 <strong>Danni</strong> loves Inception and/or Tangled!
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default App;
