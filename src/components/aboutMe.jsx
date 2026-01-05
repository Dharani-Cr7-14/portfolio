import { AiOutlineTrophy, AiOutlineHeart, AiOutlineThunderbolt, AiOutlineCode, AiOutlineRocket, AiOutlineTeam } from "react-icons/ai";

export default function Aboutme() {
    const stats = [
        { icon: AiOutlineCode, label: "Projects", value: "15+" },
        { icon: AiOutlineRocket, label: "Technologies", value: "20+" },
        { icon: AiOutlineTeam, label: "Certifications", value: "9+" }
    ];

    return (
        <section id='about' className='bg-gradient-to-br from-gray-50 to-indigo-50 py-20'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className="text-center mb-16">
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
                </div>

                {/* Content Section */}
                <div className='max-w-5xl mx-auto flex flex-col space-y-8'>
                    {/* Introduction */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-indigo-100 rounded-lg">
                                <AiOutlineThunderbolt className="text-2xl text-indigo-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
                        </div>
                        <p className='text-gray-600 leading-relaxed text-base'>
                            I'm a passionate <span className="font-semibold text-indigo-600">Full Stack Developer</span> and IT student who loves transforming complex problems into elegant, user-friendly solutions. My journey in technology is driven by curiosity and a dedication to continuous learning.
                        </p>
                        <p className='text-gray-600 leading-relaxed text-base mt-4'>
                            With expertise in <span className="font-semibold text-gray-900">React, Node.js, MongoDB,</span> and modern web technologies, I build robust applications that make a real impact—from AI-powered health solutions to business platforms.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 text-center">
                                <stat.icon className="text-3xl text-indigo-600 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-xs text-gray-500 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Beyond Coding */}
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-pink-100">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-pink-100 rounded-lg">
                                <AiOutlineHeart className="text-2xl text-pink-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Beyond Coding</h3>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3">
                                <span className="text-2xl">⚽</span>
                                <span className="text-sm font-medium text-gray-700">Football Player</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3">
                                <span className="text-2xl">🏃</span>
                                <span className="text-sm font-medium text-gray-700">Athlete</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3">
                                <span className="text-2xl">🎧</span>
                                <span className="text-sm font-medium text-gray-700">Music Enthusiast</span>
                            </div>
                            <div className="flex items-center gap-3 bg-white/70 backdrop-blur-sm rounded-lg p-3">
                                <span className="text-2xl">🌱</span>
                                <span className="text-sm font-medium text-gray-700">Lifelong Learner</span>
                            </div>
                        </div>
                    </div>

                    {/* Education */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-yellow-100 rounded-lg">
                                <AiOutlineTrophy className="text-2xl text-yellow-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900">Education</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="relative pl-8 pb-6 border-l-2 border-indigo-200 last:pb-0">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-indigo-600"></div>
                                <div className="bg-indigo-50 rounded-lg p-4 hover:bg-indigo-100 transition-colors duration-300">
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-gray-900">B.Tech Information Technology</h4>
                                        <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">2023 - 2027</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2 italic">Kumaraguru College of Technology</p>
                                    <p className="font-semibold text-indigo-600 text-sm">CGPA: 7.86 / 10</p>
                                </div>
                            </div>
                            <div className="relative pl-8">
                                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-green-600"></div>
                                <div className="bg-green-50 rounded-lg p-4 hover:bg-green-100 transition-colors duration-300">
                                    <div className="flex flex-wrap justify-between items-start mb-2">
                                        <h4 className="font-bold text-lg text-gray-900">Higher Secondary</h4>
                                        <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">2023</span>
                                    </div>
                                    <p className="text-gray-600 text-sm mb-2 italic">SSRM Hr. Sec. School, Salem</p>
                                    <p className="font-semibold text-green-600 text-sm">Grade: 92%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}