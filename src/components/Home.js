import React from 'react';
import Header from './Header';
import IntroPanel from './IntroPanel';
import About from './About';
import Contact from './Contact';
import ProjectsCarousel from './ProjectsCarousel';
import '../index.css'

const Home = () =>{
    return(
        <div className='App'>
            <Header />
            <IntroPanel />
            <About />
            <ProjectsCarousel/>
            <Contact />
        </div>
    )
}

export default Home