import React from 'react'
import RootLayout from './componets/RootLayout'
import { createBrowserRouter, Router,RouterProvider } from 'react-router-dom'
import Home from './componets/Home'
import Signup from './componets/signup'
import Login from './componets/Login'
import RouterError from './componets/RouterError'
function App() {
  const BrowserRouterObj=createBrowserRouter([
    {
      path:"",
      element:<RootLayout/>,
      errorElement:<RouterError/>,
      children:[
        {
          path:'',
          element:<Home/>
        } ,
        {
          path:'login',
          element:<Login/>
        } ,
        {
          path:'signup',
          element:<Signup/>
        } 
      ]
    }
  ])
  return <RouterProvider router={BrowserRouterObj}/>
}

export default App