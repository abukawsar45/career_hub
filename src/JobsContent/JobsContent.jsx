import React, { useEffect, useState } from 'react';
import SingleJobContent from '../components/SingleJobContent/SingleJobContent';
import { Link, useLoaderData } from 'react-router-dom';

const JobsContent = () => {
    const [jobsData, setJobsDatta] = useState([]);
    const [seeMore, setSeeMore] = useState(false);
    const allJobDetails = useLoaderData()
    useEffect(() => {
        fetch('/jobsdata.json')
            .then(response => response.json())
            .then(data => setJobsDatta(data.slice(0,4)))
    }, [])
    // console.log(jobsData)
    const seeAllButttonHandler = () => {
        // console.log('first')
        setJobsDatta(allJobDetails);
        setSeeMore(!seeMore)
    }


    return (
        <div>
            <div className='text-center mt-12 md:mt-28'>
                <h2 className='font-semibold text-5xl my-4'>Featured Jobs</h2>
                <p className='text-gray-700 mb-4'>Your job placement carries a bright future in our job market.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-7 gap-4 '>
                {
                    jobsData.map((jobData,id) =>
                    <SingleJobContent    
                            key={id}
                            jobData={jobData}
                        >
                        </SingleJobContent>
                    )
                }


            </div>
            <div className='flex justify-center'>
                {
                    seeMore?
                   ''
                        :
                        <button onClick={() => seeAllButttonHandler()} className='button-linear mt-10'>see more</button>
                    
                    }
                </div>
        </div>
    );
};

export default JobsContent;