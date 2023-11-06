import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import FoodPagination from './Component/AllFood/FoodPagination'


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

      }
      
    ]
  }
])




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
