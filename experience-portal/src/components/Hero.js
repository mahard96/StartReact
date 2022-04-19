import React from 'react';
import Hero from '../image/Experiences.PNG'

export default function hero(){
    return (
        <section className="hero"> 
            <img src={Hero} className="hero--picture"/>
            <h1 className='hero--header'> Discover New Experiences </h1>
            <p className='hero--text'> You can find here a new experiences </p>
        </section>
    )
}