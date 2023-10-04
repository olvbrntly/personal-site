import React from 'react';
import Header from './components/Header';
import IntroPanel from './components/IntroPanel';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPanel />
      <About />
    </div>
  );
}

export default App;
