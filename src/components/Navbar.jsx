import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <ul className="nav">
        <li><NavLink className="nav_link" to="/">Home</NavLink></li>
        <li><NavLink className="nav_link" to="/new">New Show</NavLink></li>
        <li><NavLink className="nav_link" to="/">Go back</NavLink></li>
      </ul>
    </div>
  )
}
