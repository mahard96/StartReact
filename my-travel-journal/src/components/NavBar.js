import React from 'react'; 

export default function navBar(){
    return (
        <nav className="nav">
            <img src={process.env.PUBLIC_URL + '/image/earth-globe.png'} 
            alt="Logo"
            className="nav--logo"/>
            <h3> my travel journal </h3>
        </nav>
    )
}