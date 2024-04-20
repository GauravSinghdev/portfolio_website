const GoToTop = () => {

    const goToBtn = () => {
        window.scrollTo(
            {
                top: 0,
                left:0,
                behavior:"smooth"
              }
        );
    }
    return (
            <div className="top-btn items-center text-center cursor-pointer" onClick={goToBtn}>
                <div className="text-white right-0 rounded-full h-14 w-14 bg-blue-400 float-right mt-0 mb-10 me-72 text-center">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ms-4 mt-4 cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                </svg>

                </div>
            </div>
    )
}

export default GoToTop;