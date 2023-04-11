import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getApplyJob } from '../../FakeDB/fakedb';

const JobDetails = () => {
    const jobsData = useLoaderData()
    console.log(jobsData)
    const [getJob, setGetJob] = useState([]);
    useEffect(() => {
        const getJob = getApplyJob()
        setGetJob(getJob)
        const singleTitle = Object.keys(getJob)
        const perJob = singleTitle.map(title => jobsData.find(job => job.jobTitle === title))

        setGetJob(perJob)
    }, [])

    return (
        <div className=' '>
            <div className='relative bg-slate-100'>
                <img className='w-full h-64 ' src="https://img.freepik.com/free-vector/pastel-watercolor-with-golden-frame_23-2148796557.jpg?size=626&ext=jpg&ga=GA1.1.1626292175.1681061547&semt=ais" alt="" />
                <div className='flex  justify-around'>
                    <h1 className=' text-4xl my-auto text-center -mt-40 font-medium absolute'>Applied Jobs</h1>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-6'>
                <div className='col-span-8 md:col-span-8 md:pl-40 bg-orange-400'>sdfg</div>
                <div className='col-span-4 md:col-span-4 bg-slate-500'>sdfgd</div>
            </div>
        </div>
    );
};

export default JobDetails;