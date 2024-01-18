import React from 'react'

const Contact = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-b from-black to-gray-950 text-white'>
        <div className="max-w-screen-lg m-auto p-4 w-full h-full flex flex-col justify-center">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>Contact</p>
                <p className='mt-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className="flex justify-center items-center">
                <form action="https://getform.io/f/0c92b139-9eef-4da9-bef9-64cf3633cec2" method="POST" className='flex flex-col w-full md:w-1/2 mb-8'>
                    <input type="text" name="name" placeholder='Enter your name:' className="bg-transparent border-2 rounded-md p-2 text-white focus:outline-none" />
                    <input type="email" name="email" placeholder='Enter your email:' className="bg-transparent border-2 rounded-md p-2 text-white focus:outline-none my-4" />
                    <textarea name="message" rows="10" placeholder='Enter your message here:' className='bg-transparent border-2 rounded-md p-2 text-white focus:outline-none resize-none'></textarea>
                    <button className='bg-gradient-to-b from-cyan-500 to-blue-500 text-white px-6 py-3 my-4 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact