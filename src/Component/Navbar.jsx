import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="NavText">
          <h1>Quee<span>nie</span></h1>
          <h2>Wedding Planner</h2>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/service">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav