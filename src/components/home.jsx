import React from 'react'
import {HiArrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto pr-[1rem] pl-[4rem] flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi my name is</p>
            <h1 className='text-gray-100 text-4xl sm:text-7xl font-bold'>Jason Grammer</h1>
            <h2 className='text-gray-400 text-4xl sm:text-7xl font-bold'>I'm a full Stack Developer.</h2>
            <p className='text-gray-400 py-4 max-w-[700px]'>I'm a full-stack developer specializing in building exceptional digital experiences. I'm currently focusing on building responsive full-stack web applications.</p>
            <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
                <HiArrowRight className='ml-3 ' />
            </span>
            </button>
            </div>
        </div>
    </div>
  )
}

export default Home
