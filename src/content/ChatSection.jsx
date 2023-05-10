import React from 'react'
import { AiFillMail, AiOutlineMenu, AiOutlineSetting } from 'react-icons/ai'
import LayoutwithoutFooter from '../components/LayoutwithoutFooter'
import '../styles/Chatsection.css'

const ChatSection = () => {
  return (
    <>
      git
      <LayoutwithoutFooter>
        <div className=' container-fluid bg-info p-3 d-flex justify-content-between'>
          <AiOutlineMenu style={{ fontSize: '22px' }} />
          <span className='fw-bold '>My Profile</span>
          <AiOutlineSetting style={{ fontSize: '22px' }} />
        </div>
        <div className='section'>
          <section className='forUserName'>
            <div
              className='bg-success p-2  '
              style={{ width: '350px', display: 'flex', alignItems: 'center',overflow:'hidden' }}
            >
              <div className='avatar' style={{ flexGrow: '1' }}>
                <img
                  src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                  className='rounded-circle img-fluid'
                  alt='Avatar'
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <span
                  className='btn text-white btn-sm btn-floating bg-info'
                  role='button'
                >
                  <AiFillMail style={{ fontSize: '29px' }} />
                </span>
              </div>
              <div>
                <span
                  className='btn text-white btn-sm btn-floating bg-info'
                  role='button'
                >
                  <AiFillMail style={{ fontSize: '29px' }} />
                </span>
              </div>
              <div>
                <span
                  className='btn text-white btn-sm btn-floating bg-info'
                  role='button'
                >
                  <AiFillMail style={{ fontSize: '29px' }} />
                </span>
              </div>
            </div>
            <div
              className='user'
              style={{ display: 'flex', alignContent: 'center' ,background:'silver' }}
            >
              <div className='img'>
                <img
                  src='https://www.w3schools.com/w3images/avatar6.png'
                  alt=''
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  className='rounded-circle'
                />
              </div>
              <div className='info ' style={{ display: 'flex' }}>
                <div className='d-grid ps-2'>
                  <span className='name'>Rahul raj singh</span>
                  <span className='name'>Hello What's up?</span>
                </div>
                <div className='pt-1'>
                  <p className='small text-muted mb-1'>Just now</p>
                  <span className='badge bg-danger float-end'>1</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LayoutwithoutFooter>
    </>
  )
}

export default ChatSection
