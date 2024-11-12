import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';
import FilterCards from './FilterCards';
import Job from './Job';

const JobsArray = [1, 2, 3, 4, 5, 6, 7, 8];

const Jobs = () => {
  return (
    <div>
      <Navbar />
      <div className='max-w-7xl mx-auto mt-5'>
        {/* Filter for jobs */}
        <div className='flex gap-5'>
        <div className='w-[20%]'>
        <FilterCards />
        </div>

        {/* Job Cards */}
          {
            JobsArray.length <= 0 
            ? <span>Jobs Not Found</span>
            : (
                <div className='flex-1  h-[88vh] overflow-y-auto pb-5'>
                  <div className='grid grid-cols-3 gap-4'>
                    {
                      JobsArray.map((item, index) => (
                        <div key={index} >
                          <Job/>
                        </div> 
                      ))
                    }       
                  </div>
                </div>              
            )
          }
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Jobs;
