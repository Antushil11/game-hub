import React from 'react';
import { Outlet } from 'react-router';

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer><Footer></Footer></footer>
            
        </div>
    );
};

export default HomeLayout;