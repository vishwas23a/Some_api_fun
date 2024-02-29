import React, { useState } from 'react'
import './Quote.css'
function Quote() {
  const [quotes,setQuotes]=useState({message:'Maar denge Katta Kapar me, Aaiye na UP Bihar me',author:'Vishwas'})

async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random')
  const quote = await response.json()
  return quote;
}
async function fun(){

  const res= await randomQuote();
setQuotes({message:res.content,author:res.author})
}
  return (
    <div className='back3'>
      <div className="box1"></div>
      <div className="box2">
        <div className="mess" id='message'>
      <p>{quotes.message}</p>
      </div>
      <div className="author" id='author'>
      <h3>{quotes.author}</h3></div>
      <div className="butt" id='butt'>
    <button onClick={fun}>Get Quote</button>
      </div>




      </div>
    </div>
  )
}

export default Quote
