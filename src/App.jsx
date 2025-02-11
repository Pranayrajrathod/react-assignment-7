import React from 'react'
import RootLayout from './componets/RootLayout'
import { createBrowserRouter, Router,RouterProvider } from 'react-router-dom'
import Home from './componets/Home'
import Signup from './componets/Signup'
import Login from './componets/Login'
import RouterError from './componets/RouterError'
import UserProfile from './componets/UserProfile'
import Swiggy from './componets/Swiggy'
import Order from './componets/Order'
import DineOut from './componets/DineOut'
import Instamart from './componets/Instamart'
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
        },
        {
          path:'swiggy',
          element:<Swiggy/>,
          children:[
            {
              path:"",
              element:<Order/>
            },
            {
              path:"order",
              element:<Order/>
            },
            {
              path:"instamart",
              element:<Instamart/>
            },
            {
              path:"dineout",
              element:<DineOut/>
            }
          ]
        },
        {
          path:'userprofile',
          element:<UserProfile/>
        } 
      ]
    }
  ])
  return <RouterProvider router={BrowserRouterObj}/>
}

export default App