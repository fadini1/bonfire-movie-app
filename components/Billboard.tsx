import { BsInfoCircle } from 'react-icons/bs';

import React from 'react';

import useBillboard from "@/hooks/useBillboard";

const Billboard = () => {
  const { data } = useBillboard();

  return (
    <div className='relative h-[56.25vh]'>
      <video 
      className='w-full h-[100vh] object-cover brightness-[60%]' 
      src={data?.videoUrl}
      poster={data?.thumbnailUrl}
      autoPlay
      muted
      loop>
      </video>
      <div className='top-[80%] lg:ml-[70px] md:ml-14 ml-10 absolute'>
        <div className='text-4xl sm:text-5xl lg:text-6xl use-trebuchet
        font-bold'>
          {data?.title}
        </div>
        <div className='text-lg sm:text-xl sm:max-w-sm max-w-[290px] mt-1 ml-1
        use-trebuchet'>
          {data?.description}
        </div>
        <div>
          <button className='ml-1 bg-cyan-600 px-4 py-1.5 rounded-lg mt-2
          hover:bg-cyan-500 transition duration-300 text-black sm:text-lg
          focus:outline-none use-trebuchet font-medium flex items-center 
          gap-2 '>
            <BsInfoCircle 
              className='lg:h-5 lg:w-5 sm:h-5 sm:w-5 h-[18px] w-[18px]'
            />
            Details
          </button>
        </div>
      </div>
    </div>
  )
}

export default Billboard;