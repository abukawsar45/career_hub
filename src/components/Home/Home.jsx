import React from 'react';
import JobsCategory from '../JobsCategory/JobsCategory';
import { useLoaderData } from 'react-router-dom';
import JobsContent from '../../JobsContent/JobsContent';

const HeaderContent = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
       <div>
            <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className='w-6/12 order-2 md:order-1 '>
                    <h1 className=' text-7xl font-bold'>
                        Choose Your
                        <br />
                        <span className='text-lime-400'>Favourite Job</span>
                    </h1>
                    <p className='my-6'>It's the era of the Great Resignation- so how do you get a job they love? We found out  how.
                        HR and corporate leaders share their  inside scoop on finding the perfect job match for you.</p>
                    <button className='my-2 text-white text-xl px-7 py-5 bg-emerald-400 rounded-lg hover:bg-yellow-500 font-medium'>Get Start</button>
                </div>
                <div className='w-6/12 flex order-1 md:order-2 justify-center'>
                    <img src="https://img.freepik.com/free-photo/man-white_1368-3544.jpg?size=626&ext=jpg&ga=GA1.1.1626292175.1681061547&semt=ais" alt="" />
                </div>
            </div>
            <JobsCategory></JobsCategory>
            <JobsContent data={data} ></JobsContent>
       </div>
    );
};

export default HeaderContent;