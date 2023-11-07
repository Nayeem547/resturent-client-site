import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import FoodPagination from './Component/AllFood/FoodPagination'
import FoodMap from './Component/AllFood/FoodMap'
import Login from './Component/Logins/Login'
import SignUp from './Component/Logins/SignUp'
import AuthProvider from './Component/Provider/AuthProvider'
import FoodFormMap from './Component/AllFood/FoodFormMap'
import MyOrder from './Component/AllFood/MyOrder'
import AddFood from './Component/AllFood/AddFood'
import MyFooter from './Component/Home/MyFooter'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allfood',
        element: <FoodPagination></FoodPagination>,
        loader: () => fetch('http://localhost:5000/productsCount'),

      },
      {
        path: '/foodDetails/:id',
        element: <FoodMap></FoodMap>,
        loader: ({params}) => fetch(`http://localhost:5000/allfoods/details/${params.id}`)
      },
      {
        path: '/foodformmap/:id',
        element: <FoodFormMap></FoodFormMap>,
        loader: ({params}) => fetch(`http://localhost:5000/allfoods/details/${params.id}`)
      },
      {
        path: "/login",
        element: <Login></Login>,

      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myorder",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "/addfood",
        element: <AddFood></AddFood>,
      },
      {
        path: "/footer",
        element: <MyFooter></MyFooter>,
      }
      
      
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>,
)
