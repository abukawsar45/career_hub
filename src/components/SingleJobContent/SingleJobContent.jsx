import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
import { addToDb } from '../../FakeDB/fakedb';
import SingleJobDetails from '../SingleJobDetails/SingleJobDetails';


const SingleJobContent = ({ jobData }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, typeOfJob, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = jobData
    // const { phone, email } = contactInformation
    const JobDetailsButtonHandler = (jobData) => {
        // console.log(jobData)
        addToDb(jobData?.jobTitle)
        // return jobData;
    }
    
    return (
        <div className='p-10 flex flex-col justify-between bg-slate-50 rounded-sm'>
            <img src={companyLogo} className='w-28 h-auto rounded-md my-4 ' alt="" />
            <h2 className='text-2xl font-semibold'>{jobTitle} </h2>
            <h4 className='text-xl text-red-500'>{companyName} </h4>
            <div className='flex gap-9'>
                <button className='my-btn-one'>{remoteOrOnsite} </button>
                <button className='my-btn-one'>{typeOfJob} </button>
            </div>
            <div className='flex gap-6'>
                <p className='flex items-center gap-1 text-neutral-600'><span><MapPinIcon  className="h-4 w-4 " /></span>{location} </p>
                <p className='flex items-center gap-1 text-neutral-600'><span ><CurrencyDollarIcon className="h-4 w-4 " /></span> Salary: {salary} </p>
            </div>
            <div>
                <Link to={`/jobdetails/${id}`}> <button className='button-linear2 mt-6'>View Details</button></Link>
            </div>
        </div>
    );
};

export default SingleJobContent;