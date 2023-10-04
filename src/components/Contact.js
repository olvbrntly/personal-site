import React from "react";
import '../index.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return(
        <div className="contact">
            <h2>Let's Get In Touch!</h2>
            <p>oliviabrantley3@gmail.com</p>
            <p><FontAwesomeIcon icon={faLinkedin}/></p>
            <p><FontAwesomeIcon icon={faGithub}/></p>

        </div>
    )
}

export default Contact;