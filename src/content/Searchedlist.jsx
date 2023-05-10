import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Searchedlist.css'
const Searchedlist = () => {
  return (
    <>
      <div className='container'>       
        <div className='cards'>
          <div className='contents'>
            <div className='image'>
              <img
                src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                alt='img'
                className='img-fluid'
                style={{ width: '180px', borderRadius: '10px' }}
              />
            </div>
            <div className='content'>
              <h5 className='mb-0 ' style={{textAlign:'start'}}>Ranjan kharel</h5>
              <div className='d-flex justify-content-between'>
                <p style={{ color: '#2b2a2a' }} className='mb-0'>
                  Unmarried
                </p>
                <p style={{ color: '#2b2a2a' }} className='mb-0'>
                  Unmarried
                </p>
                <p style={{ color: '#2b2a2a' }} className='mb-0'>
                  Unmarried
                </p>
              </div>
              <div
                className='info mt-0 mb-0'
                style={{ backgroundColor: '#e76161' }}
              >
                <div>
                  <p className='small mb-1'>Age</p>
                  <p className='small mb-1'>41</p>
                </div>
                <div>
                  <p className='small mb-1'>Qualification</p>
                  <p className='small mb-1'>BCA</p>
                </div>
                <div>
                  <p className='small mb-1'>Salary</p>
                  <p className='small mb-1'>40k</p>
                </div>
                <div>
                  <p className='small mb-1'>Religious</p>
                  <p className='small mb-1'>Hindu</p>
                </div>
              </div>
              <div className='mt-1 btns'>
                <Link to='/userprofile'>
                  <button className='btn btn-outline-primary' type='button'>
                    view Profile
                  </button>
                </Link>
                <button className='btn btn-primary' type='button'>
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Searchedlist
