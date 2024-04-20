import htmllogo from '../assets/Logos/icons8-html-144.png';
import csslogo from '../assets/Logos/icons8-css-144.png';
import jslogo from '../assets/Logos/icons8-javascript-144.png';
import reactlogo from '../assets/Logos/icons8-react-a-javascript-library-for-building-user-interfaces-96.png';
import tailwindlogo from '../assets/Logos/icons8-tailwind-css-144.png';
import nodelogo from '../assets/Logos/icons8-node-js-144.png';
import expresslogo from '../assets/Logos/icons8-express-js-144.png';
import mongologo from '../assets/Logos/icons8-mongodb-a-cross-platform-document-oriented-database-program-96.png';
import javalogo from '../assets/Logos/icons8-java-144.png';



const Skills = () => {
    return (
        <>
            <div name="skills" className="shadow ms-80 ps-16 me-80 pe-16  pt-10 pb-10">
                <br /><br />
                <h1 className="text-4xl text-white underline  decoration-gray-400 font-lg underline-offset-8">Skills</h1>
                <br />
                <h2 className="text-white">These are the technologies I've worked with</h2>
                <br /><br />

                <div className=" outerbox grid grid-cols-3 gap-8">
                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-orange-700/100 mb-2 ">
                        <img src={htmllogo} alt="" className=' h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>HTML</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-cyan-800/100 mb-2 ">
                        <img src={csslogo} alt="" className='h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>CSS</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-yellow-700/100 mb-2 ">
                        <img src={jslogo} alt="" className=' h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>JavaScript</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-blue-700/100 mb-2 ">
                        <img src={reactlogo} alt="" className=' h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>React</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-cyan-400/100 mb-2 ">
                        <img src={tailwindlogo} alt="" className='h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>Tailwind</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-green-700/100 mb-2 ">
                        <img src={nodelogo} alt="" className=' h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>Node JS</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-green-300/100 mb-2 ">
                        <img src={mongologo} alt="" className=' h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>Mangodb</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-white/100 mb-2 ">
                        <img src={expresslogo} alt="" className='h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>Express</p>
                    </div>

                    <div className="innerbox  rounded-lg h-36 px-24 shadow-lg shadow-red-500/100 mb-2 ">
                        <img src={javalogo} alt="" className=' h-24 mt-2 ms-9 rounded-lg hover:scale-105' />
                        <p className='text-white text-center  mt-2'>Java</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills;