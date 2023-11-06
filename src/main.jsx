import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import FoodPagination from './Component/AllFood/FoodPagination'
import FoodMap from './Component/AllFood/FoodMap'


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
      }
      
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
