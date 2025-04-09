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
          <h3>Here is a quick intro to the team and our favourite film (or two!)</h3>
            <h4>🎬 Danni</h4>
            <p>loves Inception and/or Tangled!</p>
          <h4>🍿 Lizzie</h4>
          <p>My favourite film is The Royal Tenenbaums but honerable mention to Encanto!</p>
      </div>
    </>
  );
}

export default App;
