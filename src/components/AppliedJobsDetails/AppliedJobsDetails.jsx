import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedSingleJobDetails from '../AppliedSingleJobDetails/AppliedSingleJobDetails';
import { getApplyJob } from '../../FakeDB/fakedb';
import { ChevronDownIcon} from '@heroicons/react/24/solid'

const AppliedJobDetails = () => {
    const jobsData = useLoaderData()
    console.log(jobsData)
    const [getJob, setGetJob] = useState([]);
    const [filter, setFilter] = useState(false);
    useEffect(() => {
        const getJob = getApplyJob()
        setGetJob(getJob)
        const singleTitle = Object.keys(getJob)
        const perJob = singleTitle.map(title => jobsData.find(job => job.jobTitle === title)) 
        // console.log(perJob)
       
        setGetJob(perJob)
    }, [])
    
    const remoteButtonHandler = () => {
        const getJob = getApplyJob()
        setGetJob(getJob)
        const singleTitle = Object.keys(getJob)
        const perJob = singleTitle.map(title => jobsData.find(job => job.jobTitle === title))
        // console.log(perJob)
        
        // console.log('1111first')
        let remoteCategory = [];
        perJob.map(job => {
            if (job.remoteOrOnsite == 'Remote') {
                remoteCategory.push(job)
            //  console.log('first---')   
            }
            setGetJob(remoteCategory)
        })
    }
    const onsiteButtonHandler = () => {
        const getJob = getApplyJob()
        setGetJob(getJob)
        const singleTitle = Object.keys(getJob)
        const perJob = singleTitle.map(title => jobsData.find(job => job.jobTitle === title))
        // console.log('1111first')
        let onsiteCategory = [];
        perJob.map(job => {
            if (job.remoteOrOnsite == 'Onsite') {
                onsiteCategory.push(job)
            //  console.log('first---')   
            }
            setGetJob(onsiteCategory)
        })
    }
    
    return (
        <div className=' '>
            <div className='relative bg-slate-100'>
                <img className='w-full h-64 ' src="https://img.freepik.com/free-vector/pastel-watercolor-with-golden-frame_23-2148796557.jpg?size=626&ext=jpg&ga=GA1.1.1626292175.1681061547&semt=ais" alt="" />
                <div className='flex  justify-around'>
                    <h1 className=' text-4xl my-auto text-center -mt-40 font-medium absolute'>Applied Jobs</h1>
                </div>
            </div>
            <div className=''>
                <div className='flex justify-end'>
                    <div className='my-button-3 w-32 flex flex-col items-center'>
                        <button onClick={() => setFilter(!filter)} className=' flex items-center'>Filter by  <span ><ChevronDownIcon className="h-4 w-4 " /></span> </button>
                        <div className={filter ? 'flex flex-col' : 'hidden'}>
                            <button onClick={()=>remoteButtonHandler()} className=''>Remote </button>

                            <button onClick={() => onsiteButtonHandler()} className=''>Onsite</button>
                        </div>


                    </div>
                </div>
                <div className='grid grid-row gap-6'>

                    {
                        getJob.map((job, index) =>
                            <AppliedSingleJobDetails
                                key={index.jobTitle}
                                job={job}

                            ></AppliedSingleJobDetails>)
                    }
                    



                </div>
            </div>
        </div>
    );
};

export default AppliedJobDetails;