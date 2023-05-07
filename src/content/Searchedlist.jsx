import React from 'react'
import '../styles/Searchedlist.css'
import { Link } from 'react-router-dom';
const Searchedlist = () => {
  return (
    <>
      <div className="searchedlist">
     <div className="searchedlist-left">
        <img src="https://images.vexels.com/media/users/3/129616/isolated/preview/fb517f8913bd99cd48ef00facb4a67c0-businessman-avatar-silhouette-by-vexels.png" alt="Profile"/>
     </div>
     <div className="searchedlist-middle">
        <h3>Samarpan Shah</h3>
        <hr/>
        <div className="user-details">
            <div className="user-details-left">
                <p>23 yrs, <span>5.9ft</span></p>
                <p>Hindu, <span>Chhetri</span></p>
                <p>BCA</p>
                <p>Never Married</p>            
            </div>
            <div className="user-details-middle">
                <p>Kathmandu</p>
                <p>Web App Developer</p>
                <p>Nepali</p>
                <p>Rs.50000 per month</p>
            </div>
            <div className="user-details-right">
               <Link to="/userprofile"><button  className="searchedlist-outline-btn">View Profile</button></Link> 
                <button  className="searchedlist-btn">Connect</button>
            </div>
        </div>
     </div>
      </div>
    </>
  )
}

export default Searchedlist