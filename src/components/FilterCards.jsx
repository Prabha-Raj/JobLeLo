import React from 'react'
import { RadioGroup, RadioGroupItem  } from './ui/radio-group'


const filterData = [
    {
        filterType:"Location",
        fitlerArray:["Delhi NCR", "Hydrabad", "Pune", "Mumbai"]
    },
    {
        filterType:"Industry",
        fitlerArray:["Frontend Developerr", "Backend Developer", "Full Stack Developer", "MERN Stack Developer"]
    },
    {
        filterType:"Salary",
        fitlerArray:["8-40k", "42-1L", "15-80k", "40-90k"]
    },
]
const FilterCards = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md border h-auto'>
      <h1 className='text-2xl font-black'>Filter <span className='text-[#6a38c2] italic' >Jobs</span></h1>
      <hr className='mt-3'/>
      <RadioGroup>
        {
            filterData.map((data, index)=>(
                <div key={index} className='font-bold text-lg'>
                    <h1>{data.filterType}</h1>
                    {
                        data.fitlerArray.map((item, index)=>{
                            return (
                                <div key={index} className='flex items-center space-x-2 my-2'>
                                    <RadioGroupItem value={item} id={item+index} />
                                    <label htmlFor={item+index} className='text-sm text-gray-700 font-bold cursor-pointer'>{item}</label>
                                </div>
                            )
                        })
                    }
                </div>
            ))
        }
      </RadioGroup>
    </div>
  )
}

export default FilterCards
