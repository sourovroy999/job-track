import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../NavBar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;