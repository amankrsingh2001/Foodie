import React, { lazy, Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Root from './components/Root.jsx'
import Body from './components/Body.jsx'
// import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Services from './components/Services';
import ResturantMenu from './components/RestaurantMenu.jsx'

const About = lazy(()=>(import( './components/About.jsx')))
const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:
                <Suspense fallback={<h1>This is the about page </h1>}>
                    <About/>
                </Suspense>
              
            },
            {
                path:'/contact',
                element:<Contact/>
            },{
                path:'/services',
                element:<Services/>
            },{
                path:'/resturant/:resId',
                element:<ResturantMenu/>
            }
        ]
    }

])


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <RouterProvider router={router}/>


)
