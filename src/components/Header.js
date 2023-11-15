import React from "react";
import '../index.css';
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/")
    }
    return(
        <div className="header">
            <div className="header-left">
                <button onClick={handleClick}>OLIVIA BRANTLEY</button>
            </div>
           
        </div>
    )
}

export default Header;