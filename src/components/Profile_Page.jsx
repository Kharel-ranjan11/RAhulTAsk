import React from 'react'
import '../styles/Profile_page.css'
import Filter from '../content/Filter'
import Layout from './Layout'
import { Link } from 'react-router-dom'
const Profile_Page = () => {
  return (
    <>
      <Layout>
        <div className='container'>
          <div className='row'>
            <div className='col-6 border border-success'>
              <Filter />
            </div>
            <div className='col-6 border border-success'>
              <div className='user-details-right'>
                <Link to='/userprofile'>
                  <button className='searchedlist-outline-btn'>
                    View Profile
                  </button>
                </Link>
                <button className='searchedlist-btn'>Connect</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Profile_Page
