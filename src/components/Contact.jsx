// Used https://app.getform.io/

const Contact = () =>
{
    return(
        <>
            <div name="contact" className="shadow ms-80 ps-16 me-80 pe-16  pt-10 pb-10">
                <br /><br />
                <h1 className="text-4xl text-white underline  decoration-gray-400 font-lg underline-offset-8">Contact Me</h1>
                <br />
                <h2 className="text-white">Submit the form below to get in touch with me</h2>
                <br /><br />

                <div className="flex justify-center items-center">
                    <form action="https://getform.io/f/qbloqoza" method="POST" className="flex flex-col w-full md:w-1/2">

                        <input type="text" name="name" placeholder="Enter your name" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" />

                        <input type="email" name="email" placeholder="Enter your email" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4" />

                        <textarea name="message" rows="10" placeholder="Enter your message" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" ></textarea>

                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300 mb-1">Let's talk</button>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;