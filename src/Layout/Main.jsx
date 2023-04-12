import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='m-0 sm:m-2 md:m-5 lg:m-8 '>
            <Header></Header>
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default Main;