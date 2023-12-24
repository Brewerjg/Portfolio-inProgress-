import React from 'react'
import Css from '../assets/css.png'
import GitHub from '../assets/github.png'
import Html from '../assets/html.png'
import Js from '../assets/javascript.png'
import Mongo from '../assets/mongo.png'
import ReactImg from '../assets/react.png'
import Java from '../assets/java.png'
import Python from '../assets/python.png'
import Django from '../assets/django.png'
import Tailwind from '../assets/tailwind.png'

const Skills =() => {
  return (
    <div name='skills' className=' w-full bg-transparent h-screen  text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inlin border-b-4 border-[#f00]'>Skills</p>
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
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 scale-125 mx-auto' src={Java} alt='javaimg' />
                    <p className='my-4'>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Python} alt='reactimg' />
                    <p className='my-4'>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 scale-125 mx-auto' src={Django} alt='reactimg' />
                    <p className='my-4'>Django</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mt-4  mx-auto' src={Tailwind} alt='reactimg' />
                    <p className='mt-8'>Tailwind CSS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills
