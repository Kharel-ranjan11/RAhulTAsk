import React from 'react'
import { AiOutlineMenu, AiOutlineSetting, AiFillMail } from 'react-icons/ai'
import LayoutwithoutFooter from '../components/LayoutwithoutFooter'
import '../styles/Chatsection.css'

const ChatSection = () => {
  return (
    <>git
      <LayoutwithoutFooter>
        <div className=' container-fluid bg-info p-3 d-flex justify-content-between'>
          <AiOutlineMenu style={{ fontSize: '22px' }} />
          <span className='fw-bold '>My Profile</span>
          <AiOutlineSetting style={{ fontSize: '22px' }} />
        </div>
        <div className='section'>
          <section className='forUserName'>
            <div className='bg-success p-2  ' style={{ width: '350px',display:'flex',alignItems:'center' }}>
              <div className='avatar'>
                <img
                  src='https://mdbcdn.b-cdn.net/img/new/avatars/2.webp'
                  class='rounded-circle img-fluid'
                  alt='Avatar'
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover'
                  }}
                />
              </div>
              <div>
                <AiFillMail style={{ fontSize: '22px' }} />
              </div>
            </div>
          </section>
        </div>
      </LayoutwithoutFooter>
    </>
  )
}

export default ChatSection
