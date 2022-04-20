import React from 'react'; 

export default function navBar(){
    return (
        <nav className="nav">
            <img src={process.env.PUBLIC_URL + '/image/climb.png'} 
            alt="Climb Logo"
            className="nav--logo"/>
            <h3> Experiences </h3>
        </nav>
    )
}