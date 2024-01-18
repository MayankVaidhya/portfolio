import React from 'react'
import HTMLImg from '../assets/html.png'
import CSSImg from '../assets/css.png'
import JavaScriptImg from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import TailwindImg from '../assets/tailwind.png'
import NextjsImg from '../assets/nextjs.png'
import GraphqlImg from '../assets/graphql.png'
import GithubImg from '../assets/github.png'

const Experience = () => {

    const experienceCard = [
        {
            id: 1,
            img: HTMLImg,
            title: 'HTML',
            style: 'shadow-orange-600'
        },
        {
            id: 2,
            img: CSSImg,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            img: JavaScriptImg,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            img: ReactImg,
            title: 'React Js',
            style: 'shadow-blue-600'
        },
        {
            id: 5,
            img: TailwindImg,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 6,
            img: NextjsImg,
            title: 'Next Js',
            style: 'shadow-white'
        },
        {
            id: 7,
            img: GraphqlImg,
            title: 'GraphQl',
            style: 'shadow-pink-400'
        },
        {
            id: 8,
            img: GithubImg,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ]

  return (
    <div className='h-auto w-full bg-gradient-to-b from-gray-950 to-black text-white'>
        <div className="max-w-screen-lg m-auto p-4 w-full h-full flex flex-col justify-center">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Experience</p>
                <p className='mt-6'>These are the technologies I' ve worked with</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10 flex-wrap mb-8">
                {experienceCard.map(({id, img, title, style}) => (
                <div key={id} className={`w-full md:w-[300px] h-36 py-2 rounded-lg shadow-md duration-200 hover:scale-105 ${style}`}>
                    <img src={img} alt="" className='w-20 mx-auto' />
                    <div className="w-full h-[20%] flex justify-around items-center cursor-pointer">
                        <p className='mt-8'>{title}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Experience;