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
            <div name="skills" className="px-4 md:px-16 lg:px-32 pt-10 pb-10">
                <h1 className="text-3xl md:text-4xl text-white underline decoration-gray-400 font-semibold underline-offset-8">Skills</h1>
                <h2 className="mt-4 text-lg md:text-xl text-white">These are the technologies I've worked with</h2>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {[{
                        img: htmllogo,
                        title: "HTML",
                        shadow: "shadow-orange-700/100"
                    }, {
                        img: csslogo,
                        title: "CSS",
                        shadow: "shadow-cyan-800/100"
                    }, {
                        img: jslogo,
                        title: "JavaScript",
                        shadow: "shadow-yellow-700/100"
                    }, {
                        img: reactlogo,
                        title: "React",
                        shadow: "shadow-blue-700/100"
                    }, {
                        img: tailwindlogo,
                        title: "Tailwind",
                        shadow: "shadow-cyan-400/100"
                    }, {
                        img: nodelogo,
                        title: "Node JS",
                        shadow: "shadow-green-700/100"
                    }, {
                        img: mongologo,
                        title: "MongoDB",
                        shadow: "shadow-green-300/100"
                    }, {
                        img: expresslogo,
                        title: "Express",
                        shadow: "shadow-white/100"
                    }, {
                        img: javalogo,
                        title: "Java",
                        shadow: "shadow-red-500/100"
                    }].map((skill, index) => (
                        <div key={index} className={`innerbox rounded-lg h-36 px-8 md:px-16 shadow-lg ${skill.shadow} mb-2 flex flex-col items-center justify-center`}>
                            <img src={skill.img} alt={skill.title} className='h-24 rounded-lg hover:scale-105 transition-transform duration-300' />
                            <p className='text-white text-center mt-2'>{skill.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Skills;
