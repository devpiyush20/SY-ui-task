import React from 'react'
import "./navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
     <h1>BookMyCollab</h1>
     <p className='navItems'> What We Do</p>
     <p className='navItems'> How It Works</p>
     <p className='navItems'> Join Us As Brand</p>
     <p className='navItems'>Join Us As Creator</p>
      
     <button className='navButton'>Login</button>
    </div>
  )
}

export default Navbar
