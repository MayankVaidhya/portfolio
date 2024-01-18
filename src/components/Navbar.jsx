import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'

const Navbar = () => {

    const [nav, setNav] = useState(false);

    let links = [
        {
            id: 1,
            link: 'Home',
        },
        {
            id: 2,
            link: 'Portfolio',
        },
        {
            id: 3,
            link: 'About',
        },
        {
            id: 4,
            link: 'Contact',
        },
        {
            id: 5,
            link: 'Experience',
        },
    ]

    

  return (
    <div className='bg-black w-full h-20 flex justify-between items-center text-white px-4 fixed z-10'>
        <div>
            <h1 className="text-5xl font-signature">Mayank</h1>
        </div>
        <ul className='hidden md:flex'>
            {links.map(({id, link}) => (
                <li key={id} className="capitalize px-4 text-gray-500 cursor-pointer hover:text-white duration-300 hover:scale-105">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="md:hidden cursor-pointer pr-2 text-gray-500 z-10">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-4 left-2 text-gray-500 bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg w-[95%] h-[350px] md:hidden">
            {links.map(({id, link}) => (
                <li key={id} className="capitalize px-4 py-2 text-2xl text-gray-400 cursor-pointer hover:text-white duration-300">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
            </ul>
        )}
    </div>
  )
}

export default Navbar