import React from 'react'
import { BiSticker } from 'react-icons/bi'
import {
  BsEmojiSmile,
  BsFillBellFill,
  BsFillChatLeftTextFill,
  BsSearch
} from 'react-icons/bs'
// AiOutlineGif
import { useState } from 'react'
import { AiOutlineGif } from 'react-icons/ai'
import { CiMenuKebab } from 'react-icons/ci'
import { RxCrossCircled } from 'react-icons/rx'
import LayoutwithoutFooter from '../components/LayoutwithoutFooter'
import '../styles/Chatsection.css'
import { FastForward } from '@mui/icons-material'
const ChatSection = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [IsOpen, setIsopen] = useState(false)
  const [ForCross, setForCross] = useState(true)
  // for emoji ,sticker,gif
  const [IsSticker, setIsSticker] = useState({
    emoji: false,
    sticker: false,
    gif: false
  })
  console.log(IsSticker)
  //
  const hideCross = e => {
    setForCross(false)
  }
  return (
    <>
      <LayoutwithoutFooter>
        <div className='bg-danger' style={{ maxWidth: '100%' }}>
          <div className='areas'>
            <section
              className='Profiles'
              style={{ borderRight: '1px solid black' }}
            >
              <header className='' style={{ width: '400px' }}>
                <div className='topS bg-info ps-3 pt-1 pb-1 pe-3 '>
                  <div className='ProfileImage'>
                    <img
                      src='https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=1060&t=st=1683777969~exp=1683778569~hmac=dddea4dca3e4c7e7794f06dace369eae68fccbdff8deb85ccfc5e9871c15591c'
                      alt=''
                      className='rounded-circle'
                      style={{
                        width: '50px',
                        height: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='icons'>
                    <div>
                      <BsFillBellFill
                        style={{ fontSize: '22px', margin: '10px' }}
                      />
                      <span>1</span>
                    </div>

                    <div>
                      <BsFillChatLeftTextFill
                        style={{ fontSize: '22px', margin: '10px' }}
                      />
                      <span>1</span>
                    </div>
                  </div>
                </div>
                <div className='searchInput'>
                  <div>
                    <span>
                      <BsSearch style={{ fontSize: '19px' }} />
                    </span>
                    <input
                      type='search'
                      name='search'
                      id='search'
                      placeholder='Search Users....'
                    />
                  </div>
                </div>
              </header>
              <div className='users'>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
                <div className='singleUser'>
                  <div className='userImg'>
                    <img
                      src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                      alt=''
                      className='rounded-circle'
                      style={{
                        height: '50px',
                        width: '50px',
                        objectFit: 'cover'
                      }}
                    />
                  </div>
                  <div className='information'>
                    <div style={{ fontSize: '18px' }}>
                      <span style={{ flexGrow: '1' }}>Ranjan kharel</span>
                      <span className='date'>12:00</span>
                    </div>
                    <div style={{ fontSize: '15px' }}>
                      <span style={{ flexGrow: '1' }}>Message</span>{' '}
                      <span className='date'>12:00</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className='conversationArea'>
              <div className='headers bg-info pe-3 ps-3 pt-1 pb-1 '>
                <div>
                  <img
                    src='https://img.freepik.com/free-photo/cute-dark-haired-guy-with-happy-expression-looking-ahead_259150-57638.jpg?w=1060&t=st=1683783252~exp=1683783852~hmac=b4bd2b61f91431465b380806fbd70b967433bb3e3286778e8eb7abfbcd1cebfa'
                    alt=''
                    className='rounded-circle'
                    style={{
                      height: '50px',
                      width: '50px',
                      objectFit: 'cover'
                    }}
                  />
                  <div className='information'>
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: 'bolder' }}>
                        Ranjan kharel
                      </span>
                      <span className='date' style={{ fontSize: '12px' }}>
                        Last Seen Todday at 12:34
                      </span>
                    </div>
                  </div>
                </div>
                <div className='Picon'>
                  <span
                    style={{ position: 'relative' }}
                    onClick={() => {
                      setIsopen(!IsOpen)
                    }}
                  >
                    <div className='searchBox'>
                      <BsSearch style={{ fontSize: '23px' }} />
                      <input
                        type='search'
                        name=''
                        id=''
                        placeholder='Search Message'
                      />
                    </div>
                  </span>
                  <span style={{ position: 'relative' }}>
                    <CiMenuKebab
                      style={{ fontSize: '23px' }}
                      onClick={() => {
                        setIsopen(false)
                        setIsOpen(!isOpen)
                      }}
                    />
                    {isOpen ? (
                      <>
                        <div className={` ${isOpen ? 'anime' : ''} submenu`}>
                          <div>
                            <span>Clear Chat </span>
                          </div>
                          <div>
                            <span>Delete Chat </span>
                          </div>
                          <div>
                            <span>Contact info </span>
                          </div>
                          <div>
                            <span>Close Chat </span>
                          </div>
                        </div>
                      </>
                    ) : (
                      ''
                    )}
                  </span>
                </div>
              </div>

              <div className='usersConversation bg-primary'>
                {/*  */}
                <div>
                  {/* <div className='Msg sending'>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla voluptas sunt facere tempora pariatur repellat
                      optio? Natus qui, fugit excepturi autem odit est dolorum
                      laborum ut ipsum sapiente, praesentium eaque.
                    </span>
                  </div>
                  <div className='Msg receive'>
                    <span>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Nulla voluptas sunt facere tempora pariatur repellat
                      optio? Natus qui, fugit excepturi autem odit est dolorum
                      laborum ut ipsum sapiente, praesentium eaque.
                    </span>
                  </div> */}
                </div>
              </div>
              {/*  */}
              <div className='SendMsg'>
                <div>
                  <div className='emoji'>
                    {IsSticker.emoji || IsSticker.emoji || IsSticker.emoji && !ForCross ? (
                      <>
                        <span onClick={e => hideCross(e)}>
                          <RxCrossCircled
                            style={{ fontSize: '20px', cursor: 'pointer' }}
                          />
                        </span>
                      </>
                    ) : (
                      ''
                    )}
                    <span style={{ position: 'relative' }}>
                      <BsEmojiSmile
                        style={{ fontSize: '20px', cursor: 'pointer' }}
                        onClick={() =>
                          setIsSticker(prev => ({ ...prev, emoji: true }))
                        }
                      />
                      <div className='emojiCollections'>
                        <div className='searchEmoji'>
                          <input
                            type='search'
                            name='searchEmoji'
                            id='searchEmoji'
                            placeholder='Search Emoji'
                            style={{ maxWidth: '213%' }}
                          />
                        </div>
                        <div
                          style={{
                            textAlign: 'center',
                            height: '117px',
                            overflow: 'scroll'
                          }}
                        >
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                        </div>
                      </div>
                    </span>
                    <span style={{ position: 'relative' }}>
                      <BiSticker
                        style={{ fontSize: '20px', cursor: 'pointer' }}
                        onClick={() =>
                          setIsSticker(prev => ({ ...prev, sticker: true }))
                        }
                      />
                      <div className='stickerCollections'>
                        <div className='searchSticker'>
                          <input
                            type='search'
                            name='searchSticker'
                            id='searchSticker'
                            placeholder='Search Sticker'
                          />
                        </div>
                        <div
                          style={{
                            textAlign: 'center',
                            height: '117px',
                            overflow: 'scroll'
                          }}
                        >
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                        </div>
                      </div>
                    </span>
                    <span style={{ position: 'relative' }}>
                      <AiOutlineGif
                        style={{ fontSize: '20px', cursor: 'pointer' }}
                        onClick={() =>
                          setIsSticker(prev => ({ ...prev, gif: true }))
                        }
                      />
                      <div className='gifCollections'>
                        <div className='searchGif'>
                          <input
                            type='search'
                            name='searchGif'
                            id='searchGif'
                            placeholder='Search Sticker'
                          />
                        </div>
                        <div
                          style={{
                            textAlign: 'center',
                            height: '117px',
                            overflow: 'scroll'
                          }}
                        >
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                          <span>&#128550;</span>
                        </div>
                      </div>
                    </span>
                  </div>
                  <div className='inputBox' style={{ width: '90%' }}>
                    <input
                      type='text'
                      name='Msgbox'
                      id=''
                      className='Msgbox'
                      placeholder='Text a Message'
                      style={{ paddingLeft: '10px' }}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </LayoutwithoutFooter>
    </>
  )
}
export default ChatSection
