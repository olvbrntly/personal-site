import React from "react";
import '../index.css';
import Skills from "./Skills";

const About = () =>{
    return(
        <div className="about">
            <h2 className="about-title"> <i>A Little About Me...</i></h2>
            <p className="about-info">
                I'm a self-taught software engineer with a business degree from USC. After graduating, I found that the career path I initially chose wasn't the right fit for me. Taking some time to reflect, I stumbled upon various online resources that taught programming. After giving it a try, it didn't take me long to realize that I had found my true passion. 
            <br></br>
            <br></br>
                Over the past two years, I've been immersed in learning, following tutorials, diving into documentation, and working on different projects. Every day brings new excitement as I strive to expand my knowledge and contribute to projects I'm genuinely passionate about. I am currently seeking a junior software engineering position, eager to contribute to projects in front-end, back-end, or full-stack development.
            </p>
            <h2 className="about-title"> <i> Skills and Tech </i></h2>
            <Skills/>

        </div>
    )
}

export default About;