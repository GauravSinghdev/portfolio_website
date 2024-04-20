import { useState } from "react";

const About = () => {

    const [data, setData] = useState({
        title: "About",
        desc1: "Hey Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, consectetur eius fuga sapiente neque velit fugit. Praesentium reiciendis, consequatur quidem possimus amet ullam qui assumenda deleniti cupiditate aspernatur esse tempora.  HEy Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, consectetur eius fuga sapiente neque velit fugit. Praesentium reiciendis, consequatur quidem possimus amet ullam qui assumenda deleniti cupiditate aspernatur esse tempora.",
        desc2: "Dynamic and results-oriented software web developer with a passion for crafting elegant and efficient solutions. Proficient in front-end and back-end technologies, adept at translating client needs into user-friendly web applications. Experienced in Agile methodologies and collaborative team environments. Dedicated to staying updated with the latest trends and technologies to deliver cutting-edge solutions that drive business success.",
        actionbtn: {
            title: "Read more .  .  .",
            hcontent: "This was hidden"
        }
    })

    function hidden()
    {
        setData(data.desc2);
    }
    return (
        <>

        <div name="about" className="ms-80 ps-16 me-80 pe-16  pt-10 pb-10">
            <br /><br />
            <h1 className="text-4xl text-white underline  decoration-gray-400 font-semibold underline-offset-8">{data.title}</h1>
            <br /><br /><br />

            <p className="text-white text-1lg">{data.desc1}</p>
            <br />
            <p className="text-white text-1lg">{data.desc2}</p>

            <button className= "text-2lg mt-2 text-gray-400 hover:text-orange-500" onClick={hidden}>{data.actionbtn.title}</button>
        </div>
        
        </>
    )
} 

export default About;