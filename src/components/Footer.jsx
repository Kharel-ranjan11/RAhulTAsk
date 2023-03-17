import React from 'react'
import '../styles/Footer.css'
import i1 from '../images/tiktok.png'
import i2 from '../images/facebook.png'
import i3 from '../images/instagram.png'
import i4 from '../images/youtube.png'
import i5 from '../images/twitter.png'
const Footer = () => {
  return (

    <>
    <footer className='py-5'>
    <div className="footertop">
    <div className="container">
    <div className="row d-flex ps-4">
    <div className="col-lg-4 col-sm-12">   
    <ul className='first'>
       <li className="pb-3">
          <h3>Quicks Link</h3>
        </li>
       <li className="pb-1">
          <a href="/">Home</a>
        </li>
       <li className="pb-1">
          <a href="#">Search For Partners</a>
        </li>
       <li className="pb-1">
          <a href="/">Browse profiles By</a>
        </li>
    </ul>
   </div>
   <div className="col-lg-4 col-sm-12 ps-4">
   <ul className='first '>
       <li className="pb-3">
          <h3>About Our Life Partner</h3>
        </li>
       <li className="pb-1">
          <a href="/">Who Are You?</a>
        </li>
       <li className="pb-1">
          <a href="/">Contact Us</a>
        </li>
       <li className="pb-1">
          <a href="/">Our History</a>
        </li>
    </ul>
   </div>
   <div className="col-lg-4 col-sm-12 ps-5">
   <ul className='first'>
       <li className="pb-3">
          <h3>Quick Help</h3>
        </li>
       <li className="pb-1">
          <a href="/">Account Blocking</a>
        </li>
       <li className="pb-1">
          <a href="/">Reporting</a>
        </li>
       <li className="pb-1">
          <a href="/">Tutorials/Guides</a>
        </li>
    </ul>
   </div>
    </div>
   
   </div>
   </div>
   <div className="footerbuttom">
    <div className="container">
    <div className="row d-flex">
    <div className="col-lg-6 col-sm-6 pe-5">
      <div className="contact pb-1">
          <div className="row d-inline-flex">
            <div className="col-lg-4">
            <div className="sm text-light fw-3 d-inline-block fs-5  px-3 py-2">Social Media</div>
            </div>
            <div className="col-lg-6 ">           
              <div className="icon pt-2">
                <ul className=' d-inline-flex gap-5'>
                  <li className=''><img src={i1} alt="tiktok"/></li>
                  <li className=''><img src={i2} alt="facebook"/></li>
                  <li className=''><img src={i3} alt="instagram"/></li>
                  <li className=''><img src={i4} alt="youtube"/></li>
                  <li className=''><img src={i5} alt="twitter"/></li>
                </ul>
              </div>
            </div>
          </div>
      </div>
    </div>
    <div className="col-lg-6 col-sm-6 ps-5">
      <p className='copyright ps-4'>&#169;Copyright 2023 | This Website is designed by | <span className='brand'>Login Soft</span></p>
    </div>
  </div>
    </div>
   </div>
    </footer>
    </>
  )
}

export default Footer