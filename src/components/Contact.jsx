// Used https://app.getform.io/

const Contact = () => {
    return (
        <>
            <div name="contact" className="shadow px-4 md:px-16 lg:px-32 py-10">
                <h1 className="text-3xl md:text-4xl text-white underline decoration-gray-400 font-semibold underline-offset-8">Contact Me</h1>
                <p className="mt-4 text-white text-lg md:text-xl">Submit the form below to get in touch with me</p>
                <div className="flex justify-center items-center mt-8">
                    <form action="https://getform.io/f/qbloqoza" method="POST" className="flex flex-col w-full md:w-2/3 lg:w-1/2 space-y-4">
                        <input type="text" name="name" placeholder="Enter your name" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <input type="email" name="email" placeholder="Enter your email" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                        <textarea name="message" rows="10" placeholder="Enter your message" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                        <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
