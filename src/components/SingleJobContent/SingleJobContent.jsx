import React from 'react';


const SingleJobContent = ({ jobData }) => {
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, typeOfJob, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = jobData
    // const { phone, email } = contactInformation
    return (
        <div className='p-10 flex flex-col justify-between bg-slate-50 rounded-sm'>
            <img src={companyLogo} className='w-28 h-auto rounded-md my-4 ' alt="" />
            <h2 className='text-2xl font-semibold'>{jobTitle} </h2>
            <h4 className='text-xl text-red-500'>{companyName} </h4>
            <div className='flex gap-9'>
                <button className='px-5 py-2 text-teal-700 border-2 my-4 border-gray-300 rounded-sm'>{remoteOrOnsite} </button>
                <button className='px-5 py-2 text-teal-700 border-2 my-4 border-gray-300 rounded-sm'>{typeOfJob} </button>
            </div>
            <div className='flex gap-6'>
                <p> {location} </p>
                <p>{salary} </p>
            </div>
            <div>
                <button className='button-linear2  mt-6'>View More</button>

            </div>
        </div>
    );
};

export default SingleJobContent;