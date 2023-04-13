import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to={'/'} className="logo">Logo</Link>
        <nav>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/login'}>Login</NavLink>
            <NavLink to={'/profile'}>Profile</NavLink>
        </nav>
    </header>
  )
}

export default Header