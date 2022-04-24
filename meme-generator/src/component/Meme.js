import React from 'react'; 

function Meme(){

    function handleClick(){

    }
 return(
     <main className='meme--container'>
        <form className='meme--form'>
            <input type="text" className='meme--input' placeholder='top text'/>
            <input type="text" className='meme--input' placeholder='bottom text'/>
            <button onClick={handleClick} className='meme--button'>
               Get a new meme image 
               <img  src={process.env.PUBLIC_URL + `/image/image.png`} 
                className="meme--logo"
                alt="logo"/>
            </button>
        </form>
     </main>
 )
}

export default Meme;