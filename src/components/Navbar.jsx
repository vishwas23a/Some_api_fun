import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom'
function Navbar() {
  
  return (
    <>
    <div className="main">
   
   <h1>Some Fun Project </h1>
    </div>
    <div className='nav'>
      <NavLink to="Weather" className={({isActive})=> isActive? "active" : "inactive"} >
        
      <button>Weather</button></NavLink>
      <NavLink to="Quote">
      <button>Quote Generator</button>  </NavLink> 
      <NavLink to="Meme">
      <button>Meme Generator</button></NavLink> 
      <NavLink to="Gender">
     <button>Gender Predict</button></NavLink>
      <NavLink to="Random">
      <button>Dictionary</button> </NavLink>
     

    

    </div>
    </>
  )
}

export default Navbar
