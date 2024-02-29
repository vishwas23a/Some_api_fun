import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Weather from './Weather'
function Navbar() {
  return (
    <>
    <div className="main">
   
   <h1>Some Fun Project </h1>
    </div>
    <div className='nav'>
      <Link to="/Weather" className={({isActive})=> isActive? "active" : "inactive"} >
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
