import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUs from './Component/AboutUs.jsx'
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Contact from './Component/Contact.jsx'
import Error from './Component/Error.jsx'
import Body from './Component/Body.jsx'
import RestaurantMenu from './Component/RestaurantMenu.jsx'


// const appRouter = createBrowserRouter([
//   {
//     path : "/",
//     element : <App/>,
//     errorElement : <Error/>,
//     // ErrorBoundary : <Error/>
//   },
//   {
//     path : "/about",
//     element : <AboutUs/>,
//   },  
//   {
//     path : "/contact",
//     element : <Contact/>,
//   }
// ]);

const appRouter = createBrowserRouter([
  {
    path : "/",  
    element : <App/>,
    children : [ 
    {
      path : "/",
      element : <Body/>

    },
    {
      path : "/about",
      element : <AboutUs/>
    },
    {
      path : "/contact",
      element : <Contact/>
    },
    {
      path : "/restaurants/:resId",
      element : <RestaurantMenu/>
    }],
    errorElement : <Error/>
  },

])




ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {appRouter}/>
)
