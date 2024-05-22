import { useState } from "react";

const About = () => {
    const [data, setData] = useState({
        title: "About",
        desc1: "I am a B.Tech graduate of 2021, majoring in Computer Science Engineering, currently living in my hometown, Haldwani (Uttarakhand). Currently seeking opportunities to leverage my skills and knowledge in a dynamic work environment where I can continue to grow both personally and professionally. I'm eager to apply my expertise and make meaningful contributions.",
        desc2: "Dynamic and results-oriented software web developer with a passion for crafting elegant and efficient solutions. Proficient in front-end and back-end technologies, adept at translating client needs into user-friendly web applications. Experienced in Agile methodologies and collaborative team environments. Dedicated to staying updated with the latest trends and technologies to deliver cutting-edge solutions that drive business success.",
    });

    function hidden() {
        setData(data.desc2);
    }

    return (
        <>
            <div name="about" className="px-4 md:px-16 lg:px-32 py-10">
                <h1 className="text-3xl md:text-4xl text-white underline decoration-gray-400 font-semibold underline-offset-8">{data.title}</h1>
                <div className="mt-8 space-y-6">
                    <p className="text-white text-lg md:text-xl">{data.desc1}</p>
                    <p className="text-white text-lg md:text-xl">{data.desc2}</p>
                </div>
            </div>
        </>
    );
}

export default About;
