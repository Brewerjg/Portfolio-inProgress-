import React from 'react'
import Css from '../assets/css.png'
import GitHub from '../assets/github.png'
import Html from '../assets/html.png'
import Js from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import ReactImg from '../assets/react.png'

const Skills =() => {
  return (
    <div name='skills' className='bg-[#0a192f] w-full h-screen  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inlin border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with.</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Css} alt='css' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={GitHub} alt='github' />
                    <p className='my-4'>GITHUB</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Html} alt='html' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Js} alt='js' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>

                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt='mongo' />
                    <p className='my-4'>MONGODB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='reactimg' />
                    <p className='my-4'>REACT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
