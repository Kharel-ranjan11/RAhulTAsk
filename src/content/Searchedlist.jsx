import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Searchedlist.css'
const Searchedlist = () => {
  return (
    <>
     <div className="container">
     <div className="user-details-right">
               <Link to="/userprofile"><button  className="searchedlist-outline-btn">View Profile</button></Link> 
                <button  className="searchedlist-btn">Connect</button>
            </div>
     </div>
    </>
  )
}

export default Searchedlist
