import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header><Header></Header></header>
            <main className='min-h-screen'>
                <Outlet></Outlet>
            </main>
            <footer><Footer></Footer></footer>
            
        </div>
    );
};

export default HomeLayout;