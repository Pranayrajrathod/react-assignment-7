import React from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

function Swiggy() {
  return (
    <div className='text-white'>
        <div className='nav justify-space-between'>
            <Link className='nav-link text-white' to='order'>Order food</Link>
            <Link className='nav-link text-white' to='instamart'>Instamart</Link>
            <Link className='nav-link text-white' to='dineout'>DineOut</Link>
        </div>
        <div style={{minHeight:'90vh'}} className='bg-primary text-center fs-3 py-4'>
            <Outlet/>
        </div>
    </div>

  )
}

export default Swiggy