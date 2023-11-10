import React from 'react'
import '../css/navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="logo">Chatter</div>
        <div className="links">
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </div>
    </div>
  )
}

export default Navbar