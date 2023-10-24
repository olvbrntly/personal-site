import React from "react";
import '../index.css';
import Skills from "./Skills";

const About = () =>{
    return(
        <div className="about">
            <h2 className="about-title"> <i>A Little About Me...</i></h2>
            <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id ornare arcu odio ut sem. Sagittis orci a scelerisque purus semper eget duis. Ut lectus arcu bibendum at varius vel. Lectus magna fringilla urna porttitor rhoncus. Elementum facilisis leo vel fringilla. Egestas sed sed risus pretium. Ultricies tristique nulla aliquet enim tortor. Velit aliquet sagittis id consectetur purus ut. Felis donec et odio pellentesque diam volutpat commodo sed egestas.

                Fermentum posuere urna nec tincidunt praesent semper feugiat. Egestas pretium aenean pharetra magna ac placerat. Proin sagittis nisl rhoncus mattis. In metus vulputate eu scelerisque. Pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus. Viverra maecenas accumsan lacus vel facilisis volutpat est. Mi quis hendrerit dolor magna. Porta nibh venenatis cras sed felis eget velit aliquet.  
            </p>
            <h2 className="about-title"> <i> Skills and Tech </i></h2>
            <Skills/>

        </div>
    )
}

export default About;