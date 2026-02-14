import { AiOutlineTrophy, AiOutlineHeart, AiOutlineThunderbolt, AiOutlineCode, AiOutlineRocket, AiOutlineTeam, AiOutlineLaptop } from "react-icons/ai";

export default function Aboutme() {
    const stats = [
        { icon: AiOutlineCode, label: "Projects", value: "10+" },
        { icon: AiOutlineRocket, label: "Technologies", value: "20+" },
        { icon: AiOutlineTeam, label: "Certifications", value: "9+" }
    ];

    return (
        <section id='about' className='relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 overflow-hidden'>
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"></div>
                </div>

                {/* Content Section */}
                <div className='max-w-5xl mx-auto flex flex-col space-y-8'>
                    {/* Introduction */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-indigo-500/50 transition-all duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-indigo-500/20 rounded-lg">
                                <AiOutlineThunderbolt className="text-2xl text-indigo-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">My Journey</h3>
                        </div>
                        <p className='text-gray-300 leading-relaxed text-base'>
                            I'm a passionate <span className="font-semibold text-indigo-400">Full Stack Developer</span> and IT student who loves transforming complex problems into elegant, user-friendly solutions. My journey in technology is driven by curiosity and a dedication to continuous learning.
                        </p>
                        <p className='text-gray-300 leading-relaxed text-base mt-4'>
                            With expertise in <span className="font-semibold text-white">React, Node.js, MongoDB,</span> and modern web technologies, I build robust applications that make a real impact—from AI-powered health solutions to business platforms.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 text-center">
                                <stat.icon className="text-3xl text-indigo-400 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-white">{stat.value}</div>
                                <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Beyond Coding */}
                    <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-2xl p-8 border border-pink-500/20 backdrop-blur-sm">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-pink-500/20 rounded-lg">
                                <AiOutlineHeart className="text-2xl text-pink-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Beyond Coding</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                <span className="text-2xl">⚽</span>
                                <span className="text-sm font-medium text-gray-300">Football Player</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                <span className="text-2xl">🏃</span>
                                <span className="text-sm font-medium text-gray-300">Athlete</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                <span className="text-2xl">🎧</span>
                                <span className="text-sm font-medium text-gray-300">Music Enthusiast</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                                <span className="text-2xl">💡</span>
                                <span className="text-sm font-medium text-gray-300">Innovation</span>
                            </div>
                        </div>
                    </div>

                    {/* Experience */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-green-500/20 rounded-lg">
                                <AiOutlineLaptop className="text-2xl text-green-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Experience</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="relative pl-8 pb-0 border-l-2 border-green-400">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500"></div>
                                <div className="bg-gray-800 rounded-lg p-5 hover:bg-gray-700 transition-colors duration-300">
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-white">Innovation Engineer Trainee</h4>
                                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">Internship</span>
                                    </div>
                                    <p className="text-green-400 font-semibold text-sm mb-2">Forge Innovation & Ventures</p>
                                    <div className="flex flex-wrap gap-4 text-gray-400 text-xs mb-3">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            Jan 2026 - Present · 2 mos
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            India · On-site
                                        </span>
                                    </div>
                                    <p className="text-gray-300 text-sm leading-relaxed">Working on innovative projects and gaining hands-on experience in engineering solutions. Collaborating with the team to develop cutting-edge technological innovations and contribute to real-world problem-solving initiatives.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-yellow-500/20 rounded-lg">
                                <AiOutlineTrophy className="text-2xl text-yellow-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="relative pl-8 pb-6 border-l-2 border-indigo-500/50 last:pb-0">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-500"></div>
                                <div className="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20 hover:border-indigo-500/40 transition-colors duration-300">
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-white">B.Tech Information Technology</h4>
                                        <span className="bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full">2023 - 2027</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2 italic">Kumaraguru College of Technology</p>
                                    <p className="font-semibold text-indigo-400 text-sm">CGPA: 7.86 / 10</p>
                                </div>
                            </div>
                            <div className="relative pl-8 border-l-2 border-green-500/50">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-500"></div>
                                <div className="bg-green-500/10 rounded-lg p-4 border border-green-500/20 hover:border-green-500/40 transition-colors duration-300">
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-white">Higher Secondary</h4>
                                        <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">2023</span>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-2 italic">SSRM Hr. Sec. School, Salem</p>
                                    <p className="font-semibold text-green-400 text-sm">Grade: 92%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}