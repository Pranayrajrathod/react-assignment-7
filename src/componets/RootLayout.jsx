import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
function RootLayout() {
  return (
    <div className=''>
    <Header></Header>
    <div className='bg-dark' style={{minHeight:'90vh'}}>
        <Outlet></Outlet>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default RootLayout