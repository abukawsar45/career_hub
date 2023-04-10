import React from 'react';

const SingleCategory = ({ category }) => {
    // console.log(category)
    const { name, logo, members_needed } = category

    return (
        <div className='p-10 pr-24 bg-slate-100'>
            <img src={logo} className='w-16 h-16 p-4 bg-slate-300 rounded-lg ' alt="" />
            <h2 className='font-semibold text-xl'>{name}</h2>
            <p className='text-gray-400'>{members_needed} Jobs Available </p>
        </div>
    );
};

export default SingleCategory;