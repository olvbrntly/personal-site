import React from "react";

import me from '../images/me.jpg'

const IntroPanel = () =>{
    return(
        <div className="intro-panel">
            <div className="intro-panel-right">
                <h1 className="intro" >Hi, I'm Olivia! I'm a Software Engineer</h1>
                {/* <div className="intro-sub">Lorem ipsum dfgeojgeraiugbirweuhgekjgkjzdng rgbjnaiguerog edufearygeesgjfhwerg jhdfbeiyughwroig  w fSDJFGHWE8GWJN </div> */}

                <button className="intro-resume-button"> Download My Resume</button>
            </div>
   
            <div className="intro-panel-left"> 
                <img className="info-panel-photo" src={me} alt="Olivia Brantley headshot"/>
            </div>

            
            </div>
 
    )
}

export default IntroPanel;