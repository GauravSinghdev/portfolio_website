import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    const [brandName, setBrandName] = useState("Gaurav Singh");
    const [navOpen, setNavOpen] = useState(false);

    const menuLinks = [
        {
            id: 1,
            link: "home",
        },
        {
            id: 2,
            link: "about",
        },
        {
            id: 3,
            link: "projects",
        },
        {
            id: 4,
            link: "skills",
        },
        {
            id: 5,
            link: "contact",
        }];

    const [cvtbn, setCvtbn] = useState(
        {
            title: "Download CV",
            link: "/download"
        }
    );

    function download_CV() {
        return 0;
    }

    function refresh() {
        setTimeout(location.reload.bind(location), 200);
    }

    return (
        <>
            <div name="home" className="h-28 main flex justify-between items-center px-4 md:px-16 mt-0">
                <div>
                    {/* brand logo */}
                    <h1 className="text-2xl md:text-3xl font-bold font-cursive cursor-pointer bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text" onClick={refresh}>
                        @codewithkara
                    </h1>
                </div>

                <div className="md:hidden">
                    <button onClick={() => setNavOpen(!navOpen)} className="text-gray-500 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>

                <ul className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center transform ${navOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:relative md:h-auto md:flex-row md:items-center md:bg-transparent md:translate-x-0`}>
                    {menuLinks.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 py-6 text-2xl cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-blue-500 duration-200 md:py-0 md:text-base"
                        >
                            <Link to={link} smooth duration={500} onClick={() => setNavOpen(false)}>{link}</Link>
                        </li>
                    ))}
                </ul>

                <div className="hidden md:flex hover:scale-105">
                    {/* buttons */}
                    <a href="GS_Resume.pdf" download="Gaurav_Resume.pdf" className="h-15 w-36 flex bg-orange-400 text-white font-bold shadow py-2 px-4 text-sm rounded-md me-28">
                        {cvtbn.title}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-white ms-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;
