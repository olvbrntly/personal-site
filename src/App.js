import React from 'react';
import Home from './components/Home';
import ResumePage from './components/ResumePage';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/resume" element={<ResumePage />}/>
      </Routes>
  
  );
}

export default App;
