import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import JG from '../assets/JG.png'
import { Link } from 'react-scroll'

const  Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300'>

        {/* Logo */}
        <div>
            <img src={JG} alt="intial" style={{width: '50px'}} />
        </div>
        
            <ul className='hidden md:flex'>
                <li className='text-xl'>
                    <Link to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='text-xl'>
                    <Link to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='text-xl'>
                    <Link to='skills' smooth={true} duration={500}>Skills</Link>
                </li>
                <li className='text-xl'>
                    <Link to='work' smooth={true} duration={500}>Projects</Link>
                </li>
                <li className='text-xl'>
                    <Link to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/* mobile menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='work' smooth={true} duration={500}>Projects</Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
        </ul>

        {/* social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/jason-grammer-dev82/">Linkedin <FaLinkedin size={30}/></a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/Brewerjg">GitHub <FaGithub size={30}/></a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
