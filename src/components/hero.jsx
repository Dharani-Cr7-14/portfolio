import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail, AiOutlineDownload } from "react-icons/ai";

export default function Hero() {
    const config = {
        social: {
            LinkedIn: 'https://www.linkedin.com/in/dharanicr714',
            GitHub: 'https://github.com/Dharani-Cr7-14',
            Email: 'mailto:dharani8098344676@gmail.com'
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>
            
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    {/* Main heading */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        <span className="text-white">Hi, I'm </span>
                        <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Dharani S</span>
                    </h1>
                    
                    {/* Role with gradient border */}
                    <div className="flex flex-wrap justify-center gap-3">
                        <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 text-indigo-300 font-semibold">
                            Full Stack Developer
                        </span>
                        <span className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-300 font-semibold">
                            AI/ML Engineer
                        </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Crafting innovative digital solutions with expertise in 
                        <span className="text-indigo-400"> full-stack development</span>, 
                        <span className="text-purple-400"> mobile applications</span>, and 
                        <span className="text-pink-400"> AI/ML technologies</span>.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <a
                            href="#project"
                            className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl font-semibold text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            <span className="relative z-10">View Projects</span>
                        </a>
                        <a
                            href="#contact"
                            className="px-8 py-4 rounded-xl font-semibold text-white border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                        >
                            Contact Me
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-5 pt-6">
                        <a href={config.social.LinkedIn} className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-indigo-400 hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all duration-300 hover:-translate-y-1">
                            <AiOutlineLinkedin size={24} />
                        </a>
                        <a href={config.social.GitHub} className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-purple-400 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 hover:-translate-y-1">
                            <AiOutlineGithub size={24} />
                        </a>
                        <a href={config.social.Email} className="p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 transition-all duration-300 hover:-translate-y-1">
                            <AiOutlineMail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}