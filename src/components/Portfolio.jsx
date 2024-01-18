import React from 'react'
import TicTacToe from '../assets/portfolio/tic-tac-toe.png'
import QuizApp from '../assets/portfolio/quiz-app.png'
import TextToVoice from '../assets/portfolio/text-to-voice.png'
import Youtube from '../assets/portfolio/youtube.png'
import DevTool from '../assets/portfolio/dev-tool.png'
import IgDownloader from '../assets/portfolio/ig-downloader.png'
import GoogleEngine from '../assets/portfolio/google-engine.png'

const Portfolio = () => {

    const cardBox = [
        {
            id: 1,
            img: TicTacToe,
            live: 'https://tic-tac-toe-lt.netlify.app/',
            code: 'https://github.com/MayankVaidhya/tic-tac-tooe-git'
        },
        {
            id: 2,
            img: QuizApp,
            live: 'https://master-new-quiz-app.netlify.app/',
            code: 'https://github.com/MayankVaidhya/quiz-app'
        },
        {
            id: 3,
            img: TextToVoice,
            live: 'https://text-voive-generator.netlify.app/',
            code: 'https://github.com/MayankVaidhya/text-to-voice'
        },
        {
            id: 4,
            img: Youtube,
            live: 'https://yt-clone-lite.netlify.app/',
            code: 'https://github.com/MayankVaidhya/youtube_lite'
        },
        {
            id: 5,
            img: DevTool,
            live: 'https://devskilltool.netlify.app/',
            code: 'https://github.com/MayankVaidhya/devloper-tool'
        },
        {
            id: 6,
            img: IgDownloader,
            live: 'https://igg-downloader.netlify.app/',
            code: 'https://github.com/MayankVaidhya'
        },
        {
            id: 7,
            img: GoogleEngine,
            live: 'https://google-engine-clones.netlify.app/',
            code: 'https://github.com/MayankVaidhya/google-search-engine'
        },
        
    ]


  return (
    <div className='h-auto w-full bg-gradient-to-b from-black to-gray-950 text-white'>
        <div className="max-w-screen-lg m-auto p-4 w-full h-full flex flex-col justify-center">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Portfolio</p>
                <p className='mt-6'>Check out some of my work rigth here</p>
            </div>
            <div className='flex flex-col md:flex-row gap-10 flex-wrap mb-8'>
                {cardBox.map(({id, img, live, code}) => (
                    <div key={id} className="w-full md:w-[300px] h-56 rounded-lg shadow-md shadow-gray-600">
                        <img src={img} alt="" className='w-full h-[75%] rounded-md duration-200 hover:scale-105' />
                        <div className="w-full h-[25%] flex justify-around items-center cursor-pointer">
                            <a href={live} className="text-gray-500" target='_blank' rel="noreferrer">Live</a>
                            <a href={code} className="text-gray-500" target='_blank' rel="noreferrer">Code</a>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div className="flex justify-center items-center gap-1 mb-8">
                <div className="w-12 h-12 flex justify-center items-center border-2 border-gray-600 rounded-full hover:bg-cyan-500 duration-300 cursor-pointer"><i class="bi bi-chevron-left"></i></div>
                <div className="w-12 h-12 flex justify-center items-center border-2 border-gray-600 rounded-full hover:bg-cyan-500 duration-300 cursor-pointer">1</div>
                <div className="w-12 h-12 flex justify-center items-center border-2 border-gray-600 rounded-full hover:bg-cyan-500 duration-300 cursor-pointer">2</div>
                <div className="w-12 h-12 flex justify-center items-center border-2 border-gray-600 rounded-full hover:bg-cyan-500 duration-300 cursor-pointer">3</div>
                <div className="w-12 h-12 flex justify-center items-center border-2 border-gray-600 rounded-full hover:bg-cyan-500 duration-300 cursor-pointer"><i class="bi bi-chevron-right"></i></div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio