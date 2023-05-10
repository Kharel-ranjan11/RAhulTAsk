import React, { useState } from 'react'
import Filter from '../content/Filter'
import Searchedlist from '../content/Searchedlist'
import '../styles/Profile_page.css'
import Layout from './Layout'
import SwipeableEdgeDrawer from './Profile_pageDrawer'
const Profile_Page = () => {
  const [openDrawer, setOpenDrawer] = useState(true)
  let autoResize = () => {
    if (window.innerWidth < 1200) {
      setOpenDrawer(false)
    } else {
      setOpenDrawer(true)
    }
  }
  console.log(openDrawer)
  React.useEffect(() => {
    window.addEventListener('resize', autoResize)
    autoResize()
  }, [])
  return (
    <>
      <Layout>
        <div className='container text-center pt-3'>
          <div className='row '>
            <div className=' border border-primary col col-lg-12'>
              <div>
                <button>Male/Female</button>
              </div>
            </div>
          </div>
        </div>
        <div className='container text-center'>
          <div className='row row-cols-2 d-flex justify-content-center'>
            <div
              className={`${
                openDrawer ? 'active' : 'inactive'
              } col-4  `}
              style={{ height: '70vh', overflowY: 'scroll',margin:'15px 0px' }}
            >
              <Filter  />
            </div>
            <div
              className={`${
                openDrawer ? 'col-8' : 'col-12'
              }   `}
              style={{ height: '70vh', overflowY: 'scroll' }}
            >
              <Searchedlist />
            </div>
          </div>
        </div>
        {openDrawer ? '' : <SwipeableEdgeDrawer></SwipeableEdgeDrawer>}
      </Layout>
    </>
  )
}
export default Profile_Page
