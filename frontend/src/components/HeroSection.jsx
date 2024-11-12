import React from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className='text-center'>
        <div className='flex flex-col gap-6 my-10'>
        <span className='px-4 py-2 mx-auto rounded-full bg-gray-100 text-[#f83002] font-medium'>No. 1 Job Portal</span>
        <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6a38c2] italic'>Dream Jobs</span></h1>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum tempora aliquam quibusdam molestias, expedita harum?</p>
        <div className='flex w-[50%] h-14 shadow-lg border border-gray-200 pl-7  rounded-full items-center gap4 mx-auto'>
            <input 
            type="text" 
            placeholder='Find your dream jobs'
            className='outline-none focus:outline-none border-none text-xl  w-full'
            />
            <Button className="rounded-r-full h-14 w-14 bg-[#6a38c2]">
                <Search className='h-8 w-8'/>
            </Button>
        </div>
    </div>
    
    </div>
  )
}

export default HeroSection
