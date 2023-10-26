import React from "react";
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return(
        <div className="contact">
            <h2><i>Let's Get In Touch!</i></h2>
            <p>oliviabrantley3@gmail.com</p>
            <div className="social-links">
            <a href="https://github.com/olvbrntly" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faGithub}/></a>
            <a href="https://www.linkedin.com/in/olivia-brantley" target="_blank" rel="noreferrer noopener" ><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>

        </div>
    )
}

export default Contact;