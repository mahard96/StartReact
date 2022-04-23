import React from 'react';

export default function card(props){
    return(
        <div className='card'>
             {props.item.openSpots === 0 && <div className='card--badge'>SOLD OUT</div>}
            <img src={process.env.PUBLIC_URL + `/image/${props.item.coverImg}`} className='card--activity' alt='activity'/>
            <div className='card--rating'>
                <img src={process.env.PUBLIC_URL + '/image/star.png'} className='card--Star' alt='star'/>
                <span>{props.item.rating}</span>
                <span className='gray'> ({props.item.reviewCount})• </span>
                <span className='gray'>{props.item.country}</span>
            </div>
            <p className='card--title'>{props.item.title}</p>
            <p className='card--price'><b>{props.item.price}$</b> / person</p>
        </div>
    )
}