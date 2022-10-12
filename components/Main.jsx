import React from "react";

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
                </div>
            </div>
        </div>
    )
}

export default Main