import { useState } from "react";
import {Link} from "react-scroll";

const Navbar = () =>{
    const [brandName, setBrandName] = useState("Gaurav Singh");

    const menuLinks = [
    {
        id:1,
        link: "home",
    },
    {
        id:2,
        link: "about",
    },
    {
        id:3,
        link: "projects",
    },
    {
        id:4,
        link: "skills",
    },
    {
        id:5,
        link: "contact",
    }];

    const [cvtbn, setCvtbn] = useState(
        {
            title: "Download CV",
            link: "/download"
        }
    )

    function download_CV()
    {
        return 0;
    }

    function refresh()
    {
        setTimeout(location.reload.bind(location), 200);
    }
    return (
        <>
            <div name="home" className="h-28 main flex justify-between items-center  px-16 mt-0">
                <div>
                    {/* brand logo */}
                    <h1 className="text-3xl font-bold font-cursive ps-52 cursor-pointer bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" onClick={refresh}>@codewithkara</h1>
                </div>

                <ul className="hidden ms-64 md:flex ">
                    {/* menu link */}

                    {menuLinks.map(({id,link}) =>(
                        <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-500 duration-200"
                        >

                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}

                </ul>
                    {/* <a href="/home" className="hover:text-orange-600">Home</a>
                    <a href="/About" className="hover:text-orange-600">About</a>
                    <a href="/Skills" className="hover:text-orange-600">Skills</a>
                    <a href="/Portfolio" className="hover:text-orange-600">Portfolio</a>
                    <a href="/Contact" className="hover:text-orange-600">Contact</a> */}
                
                <div className="flex hover:scale-105">
                    {/* buttons */}

                    <a href= "GS_Resume.pdf" download="Gaurav_Resume.pdf" className="h-15 w-36 flex bg-orange-400 text-white font-bold shadow py-2 px-4 text-sm rounded-md me-28">{cvtbn.title} 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-white ms-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>    
                    </a>               

                </div>
            </div>
        </>
    )
}

export default Navbar;