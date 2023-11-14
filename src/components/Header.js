import React from "react";
import '../index.css';

const Header = () => {
    return(
        <div className="header">
            <div className="header-left">
                <a href="https://olvbrntly.github.io/personal-site/">OLIVIA BRANTLEY</a>
            </div>
            <div className="header-right">
                <a href="https://olvbrntly.github.io/personal-site/about">About</a>
                <a href="https://olvbrntly.github.io/personal-site/contact">Contact</a>
            </div>
        </div>
    )
}

export default Header;