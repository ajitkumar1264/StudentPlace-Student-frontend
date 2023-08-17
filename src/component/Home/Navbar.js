import React, { useContext } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
import context from '../context/context'
function Navbar() {


  const {login} =useContext(context)
  return (
    <>
    
    <header>
        <nav>
        <h3 class="logo">Place</h3>
        <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/company">Company</Link></li>
            <li><Link to="">services</Link></li>
         {login &&  <li><Link to="/StudentData">YourData</Link></li>}  
            
        </ul>
        <div class="auth">

            <button><Link to="/login">login</Link></button>
            <button> <Link to="/signup">signup</Link></button>
        </div>
    </nav>
    </header>
    
    </>
  )
}

export default Navbar