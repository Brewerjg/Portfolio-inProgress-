import React from 'react'
import {HiArrowRight} from 'react-icons/hi'
import background from '../assets/background.mp4'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name='home' className='w-full h-screen bg-transparent'>
      <video className='video-bg' src={background} autoPlay loop muted></video>
        {/* container */}
        <div className='max-w-[1000px] mx-auto pr-[1rem] pl-[4rem] flex flex-col justify-center h-full'>
          <div className='bg-white bg-opacity-60 p-6 rounded-2xl'>
              <p className='text-black text-lg'>Hi my name is</p>
              <h1 className='text-black text-4xl sm:text-7xl font-bold'>Jason Grammer</h1>
              <h3 className='text-black text-3xl sm:text-5xl font-bold'>I'm a Software Engineer student at the <span className='text-[#ef7f28]'>University of Tennessee</span>.</h3>
              <p className='text-black text-lg py-4 max-w-[700px]'>I'm a full-stack developer who believes that one should never stop learning.  I am currently working on my masters degree in an effort to go from developer to engineer. </p>
              <div>
                <Link to='work' smooth={true} duration={500}>
                  <button className='text-black group border-black border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f00] hover:border-[#f00]'>
                    View Work
                  <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowRight className='ml-3 ' />
                  </span>
                  </button>
                </Link>
          </div>
            </div>
        </div>
    </div>
  )
}

export default Home
