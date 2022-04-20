import React from 'react';

export default function hero(){
    return (
        <section className="hero"> 
            <img src={process.env.PUBLIC_URL + '/image/Experiences.PNG'} className="hero--picture" alt='hero'/>
            <h1 className='hero--header'> Discover New Experiences </h1>
            <p className='hero--text'> You can find here a new experiences </p>
        </section>
    )
}