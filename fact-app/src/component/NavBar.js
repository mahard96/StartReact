import React from "react";
import Logo from "./hairstyle.png";

export default function Navbar() {
    return (
        <nav>
            <img src={Logo} 
            alt="Girl Icon"
            className="nav--icon" />
            <h3 className="nav--logo_text">Some Facts About Me</h3>
            <h4 className="nav--title">StartReact - Static Screen</h4>
        </nav>
    )
}