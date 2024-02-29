import React, { useState } from 'react'
import './Meme.css'
import emoji from '../components/emoji.png'
function Meme() {
const [jokes,setJoke]=useState({content:'Munna Bada Pyara',jokeNum:'Vishwas'})

async function joke(){
  const data=await fetch("https://hindi-jokes-api.onrender.com/jokes/?api_key=37ae1be585daeaaf22f2de5a94af")
  const response= await data.json()
  return response;
}
const handleClick=async()=>{
const ress = await joke()
  setJoke({content:ress.jokeContent,jokeNum: ress.jokeNo})
}

  return (
    <div>
      <div className='back2'>
      <div className="memebox2">
        <div className="mememess" id='message'>
    
          <img src={emoji} alt="icon"/>
        </div>
      <div className="joke" id='author'>
      <p>{jokes.content}</p>
        <p>{jokes.jokeNum}</p>
      </div>
      <div className="meme" id='butt'>
    <button onClick={handleClick}>Get Quote</button>
      </div>




      </div>
    </div>
    </div>
  )
}

export default Meme
