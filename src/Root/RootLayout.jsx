import React from 'react';
import Navbar from '../Components/header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const RootLayout = () => {
    return (
       <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
       
       </>
    );
};

export default RootLayout;