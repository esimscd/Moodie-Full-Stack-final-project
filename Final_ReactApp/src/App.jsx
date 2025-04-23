import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import StartMoodie from "./pages/StartMoodie"
import "./index.css"
import "./App.css"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/thecreators" element={<Home />} />
          <Route path="/startmoodie" element={<StartMoodie />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
