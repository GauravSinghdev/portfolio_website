import bannerImge from '../assets/gs_DP.jpg'

import demo1 from '../assets/Logos/demo1.png';
import demo2 from '../assets/Logos/demo2.png';
import demo3 from '../assets/Logos/demo3.png';

const Project = () => {
    return (
        <>
            <div name="projects" className="ms-80 ps-16 me-80 pe-16  pt-10 pb-10">
            <br /><br />
            <h1 className="text-4xl text-white underline  decoration-gray-400 font-lg underline-offset-8">Projects</h1>
            <br />
            <h2 className="text-white">Check out some of my work</h2>
            <br /><br />

            <div className="outerbox grid grid-cols-3 gap-8">
                <div className="border shadow innerbox  rounded-lg">
                    <img src={demo1} alt="" className='w-full h-52 rounded-lg hover:scale-105' />
                    <br />

                    <div>
                        <p className="text-white ps-3 pe-3 h-3 text-lg font-cursive text-center underline">Monkeytype clone</p>
                        <br />
                        <p className="text-white ps-3 pe-3 h-10 text-md text-center">Speed Type Tester using HTML, CSS, JavaScript</p>
                    </div>

                    <br />
                    <div className='btns flex justify-between ms-14 me-16 mb-3'>
                    <a class="bg-blue-500 text-white font-lg py-2 px-4 rounded w-24 hover:scale-110 text-center" href="https://gauravsinghdev.github.io/Typing-speed-test/" target="__blank">Demo</a>
                    <a class="bg-blue-500 text-white font-lg py-2 px-4 rounded w-24 hover:scale-110 text-center" href="https://github.com/GauravSinghdev/Typing-speed-test" target="__blank">Code</a>
                    </div>
                </div>

                <div className="border shadow innerbox  rounded-lg">
                    <img src={demo2} alt="" className='w-full h-52 rounded-lg hover:scale-105' />
                    <br />
                    
                    <div>
                        <p className="text-white ps-3 pe-3 h-3 text-lg font-cursive text-center underline">Virtual Keyboard</p>
                        <br />
                        <p className="text-white ps-3 pe-3 h-10 text-md text-center">Speed Type Tester using HTML, CSS, JavaScript</p>
                    </div>

                    <br />
                    <div className='btns flex justify-between ms-14 me-16 mb-3'>
                    <a class="bg-blue-500 text-white font-lg py-2 px-4 rounded w-24 hover:scale-110 text-center" href="https://gauravsinghdev.github.io/Virtual-Keyboard/" target="__blank">Demo</a>
                    <a class="bg-blue-500 text-white font-lg py-2 px-4 rounded w-24 hover:scale-110 text-center" href="https://github.com/GauravSinghdev/Virtual-Keyboard" target="__blank">Code</a>
                    </div>
                </div>

                <div className="border shadow innerbox  rounded-lg">
                    <img src={demo3} alt="" className='w-full h-52 rounded-lg hover:scale-105' />
                    <br />
                    
                    <div>
                        <p className="text-white ps-3 pe-3 h-3 text-lg font-cursive text-center underline">Todo Application</p>
                        <br />
                        <p className="text-white ps-3 pe-3 h-10 text-md text-center">Simple Todo App adding Todos using JavaScript</p>
                    </div>

                    <br />
                    <div className='btns flex justify-between ms-14 me-16 mb-3'>
                    <a class="bg-blue-500 text-white font-lg py-2 px-4 rounded w-24 hover:scale-110 text-center" href="https://gauravsinghdev.github.io/TODO-List/" target="__blank">Demo</a>
                    <a class="bg-blue-500 text-white font-lg py-2 px-4 rounded w-24 hover:scale-110 text-center" href="https://github.com/GauravSinghdev/TODO-List" target="__blank">Code</a>
                    </div>
                </div>

                {/* <div className="innerbox  rounded-lg">
                    <img src={bannerImge} alt="" className='w-full h-52 rounded-lg' />
                    <br />
                    <p className="text-white ps-3 pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className="innerbox  rounded-lg">
                    <img src={bannerImge} alt="" className='w-full h-52 rounded-lg' />
                    <br />
                    <p className="text-white ps-3 pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className="innerbox  rounded-lg">
                    <img src={bannerImge} alt="" className='w-full h-52 rounded-lg' />
                    <br />
                    <p className="text-white ps-3 pe-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div> */}


                
            </div>

            </div>


            
        </>
    )
}

export default Project;