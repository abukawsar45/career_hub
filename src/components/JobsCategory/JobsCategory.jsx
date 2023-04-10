import React, { useEffect, useState } from 'react';
import SingleCategory from '../SingleCategory/SingleCategory';


const JobsCategory = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('jobscategory.json')
            .then(response => response.json())
            .then(data => setCategorys(data))
    }, [])
    // console.log(categorys)


    return (
        <div>
            <div className='text-center'>
                <h2 className='font-semibold text-5xl'>Job Category List</h2>
                <p className='text-gray-700 my-4'>Explore our large platform for the opportunities you need.</p>
            </div>
            <div className='flex my-4 gap-4 justify-between'>
                {
                    categorys.map((category, id) => 
                        <SingleCategory 
                            key={id}
                            category={category}
                        >

                        </SingleCategory>
                     )
                }


            </div>
        </div>
    );
};

export default JobsCategory;