import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <>
    <header>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src="src\images\logo.png" alt="logo" className='w-100' />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-5 ">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Our Life Partner</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/help">Help?</a>
        </li>
        <li className="nav-item">
          <button className='btn bg-light'>Register Now</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </header>
    </>
  )
}

export default Header