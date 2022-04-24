import React from 'react'; 

function Header(){
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + `/image/troll.png`} 
                className="header--logo"
                alt="troll-logo" />
            <h3 className="header--meme">
            MemeGenerator
            </h3>
            <h1 className="header--course">
                React Course - Project 3
            </h1>
        </header>
    )
}

export default Header;