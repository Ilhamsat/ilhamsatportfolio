import React from "react";
import Image from "next/image";

const About = () => {
    return (
        <div className='w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-0'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#429E9D]'>
                        About
                    </p>
                    <h2 className='py-4'>
                        Who I Am
                    </h2>
                    <p className='py-2 text-gray-600'>
                        ~~ I am not your normal developer ~~
                    </p>
                    <p className='py-2 text-gray-600'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className='py-2 text-gray-600'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <p className='py-2 text-gray-600 underline cursor-pointer'>
                        Check out some of my latest projects.
                    </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <img src="/assets/makhluklangka.jpg" className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About