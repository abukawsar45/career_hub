import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';


const AppliedSingleJobDetails = ({ job }) => {
    // console.log(job)
    const { id, companyLogo, jobTitle, companyName, remoteOrOnsite, location, typeOfJob, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = job;

    return (
        
        <div className='flex border-2 border-lime-100 bg-slate-50 w-auto gap-6 p-6 md:mx-36 rounded-sm'>
            <img src={companyLogo} className='w-48 h-48  rounded-md me-6 ' alt="" />
            <div className='flex justify-between items-center w-4/6'>
                <div className='flex flex-col w-4/6 '>
                    <h2 className='text-2xl font-semibold'>{jobTitle} </h2>
                    <h4 className='text-xl text-red-500'>{companyName} </h4>
                    <div className='flex gap-9'>
                        <button className='my-btn-one'>{remoteOrOnsite} </button>
                        <button className='my-btn-one'>{typeOfJob} </button>
                    </div>
                    <div className='flex gap-6'>
                        <p className='flex items-center gap-1 text-neutral-600'><span><MapPinIcon className="h-4 w-4 " /></span>{location} </p>
                        <p className='flex items-center gap-1 text-neutral-600'><span ><CurrencyDollarIcon className="h-4 w-4 " /></span> Salary: {salary} </p>
                    </div>
                </div>
                <div className='flex justify-end'>
                    <Link to={`/jobdetails/${id}`}> <button className='button-linear2 mt-6'>View Details</button></Link>
                    {/* <Link to='/appliedjobs'> <button onClick={() => JobDetailsButtonHandler(jobTitle)} className='button-linear2 mt-6'>View Details</button></Link> */}
                </div>
            </div>
        </div>
            
    );
};

// const { phone, email } = contactInformation
// const JobDetailsButtonHandler = (jobData) => {
//     // console.log(jobData)
//     addToDb(jobData)
// }
// return (
//     <div className='p-10 flex flex-col justify-between bg-slate-50 rounded-sm'>
       
        
//         <div>


//         </div>
//     </div>
// );
// };


export default AppliedSingleJobDetails;