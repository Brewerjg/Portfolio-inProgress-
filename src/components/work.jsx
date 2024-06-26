import React from 'react'
import realEstate from '../assets/realestate.jpg'
import Tcof from '../assets/Tcof.png'
import Album from'../assets/album.png'


function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-transparent'>
        {/* container */}
        <div className='max-w-[1000px mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='mx-auto pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#f00]'>Work</p>
                <p className='py-6'>Check out my recent work.</p>
            </div>

            {/* grid */}
            <div 
            className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>
                <div style={{backgroundImage: `url(${Tcof})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='p-2 text-2xl font-bold text-white tracking wider'>
                            Vite Application
                        </span>
                        <p className='p-2 font-bold text-white tracking wider'>
                            Fake coffee shop landing page with admin dashboard. Upload products and register employees.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="http://34.218.245.73/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            <a href="https://github.com/Brewerjg/CofVite">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Album})`}}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='p-2 text-2xl font-bold text-white tracking wider'>
                            React Application
                        </span>
                        <p className='p-2 font-bold text-white tracking wider'>
                            Family photo sharing site.  Sort photos by family name.  Upload photos to albums.
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="http://35.93.154.54/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Demo</button>
                            </a>
                            <a href="https://github.com/Brewerjg/family">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work
