import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Footer = () => {

    const links = [
        {
            id: 1,
            child: <FaLinkedin size={30} />,
            href: 'https://in.linkedin.com/',
        },
        {
            id: 2,
            child: <FaGithub size={30} />,
            href: 'https://github.com/MayankVaidhya',
        },
        {
            id: 3,
            child: <HiOutlineMail size={30} />,
            href: 'mailto:vaidhyamayank490@gmail.com',
        },
        {
            id: 4,
            child: <BsFillPersonLinesFill size={30} />,
            href: '/nodejs-notes.txt',
            download: true
        },
    ]

  return (
    <div className='bg-black flex text-white p-4 justify-center md:justify-between items-center'>
        <div className='hidden md:flex'>
            <a href='https://mayankvaidhya.netlify.com' target='_blank' rel="noreferrer" className="text-xl text-gray-600">Source Code</a>
        </div>
        <ul className='flex gap-10 md:pr-4'>
            {links.map(({id, child, href, download}) => (
                <li key={id} className='hover:text-cyan-500 duration-300 hover:scale-110'>
                    <a href={href} target='_blank' rel="noreferrer" download={download}>{child}</a>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Footer