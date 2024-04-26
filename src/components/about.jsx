import React from 'react'

const About=()=> {
  return (
    <div name='about' className='w-full min-h-screen bg-transparent text-gray-300 p-4 sm:p-8'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
    <div className='sm:text-right pb-4 sm:pb-8'>
                <p className='text-2xl sm:text-4xl font-bold inline border-b-2 sm:border-b-4 border-[#f00]'>
                    About
                </p>
            </div>
        <div className='max-w-screen-md w-full mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8'>
            <div>
                <p className='text-2xl sm:text-3xl font-bold'>I'm Jason, here is a little bit about who I am.
                </p>
            </div>
            <div className='bg-white bg-opacity-60 p-4 sm:p-6 rounded-2xl text-black'>
                <p className='text-base sm:text-lg'>
                    After 13 years in the military and 3 years working as a private contractor in the Middle East, I was searching for a new challenge. I found that I loved coding and the satisfaction of solving problems. I attended Coding Dojo's software development program and learned a great deal. However, I wanted to know more. I found the perfect computer science program at the University of Tennessee. I am currently taking courses in Algorithms and Machine learning.
                </p>
            </div>
        </div>
    </div>
</div>
  )
}

export default About
