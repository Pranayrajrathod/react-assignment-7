import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

function UserProfile() {
    
    const locatedobject=useLocation()
    let [currentUser,SetcurrentUser]=useState(locatedobject.state)
    console.log(locatedobject)
  return (
    <div className='text-info py-4 fs-1 text-center'>
        <h1><span className="text-warning">Username : </span>
        {currentUser.username}</h1>
        <h1><span className="text-warning">Mail : </span>
        {currentUser.mail}</h1>
        <h1><span className="text-warning">Password : </span>
        {currentUser.password}</h1>
    </div>
  )
}

export default UserProfile