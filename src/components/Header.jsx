import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import '../App.css'
import { GoThreeBars } from 'react-icons/go'
import { RxCross1 } from 'react-icons/rx'
import logo from '../images/logo.png'
const Header = () => {
  const [toggle, setToggle] = useState(false)
  const handlenavtoggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
      <header>
        <nav className={toggle ? 'navbar expanded' : 'navbar'}>
          <NavLink className='navbar-logo' to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <ul className=' navbar-items'>
            <li className='navbar-item mt-2'>
              <NavLink
                className='navbar-link cool-link '
                aria-current='page'
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='navbar-item mt-2'>
              <NavLink className='navbar-link cool-link' to='/about'>
                About Our Life Partner
              </NavLink>
            </li>
            <li className='navbar-item mt-2'>
              <NavLink className='navbar-link cool-link' to='/help'>
                Help?
              </NavLink>
            </li>
            <li className='navbar-item'>
              <Link to='/signup'>
                {' '}
                <button className='nav-btn'>Register Now</button>
              </Link>
            </li>
          </ul>
          <div className='navbar-toggle' onClick={handlenavtoggle}>
            {toggle ? <RxCross1 /> : <GoThreeBars />}
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
