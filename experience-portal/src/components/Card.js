import React from 'react';

export default function card(props){
    return(
        <div className='card'>
            <img src={process.env.PUBLIC_URL + `/image/${props.coverImg}`} className='card--activity'/>
            <div className='card--rating'>
                <img src={process.env.PUBLIC_URL + '/image/star.png'} className='card--Star'/>
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount})• </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><b>{props.price}$</b> / person</p>
        </div>
    )
}