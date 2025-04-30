import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import StartMoodie from "./pages/StartMoodie";
import QuizFlow from "./pages/QuizFlow"
import "./index.css";
import "./App.css";
import Randomise from "./pages/Randomise";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/thecreators" element={<Home />} />
          <Route path="/startmoodie" element={<StartMoodie />} />
          <Route path="/quizflow" element={<QuizFlow />} />
          <Route path="/randomise" element={<Randomise />} />
          <Route path="/results" element={<ResultsPage />} />

          {/* Catch-all route for unmatched URLs */}
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
