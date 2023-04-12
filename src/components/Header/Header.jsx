import React from 'react';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center md:flex-row my-4 md:my-6  md:justify-between '>
            <div className=''>
                <h3 className='font-bold text-3xl my-3 md:my-auto font-extrabold -'>Jobs Market</h3>
            </div>
            <div className='flex flex-col justify-center text-xl gap-2 md:gap-4 my-0 md:my-3 md:flex-row '>
                <ActiveLink to='/'>Home</ActiveLink>
                <ActiveLink to='/statistics'>Statistics</ActiveLink>
                <ActiveLink to='/appliedjobs'>Applied Jobs</ActiveLink>
                <ActiveLink to='/blog'>Blog</ActiveLink>
            </div>
            <div>
                <Link to='/'  >
                    <button className='text-white text-xl px-7 mt-4 md:mt-6 py-5 bg-emerald-400 rounded-lg hover:bg-yellow-500 font-mono'>Star Applying</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;