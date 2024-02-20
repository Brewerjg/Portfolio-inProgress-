import React from 'react'

const About=()=> {
  return (
    <div name='about' className='w-full h-screen bg-transparent text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f00]'>About</p>
                </div>
                <div></div>
                
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>I'm Jason, here is a little bit about who I am.</p>
                </div>
                <div className='bg-white bg-opacity-60 p-6 rounded-2xl text-black'>
                    <p>After 13 years in the military and 3 years working as a private contractor in the Middle East.  I was searching for a new challenge.  I found that I loved coding and the satisfaction of solving problems.  I attended Coding Dojo's software development program and learned a great deal.  However, I wanted to know more.  I found the perfect computer science program at the University of Tennessee.  I am currently taking courses in Algorithms and Machine learning.</p>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About
