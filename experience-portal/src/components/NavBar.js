import React from 'react';
import Logo from '../image/climb.png'; 

export default function navBar(){
    return (
        <nav className="nav">
            <img src={Logo} 
            alt="Climb Logo"
            className="nav--logo"/>
            <h3> Experiences </h3>
        </nav>
    )
}