import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from '../pages/About'
import Help from '../pages/Help'
import Home from '../pages/Home'
import Page_Not_Found from '../pages/Page_Not_Found'
import Footer from './Footer'
import Header from './Header'

const Layout = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='*' element={<Page_Not_Found/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default Layout