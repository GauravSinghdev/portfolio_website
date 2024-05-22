import { useEffect, useRef, useState } from 'react';
import bannerImage from '../assets/gs_DP.jpg';
import Typed from 'typed.js';
import { Link } from 'react-scroll';

const Banner = () => {
    const link = {
        lnk: "contact",
        title: "Contact me"
    };
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "Software Engineer"],
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div name="banner" className="main-container flex flex-col md:flex-row items-center pb-20 md:pb-40">
            {/* 1st div */}
            <div className="w-full flex flex-col justify-center items-center md:items-start md:ms-16 lg:ms-60 mt-16 md:mt-48 px-4 md:px-0">
                {/* text will come here */}
                <div className='w-full md:w-2/3'>
                    <h3 className='mt-5 text-2xl md:text-3xl lg:text-4xl font-semibold text-white'>Hi, I am</h3>
                    <h1 className='mt-2 text-3xl md:text-4xl lg:text-5xl font-bold text-white'>Gaurav Singh</h1>
                    <h2 className='mt-2 text-2xl md:text-3xl lg:text-4xl text-white'>And I am a <span className='font-semibold text-cyan-400 underline decoration-white underline-offset-4' ref={el}></span></h2>
                    <br />
                    <p className='mb-5 text-white text-base md:text-lg'>
                        Seeking a challenging role as a web developer where I can utilize my expertise in front-end and back-end development to create seamless and engaging online experiences. Passionate about collaborating with cross-functional teams to deliver high-quality, scalable solutions that drive business growth and user satisfaction.
                    </p>
                    <div className="socials-container space-x-5 flex">
                        <a href="https://www.linkedin.com/in/gaurav-singh-898072176/" target='_blank' className='w-10 h-10 md:w-12 md:h-12 p-2 rounded-full flex justify-center bg-gray-800 text-white hover:scale-110 hover:bg-white hover:text-black'>
                            <i className="fa-brands text-xl md:text-2xl fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/codewithkara" target='_blank' className='w-10 h-10 md:w-12 md:h-12 p-2 rounded-full flex justify-center bg-gray-800 text-white hover:scale-110 hover:bg-white hover:text-black'>
                            <i className="fa-brands text-xl md:text-2xl fa-x-twitter"></i>
                        </a>
                        <a href="https://github.com/GauravSinghdev" target='_blank' className='w-10 h-10 md:w-12 md:h-12 p-2 rounded-full flex justify-center bg-gray-800 text-white hover:scale-110 hover:bg-white hover:text-black'>
                            <i className="fa-brands text-xl md:text-2xl fa-github"></i>
                        </a>
                    </div>
                    <br />
                    <button className="h-12 md:h-15 w-36 md:w-38 bg-orange-400 text-white font-bold shadow py-2 px-4 text-lg rounded-md hover:scale-105">
                        <Link to={link.lnk} smooth duration={500}>{link.title}</Link>
                    </button>

                    <div className="md:hidden hover:scale-105 mt-5 h-12 w-36 text-center text-m">
                    {/* buttons */}
                    <a href="GS_Resume.pdf" download="Gaurav_Resume.pdf" className="h-[45px] w-36 text-center flex bg-orange-400 text-white font-bold shadow py-3 px-2 rounded-md me-28">
                        Download CV
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white ms-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </div>
                </div>
            </div>
            {/* 2nd div */}
            <div className="w-full mt-16 md:mt-0 md:ps-20 flex justify-center md:justify-end">
                {/* big image of me */}
                <img className='mt-8 md:mt-32 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl' src={bannerImage} />
            </div>
        </div>
    );
}

export default Banner;
