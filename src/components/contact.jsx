import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-transparent text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#f00]'>Contact</p>
                </div>
            <div className='max-w-[1000px] w-full  gap-8'>
                
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Let's talk.</p>
                </div>
                <div className='bg-white bg-opacity-60 p-6 rounded-2xl text-black'>
                    <p className='text-xl'>Jason Grammer</p>
                    <p className='text-xl'>Email: <a href="mailto: grammerjasonl@gmail.com
                        ">Grammerjasonl@gmail.com</a>
                    </p>
                </div>
            </div>
            </div>
        </div>
    </div>

  )
}

export default Contact
