import React from 'react'
import { useRouteError } from 'react-router-dom'
function RouterError() {
    const route_err=useRouteError()
    console.log(route_err)

    return (
        <div style={{minHeight:'100vh'}} className='bg-dark mx-auto py-5 text-white text-center '>
            <h1>ERROR OCCURED : {route_err.status}</h1>
        </div>
    )
}

export default RouterError