import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './screens/Login'
import Admin from './screens/Admin'
import Institute from './screens/Institute'
import Student from './screens/Student'
import Teacher from './screens/Teacher'
import Principal from './screens/Principal'
import ResponsiveDrawer from './screens/Admin'
import Register from './screens/Register'



const router = createBrowserRouter([
  {
    path: '',
    element: <Login/>
  },
  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'admin',
    element: <ResponsiveDrawer/>,
    children: [
      {
        path: 'institute',
        element: <Institute/>
      },
      {
        path: 'student',
        element: <Student/>
      },
      {
        path: 'teacher',
        element: <Teacher/>
      },
      {
        path: 'principal',
        element: <Principal/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}/>
  
)
