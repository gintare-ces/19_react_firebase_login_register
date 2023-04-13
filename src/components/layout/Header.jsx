import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <header>
        <div className="container">
        <Link to={'/'} className="logo">Logo</Link>
        <nav>
            <NavLink className='navItem' to={'/'}>Home</NavLink>
            <NavLink className='navItem' to={'/login'}>Login</NavLink>
            <NavLink className='navItem' to={'/profile'}>Profile</NavLink>
        </nav>
        </div>
    </header>
  )
}

export default Header