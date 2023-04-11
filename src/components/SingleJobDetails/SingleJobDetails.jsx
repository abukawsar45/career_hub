import React, { useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import { BriefcaseIcon, CurrencyDollarIcon, MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { getApplyJob, addToDb } from '../../FakeDB/fakedb';
// import { JobDetailsButtonHandler } from '../SingleJobContent/SingleJobContent';

// 



const SingleJobDetails = () => {
    const singleJobData = useLoaderData();
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, typeOfJob, salary, address, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = singleJobData;
    const {phone, email } = contactInformation   
    const JobDetailsButtonHandler = (jobData) => {
        // console.log(jobData)
        addToDb(jobData)
    }

    return (
        <div className=' '>
            <div className='relative bg-slate-100'>
                <img className='w-full h-64 ' src="https://img.freepik.com/free-vector/pastel-watercolor-with-golden-frame_23-2148796557.jpg?size=626&ext=jpg&ga=GA1.1.1626292175.1681061547&semt=ais" alt="" />
                <div className='flex  justify-around'>
                    <h1 className=' text-4xl my-auto text-center -mt-40 font-medium absolute'>Job Details</h1>
                </div>
            </div>
            <div className='grid my-5 md:my-32 grid-cols-12 gap-6'>
                <div className='col-span-12 p-2 md:col-span-8 md:pl-40'>
                    <p className='mt-6'><span className='font-bold'>Job Describtion</span> : {jobDescription} </p>
                    <p className='mt-3'><span className='font-bold'>Job Responsibility</span> : {jobDescription} </p>
                    <div>
                        <p className='mt-4 font-bold'>Education Requirements: </p>
                        <br />
                        <p>{educationalRequirements} </p>
                    </div>
                    <div>
                        <p className='mt-4 font-bold'>Experiences: </p>
                        <br />
                        <p>{experiences} </p>
                    </div>


                </div>
                <div className='col-span-12 md:col-span-4 p-2 '>
                    <div className=' bg-slate-500 p-2 md:p-8 rounded-sm'>
                        <div>
                            <h1 className='font-bold text-xl pb-6'>Job Details:</h1>
                            <hr />
                            <div className='py-2 md:py-6'>
                                <p className='my-2 flex items-center gap-1 text-orange-200'><span ><CurrencyDollarIcon className="h-4 w-4 " /></span> Salary: {salary} </p>
                                <p className='my-2 flex items-center gap-1 text-orange-200'><span ><BriefcaseIcon className="h-4 w-4 " /></span> Job Title: {jobTitle} </p>
                            </div>
                        </div>
                        <div>
                            <h1 className='font-bold text-xl pb-6'>Contact Information:</h1>
                            <hr />
                            <div className='py-2 md:py-6'>
                                <p className='my-2 flex items-center gap-1 text-orange-200'><span ><PhoneIcon className="h-4 w-4 " /></span> Phone: {phone} </p>
                                <p className='my-2 flex items-center gap-1 text-orange-200'><span ><EnvelopeIcon className="h-4 w-4 " /></span> Email: {email} </p>
                                <p className='my-2 flex items-center gap-1 text-orange-200'><span ><MapPinIcon className="h-4 w-4 " /></span> Address: {address} </p>
                            </div>
                    </div>
                    </div>    
                        <div className=''>
                        <button onClick={() => JobDetailsButtonHandler(jobTitle)} className='button-linear2 w-full  mt-6'>Apply Now</button>
                        </div>
                </div>
            </div>            
        </div>
    );
};

export default SingleJobDetails;
