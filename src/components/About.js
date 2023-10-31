import React from "react";
import '../index.css';
import Skills from "./Skills";

const About = () =>{
    return(
        <div className="about">
            <h2 className="about-title"> <i>A Little About Me...</i></h2>
            <p className="about-info">
            I am a self taught software engineer with a business degree from USC. Shortly after graduating, as I was on the job hunt, I realized that the field I was pursuing wasn’t for me. I took some time to reflect on what I wanted, and I came back around to an old interest of mine, coding. I had dabbled with some programming when I was younger but had never considered it as a career path. I took some time to revisit it and I stumbled upon many  online resources.I gave it another shot and it didn’t take long to realize I had discovered my passion. 
            <br></br>
            <br></br>
            I have spent the last year learning as much as I can, following tutorials, reading documentation, and building projects. I am excited every day to learn more and continue to work on projects that I care about. I am looking for a junior position in software engineering. I am open to working in front-end, back-end, or full-stack.

            </p>
            <h2 className="about-title"> <i> Skills and Tech </i></h2>
            <Skills/>

        </div>
    )
}

export default About;