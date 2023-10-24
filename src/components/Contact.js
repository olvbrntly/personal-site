import React from "react";
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return(
        <div className="contact">
            <h2>Let's Get In Touch!</h2>
            <p>oliviabrantley3@gmail.com</p>
            <a href="https://github.com/olvbrntly" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/olivia-brantley" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faLinkedin}/></a>
           

        </div>
    )
}

export default Contact;