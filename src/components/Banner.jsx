import { useEffect, useRef, useState } from 'react';
import bannerImage from '../assets/gs_DP.jpg'
import Typed from 'typed.js';
import { Link } from 'react-scroll';

const Banner = () => {

    const link = {
        lnk: "contact",
        title: "Contact me"
    }
    const el = useRef(null);

    useEffect(() =>{
        const typed = new Typed(el.current, {
            strings: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer", "Software Engineer"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 100,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 100,
            loop: true
          });
      
          // Destropying
          return () => {
            typed.destroy();
          };
        },);

    return(
        <div name="banner" className="main-container flex items-center pb-40">

{/* 1st div */}

            <div className="w-full flex justify-center items-center ms-60 mt-48"> 
                {/* text will come here */}

                <div className='w-2/3'>
                    <h3 className='mt-5 text-4xl font-semibold text-white '>Hi, I am</h3>
                    <h1 className='mt-2 text-5xl font-bold text-white '>Gaurav Singh</h1>
                    <h2 className='mt-2 text-4xl text-white'>And I am <span className='font-semibold text-cyan-400 underline decoration-white underline-offset-4' ref={el}></span></h2>
                    <br />
                    <p className='mb-5 text-white'>
                    Seeking a challenging role as a web developer where I can utilize my expertise in front-end and back-end development to create seamless and engaging online experiences. Passionate about collaborating with cross-functional teams to deliver high-quality, scalable solutions that drive business growth and user satisfaction.
                    </p>

                    <div className="socials-container space-x-5 flex">
                        <a href ="https://www.linkedin.com/in/gaurav-singh-898072176/" target='__blank' className='w-12 h-12 p-2 rounded-full flex justify-center -none bg-gray-800  text-white hover:-1 cursor-pointer hover:scale-110'>
                            <i className="fa-brands text-3xl fa-linkedin"></i>
                        </a>
                        <a href="https://twitter.com/codewithkara" target='__blank' className='w-12 h-12 p-2 rounded-full flex justify-center -none bg-gray-800  text-white  hover:  cursor-pointer hover:scale-110'>
                            <i className="fa-brands text-3xl fa-x-twitter"></i>
                        </a>
                        <a href="https://github.com/GauravSinghdev" target='__blank' className='w-12 h-12 p-2 rounded-full flex justify-center -none bg-gray-800 text-white hover:  cursor-pointer hover:scale-110'>
                            <i className="fa-brands text-3xl fa-github"></i>
                        </a>
                    
                    
                    </div>

                    <br />
                    <button className="h-15 w-38 bg-orange-400 text-white font-bold shadow py-2 px-4 text-1xl rounded-md ms-1 hover:scale-105">
                    <Link to={link.lnk} smooth duration={500} className="h-15 w-38 bg-orange-400 text-white font-bold shadow py-2 px-4 text-1xl rounded-md ms-1">{link.title}</Link>
                    </button>

                    
                </div>
                
            </div>
            
{/* 2nd div */}

            <div className="w-full mt-16 ps-20">
                {/* big image of me */}
                <img className='mt-32 w-96 h-96 rounded-2xl' src={bannerImage} />
            </div>

            
        </div>
        
    )
}

export default Banner;