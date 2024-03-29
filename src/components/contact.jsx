import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen bg-transparent flex justify-center items-center p-4'>
        <form className='flex flex-col max-w-[600px] w-full' method='post' action="https://getform.io/f/8119a825-e4e3-4e6c-a23f-5d2914ea658b">
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f00] text-gray-300'>
                    Contact Me
                </p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 mt-4 px-4 py-3 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact
