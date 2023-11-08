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
import MyAddFoods from './Component/AllFood/MyAddFoods'
import UpdateCart from './Component/AllFood/UpdateCart'
import Blog from './Component/Home/Blog'
import PrivateRoute from './Component/Logins/PrivateRoute'
import Search from './Component/AllFood/Search'
import ErrorPage from './Component/Home/ErrorPage'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/allfood',
        element: <FoodPagination></FoodPagination>,
        loader: () => fetch('https://resturent-manage-server.vercel.app/productsCount'),

      },
      {
        path: '/foodDetails/:id',
        element: <PrivateRoute> <FoodMap></FoodMap> </PrivateRoute>,
        loader: ({params}) => fetch(`https://resturent-manage-server.vercel.app/allfoods/details/${params.id}`)
      },
      {
        path: '/foodformmap/:id',
        element: <FoodFormMap></FoodFormMap>,
        loader: ({params}) => fetch(`https://resturent-manage-server.vercel.app/allfoods/details/${params.id}`)
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
      },
      {
        path: "/myAddFoods",
        element: <MyAddFoods></MyAddFoods>,
      },
      {
        path: "/Updatecart/:id",
        element: <UpdateCart></UpdateCart>,
        loader: ({params}) => fetch(`https://resturent-manage-server.vercel.app/allfoods/details/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: "/",
        element: <Search></Search>,
        loader: ({params}) => fetch(`https://resturent-manage-server.vercel.app/allfoods/${params.id}`),
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
