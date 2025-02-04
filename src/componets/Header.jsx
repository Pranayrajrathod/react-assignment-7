import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-alert text-white '>
        <div className='nav fs-1 py-4 bg-secondary d-flex justify-content-around'>
            <img src='../src/assets/react.svg' style={{height:'50px'}}></img>
            <li className='nav-item'>
                <Link to='' className='nav-link text-white'>
                    Home
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='login' className='nav-link text-white'>
                    Login
                </Link>
            </li>
            <li className='nav-item'>
                <Link to='signup' className='nav-link text-white'>
                    Signup
                </Link>
            </li>
        </div>
    </div>
  )
}

export default Header