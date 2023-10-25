import React from 'react';
import Header from './components/Header';
import IntroPanel from './components/IntroPanel';
import About from './components/About';
import Contact from './components/Contact';
import ProjectsCarousel from './components/ProjectsCarousel';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <IntroPanel />
      <About />
      <ProjectsCarousel/>
      <Contact />
    </div>
  );
}

export default App;
