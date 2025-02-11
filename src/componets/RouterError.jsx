import React from 'react'
import { useRouteError } from 'react-router-dom'
function RouterError() {
    const route_err=useRouteError()
    console.log(route_err)

    return (
        <div style={{minHeight:'100vh'}} className='bg-dark mx-auto my-auto py-5 text-white text-center '>
            {/* <h1>{route_err.status}</h1> */}
            <img style={{height:'500px', fill:'Background' }} src='../src/assets/404-pageerr.jpg'></img>
        </div>
    )
}

export default RouterError