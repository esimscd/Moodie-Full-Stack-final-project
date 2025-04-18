import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import StartMoodie from './pages/StartMoodie.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/startmoodie' element={<StartMoodie />} />
      </Routes>
    </Router>
  </StrictMode>,
)
