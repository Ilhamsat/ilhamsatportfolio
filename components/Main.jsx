import React from "react";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsFillPersonLinesFill} from "react-icons/bs";

const Main = () => {
    return (
        <div className='w-full h-screen text-center'>
            <div className='max-w[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Let's build something great together
                    </p>
                    <h1 className='py-4 text-gray-700'>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Hi, I'm <span className='text-[#429E9D]'> Ilham</span>
                    </h1>
                    <h1 className='py-2 text-gray-700'>
                       A Full-Stack Developer
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I am interested in becoming a Backend Developer especially with the Go programming language.
                        And I want to learn more in theory, practice, and case studies related to Backend Developer.
                        I like to explore and learn new things related to programming, and I also highly adaptive with new frameworks and technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail/>
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsFillPersonLinesFill/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main