import { Link } from "react-scroll";

const GoToTop = () => {
    return (
        <div className="fixed bottom-10 right-10 flex justify-center items-center cursor-pointer">
            <div className="text-white rounded-full h-14 w-14 bg-blue-400 flex justify-center items-center animate-bounce">
                <Link to="home" smooth duration={500}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default GoToTop;
