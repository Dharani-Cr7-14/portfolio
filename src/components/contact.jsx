import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
    return (
        <section id="contact" className='section-container py-20 bg-indigo-900 text-white'>
            <div className="flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl w-full px-4">
                    <h2 className='text-3xl font-bold mb-6'>Contact Me</h2>
                    <p className='text-lg text-indigo-100 mb-12 max-w-2xl mx-auto'>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Email */}
                        <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50 hover:border-indigo-500 hover:bg-indigo-800 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-indigo-900 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                                <AiOutlineMail className="text-2xl text-indigo-300" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email</h3>
                            <a href="mailto:dharani8098344676@gmail.com" className="text-white underline decoration-indigo-400 hover:decoration-white transition text-sm break-all font-medium">
                                dharani8098344676<br />@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50 hover:border-indigo-500 hover:bg-indigo-800 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-indigo-900 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                                <AiOutlinePhone className="text-2xl text-indigo-300" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Phone</h3>
                            <a href="tel:+918122868098" className="text-white underline decoration-indigo-400 hover:decoration-white transition text-sm font-medium">
                                +91 81228 868098
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50 hover:border-indigo-500 hover:bg-indigo-800 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-indigo-900 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                                <AiOutlineLinkedin className="text-2xl text-indigo-300" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/dharanicr714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline decoration-indigo-400 hover:decoration-white transition text-sm font-medium"
                            >
                                Connect with me
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-indigo-800/50 backdrop-blur-sm p-6 rounded-xl border border-indigo-700/50 hover:border-green-500/50 hover:bg-indigo-800 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-indigo-900 rounded-full mb-4 group-hover:bg-green-600 group-hover:scale-110 transition duration-300">
                                <AiOutlineWhatsApp className="text-2xl text-indigo-300 group-hover:text-white" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                            <a
                                href="https://wa.me/9181228868098?text=Hi%20Dharani,%20I'd%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white underline decoration-green-400 hover:decoration-white transition text-sm font-medium"
                            >
                                Chat on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}