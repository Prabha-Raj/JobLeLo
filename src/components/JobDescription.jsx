import { React } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button';

const JobDescription = () => {
    const isApplied = false;
    return (
        <div className='max-w-7xl mx-auto bg-white border border-gray-200 rounded-2xl my-2 p-8'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='font-bold text-xl'>Frontend Developer</h1>
                    <div className='flex items-center gap-2 mt-4'>
                        <Badge className="text-blue-700 font-bold" variant="ghost">12 Positions</Badge>
                        <Badge className="text-[#f83002] font-bold" variant="ghost">Part time</Badge>
                        <Badge className="text-[#6a38c2] font-bold" variant="ghost">24LPA</Badge>
                    </div>
                </div>
                <Button 
                    disabled={isApplied} 
                    className={`rounded-lg ${isApplied ? 'bg-green-700 cursor-not-allowed ' : 'bg-[#6a38c2] hover:bg-[#49238b] cursor-pointer'}`}>
                    {isApplied ? "Applied" : "Apply Now"} 
                </Button>
            </div>
            <h1 className=' border-b border-b-gray-300 font-medium py-4 my-4'>Job Description</h1>
            <div className='my-4'>
                <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>Frontend Developer</span></h1>
                <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>Lucknow</span></h1>
                <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum tempora, corrupti eligendi a asperiores inventore?</span></h1>
                <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>0-5 years</span></h1>
                <h1 className='font-bold my-1'>salary: <span className='pl-4 font-normal text-gray-800'>3-12LPA</span></h1>
                <h1 className='font-bold my-1'>Total Application: <span className='pl-4 font-normal text-gray-800'>200</span></h1>
                <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>25-10-2024</span></h1>
            </div>
        </div>
    )
}

export default JobDescription