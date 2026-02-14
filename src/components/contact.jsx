import { AiOutlineMail, AiOutlinePhone, AiOutlineLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

export default function Contact() {
    return (
        <section id="contact" className='relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden'>
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute -top-40 left-1/4 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                <div className="max-w-4xl w-full px-4">
                    <h2 className='text-3xl font-bold mb-6'>Contact Me</h2>
                    <p className='text-lg text-gray-400 mb-12 max-w-2xl mx-auto'>
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Email */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-indigo-500/50 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-indigo-500/20 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                                <AiOutlineMail className="text-2xl text-indigo-400" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Email</h3>
                            <a href="mailto:dharani8098344676@gmail.com" className="text-gray-300 hover:text-indigo-400 transition text-sm break-all font-medium">
                                dharani8098344676<br />@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-purple-500/50 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                                <AiOutlinePhone className="text-2xl text-purple-400" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">Phone</h3>
                            <a href="tel:+918122868098" className="text-gray-300 hover:text-purple-400 transition text-sm font-medium">
                                +91 81228 868098
                            </a>
                        </div>

                        {/* LinkedIn */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-blue-500/50 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-blue-500/20 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                                <AiOutlineLinkedin className="text-2xl text-blue-400" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">LinkedIn</h3>
                            <a
                                href="https://www.linkedin.com/in/dharanicr714"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-blue-400 transition text-sm font-medium"
                            >
                                Connect with me
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-green-500/50 transition duration-300 flex flex-col items-center group">
                            <div className="p-4 bg-green-500/20 rounded-full mb-4 group-hover:scale-110 transition duration-300">
                                <AiOutlineWhatsApp className="text-2xl text-green-400" />
                            </div>
                            <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
                            <a
                                href="https://wa.me/9181228868098?text=Hi%20Dharani,%20I'd%20like%20to%20discuss%20a%20project."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-green-400 transition text-sm font-medium"
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