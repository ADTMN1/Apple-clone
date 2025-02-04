import React from 'react';
import Header from './header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const SharedLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default SharedLayout;
