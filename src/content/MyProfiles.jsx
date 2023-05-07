import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Myprofiles.css'
import {AiFillSetting} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import {MdEventAvailable} from 'react-icons/md'
import {MdNotifications} from 'react-icons/md'

const MyProfiles = () => {

  return (
    <>
   
    <div className='myprofile py-2'>
                <h6>My Profiles</h6><hr/>
             
                <ul>
                    <li><Link><BsFillPeopleFill className='myprofile-icon'/> Connected<div className="badge1"></div> </Link> </li>
                    <li><Link><i className="bi bi-chat-heart"></i> Messages <div className="badge1"></div></Link></li>
                    <li><Link><MdNotifications className='myprofile-icon'/> Notification <div className="badge1"></div></Link></li>
                    <li><Link><MdEventAvailable className='myprofile-icon'/> Events </Link></li>
                    <li><Link><AiFillSetting className='myprofile-icon me-2'/>Settings</Link></li>
                </ul>
            
    </div>
    </>
  )
}

export default MyProfiles