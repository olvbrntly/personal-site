import React from "react";
import '../index.css';

const Header = () => {
    return(
        <div className="header">
            <div className="header-left">
                <a href="http://localhost:3000/">OLIVIA BRANTLEY</a>
            </div>
            <div className="header-right">
                <a href="http://localhost:3000/about">About</a>
                <a href="http://localhost:3000/contact">Contact</a>
            </div>
        </div>
    )
}

export default Header;