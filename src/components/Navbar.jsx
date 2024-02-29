import React from 'react'
import './Navbar.css'
import {Link,NavLink} from 'react-router-dom'

function Navbar() {
  return (
    <>
    <div className="main">
   
   <h1>Some Fun Project </h1>
    </div>
    <div className='nav'>
      <Link to="/Weather">
      <button>Weather</button></Link>
      <Link to="/Quote">
      <button>Quote Generator</button>  </Link> 
      <Link to="/Meme">
      <button>Meme Generator</button></Link> 
      <Link to="/Gender">
     <button>Gender Predict</button></Link>
      <Link to="/Random">
      <button>Dictionary</button> </Link>
     

    

    </div>
    </>
  )
}

export default Navbar
