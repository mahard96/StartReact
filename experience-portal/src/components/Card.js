import React from 'react';

export default function card(props){
    return(
        <div className='card'>
             {props.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>}
            <img src={process.env.PUBLIC_URL + `/image/${props.img}`} className='card--activity' alt='activity'/>
            <div className='card--rating'>
                <img src={process.env.PUBLIC_URL + '/image/star.png'} className='card--Star' alt='star'/>
                <span>{props.rating}</span>
                <span className='gray'> ({props.reviewCount})• </span>
                <span className='gray'>{props.country}</span>
            </div>
            <p className='card--title'>{props.title}</p>
            <p className='card--price'><b>{props.price}$</b> / person</p>
        </div>
    )
}