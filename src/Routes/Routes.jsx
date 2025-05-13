import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Root/RootLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import LawyerDetails from "../Components/Lawyer/LawyerDetails";
import ErrorLawyer from "../Components/Lawyer/ErrorLawyer";
import Bookings from "../Pages/Bookings";
import Blog from "../Pages/Blog"
import Contact from "../Pages/Contact";



const routes = createBrowserRouter([
    
    {
        path:'/',
        errorElement:<Error></Error>,
        element:<RootLayout></RootLayout>,
        children:[
            {
                index:true,
                path:'/',
                loader:async()=>{
                   const res = await fetch('lawyer.json')
                  return res.json()
                },
                element:<Home></Home>

            },
            {
                path:'lawyer/:id',
                errorElement:<ErrorLawyer></ErrorLawyer>,
                loader:async()=>{
                    const res = await fetch('/lawyer.json')
                   return res.json()
                 },
                 element:<LawyerDetails></LawyerDetails>,
                 
            },
            {
                path:'/my-bookings',
                loader:async()=>{
                    const res = await fetch('/lawyer.json')
                   return res.json()
                 },
                element:<Bookings></Bookings>
                
            },
            {
                path:'/blogs',
            
                element:<Blog></Blog>
                
            },
            {
                path:'/contact',
            
                element:<Contact></Contact>
                
            }
        ]
        
    }
])

export default routes