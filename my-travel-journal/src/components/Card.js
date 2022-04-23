export default function card(props){
    return(
        <div className='card'>
            <img src={process.env.PUBLIC_URL + `/image/${props.item.image}`} className='card--img' alt='img'/>
            <div className='card--journal'>
                <div className='card--location'>
                <img src={process.env.PUBLIC_URL + '/image/location.png'} className='card--pin' alt='star'/>
                <p className='card--country'>{props.item.location}</p>
                </div>
            <p className='card--title'>{props.item.title}</p>
            </div>
        </div>
    )
}