import React from "react";

const Skills = () =>{
    return(
        <div className="skills">
            <div className="frontend-skills skill-type">
                <h3>Frontend</h3>
                
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>JavaScript</p>
                    <p>Rect</p>
              
            </div>
            <div className="backend-skills skill-type">
                <h3>Backend</h3>
                
                    <p>NodeJS</p>
                    <p>express</p>
                    <p>Javascript</p>
                    <p>MongoDB</p>
              
            </div>
            <div className="misc-skills skill-type">
                <h3>Misc</h3>
                
                    <p>Git</p>
                    <p>Github</p>
                    <p>NPM</p>
                    <p>VSCode</p>
              
            </div>
        </div>
    )
}

export default Skills