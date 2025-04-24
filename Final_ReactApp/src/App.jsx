import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StartMoodie from "./pages/StartMoodie";
import Quiz from "./pages/Quiz";
import "./index.css";
import "./App.css";
import Randomise from "./pages/Randomise";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/thecreators" element={<Home />} />
          <Route path="/startmoodie" element={<StartMoodie />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/randomise" element={<Randomise />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
