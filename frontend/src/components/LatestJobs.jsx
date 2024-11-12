import React from 'react'
import LatestJobCards from './LatestJobCards';
const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];
const LatestJobs = () => {
    return (
        <div className='max-w-7xl mx-auto '>
            <h1 className='text-4xl font-bold'>Latest & Top<span className='text-[#6a38c2] italic'> Job Openings</span> </h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
            {
                randomJobs.slice(0, 6).map((item, index) => <LatestJobCards key={index}/>)
            }
            </div>
        </div>
    )
}

export default LatestJobs