import React from 'react'
import { Button } from './ui/button'
import {Bookmark, BookMarked } from 'lucide-react'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const Job = () => {
    const navigate = useNavigate()
    const jobId = "iobid"
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border border-gray-200'>
            <div className='flex items-center justify-between '>
                <p className='text-sm text-gray-400'>2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon" ><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-5 my-2'>
                <Button variant="outline" className="rounded-full" size="icon" >
                    <Avatar>
                        <AvatarImage src='https://img.freepik.com/premium-vector/minimalist-company-logo-template_1286368-135445.jpg?ga=GA1.1.1494204880.1717985110&semt=ais_hybrid' />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-medium text-lg">Company Name</h1>
                    <p className='text-gray-600'>Location</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-500'> Lorem ipsum dolor sit amet consectetur quis dolorem voluptates cumque harum velit. Pariatur consequatur praesentium voluptatum odit, dicta veritatis.</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
        <Badge className="text-blue-700 font-bold" variant="ghost">12 Positions</Badge>
        <Badge className="text-[#f83002] font-bold" variant="ghost">Part time</Badge>
        <Badge className="text-[#6a38c2] font-bold" variant="ghost">24LPA</Badge>
      </div>
      <div className='flex items-center gap-4 mt-4'>
        <Button variant="outline" onClick={() => navigate(`/jobdescription/${jobId}`)}>Details</Button>
        <Button className="bg-[#6a38c2] hover:bg-[#4a248d]">Save for later</Button>
      </div>
        </div>
    )
}

export default Job
