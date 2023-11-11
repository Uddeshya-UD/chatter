import React from 'react'
import '../css/navbar.css'
const Navbar = () => {
  return (
    <div className='nav'>
        <div className="nav-item">Chatter</div>
        <div className="nav-item">
            <a className="nav-item" href="/login">Login</a>
            <a className="nav-item" href="/register">Register</a>
        </div>
    </div>
  );
}

export default Navbar