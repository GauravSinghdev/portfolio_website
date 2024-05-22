import demo1 from '../assets/Logos/demo1.png';
import demo2 from '../assets/Logos/demo2.png';
import demo3 from '../assets/Logos/demo3.png';

const Project = () => {
    return (
        <>
            <div name="projects" className="px-4 md:px-16 lg:px-32 pt-10 pb-10">
                <h1 className="text-3xl md:text-4xl text-white underline decoration-gray-400 font-semibold underline-offset-8">Projects</h1>
                <h2 className="mt-4 text-lg md:text-xl text-white">Check out some of my work</h2>
                
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[{
                        img: demo1,
                        title: "Monkeytype clone",
                        description: "Speed Type Tester using HTML, CSS, JavaScript",
                        demoLink: "https://gauravsinghdev.github.io/Typing-speed-test/",
                        codeLink: "https://github.com/GauravSinghdev/Typing-speed-test"
                    }, {
                        img: demo2,
                        title: "Virtual Keyboard",
                        description: "Speed Type Tester using HTML, CSS, JavaScript",
                        demoLink: "https://gauravsinghdev.github.io/Virtual-Keyboard/",
                        codeLink: "https://github.com/GauravSinghdev/Virtual-Keyboard"
                    }, {
                        img: demo3,
                        title: "Todo Application",
                        description: "Simple Todo App adding Todos using JavaScript",
                        demoLink: "https://gauravsinghdev.github.io/TODO-List/",
                        codeLink: "https://github.com/GauravSinghdev/TODO-List"
                    }].map((project, index) => (
                        <div key={index} className="border shadow-lg rounded-lg overflow-hidden">
                            <img src={project.img} alt={project.title} className="w-full h-52 object-cover hover:scale-105 transition-transform duration-300" />
                            <div className="p-4">
                                <p className="text-lg text-white font-semibold text-center underline">{project.title}</p>
                                <p className="mt-2 text-md text-white text-center">{project.description}</p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <a className="bg-blue-500 text-white py-2 px-4 rounded w-24 text-center hover:scale-110 transition-transform duration-300" href={project.demoLink} target="__blank">Demo</a>
                                    <a className="bg-blue-500 text-white py-2 px-4 rounded w-24 text-center hover:scale-110 transition-transform duration-300" href={project.codeLink} target="__blank">Code</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Project;
