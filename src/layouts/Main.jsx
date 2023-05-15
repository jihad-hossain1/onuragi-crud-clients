import React from 'react';
import Header from '../shared/header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/footer/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
           <div className='min-h-screen mx-5 md:mx-40'>
           <Outlet></Outlet>
           </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;