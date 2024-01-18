import React from 'react'

const About = () => {
  return (
    <div className='h-auto w-full bg-gradient-to-b from-gray-950 to-black text-white'>
        <div className="max-w-screen-lg m-auto p-4 w-full h-full flex flex-col justify-center">
            <div className="pb-8">
                <p className='text-4xl font-bold inline border-b-4 border-cyan-500'>About</p>
            </div>
            <div className="mb-2">
                <p className='text-xl py-2'>
                    Mayank Vaidhya, a BCA student at Infopark College under Makhanlal Chaturvedi University, is actively immersed in learning the MERN stack for web development. His expertise spans both frontend and backend technologies, showcasing a comprehensive skill set essential for crafting dynamic and responsive web applications. Mayank's dedication to mastering the MERN stack positions him as a promising talent in the field.
                </p>
                <p className='text-xl py-2'>
                    I excels in frontend and backend development, displaying a nuanced understanding of MERN technologies. His commitment to learning positions him as a valuable asset in web development.
                </p>
                <p className='text-xl py-2'>
                    My passion extends to ethical hacking, showcasing a diverse skill set. His enthusiasm for cybersecurity adds depth to his expertise in web development.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About