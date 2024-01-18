import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-950'>
        <div className='max-w-screen-lg mx-auto px-4 h-full flex flex-col md:flex-row items-center justify-center'>
            <div className='mt-2 pt-10 md:pt-0'>
                <h2 className='text-4xl md:text-7xl text-white font-bold'>I'm a Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>I have a 2 years of experience in web development, I specialize in MERN stack, showcasing proficiency in MongoDB, Express, React, and Node.js. Committed to delivering high-quality solutions.
                </p>
                <div>
                    <Link to='portfolio' smooth duration={500} className='group flex items-center justify-center px-6 py-3 w-fit text-white my-2 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                            <MdKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt='My Profile' className='rounded-2xl mx-auto mt-6 md:mt-2 w-[80%] md:w-[400px] ' />
            </div>
        </div>
    </div>
  )
}

export default Home

// h-screen w-full bg-gradient-to-b from-black to-gray-950