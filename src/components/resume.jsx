export default function Resume() {
    const skills = {
        languages: ["Java", "Python", "C", "C++"],
        web: ["HTML", "CSS", "React", "Angular", "React Native", "Spring Boot", "Tailwind CSS", "Node.js", "Express.js", "UI/UX Design"],
        aiml: ["Machine Learning", "Deep Learning", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Data Analysis", "NLP Basics"],
        database: ["MySQL", "MongoDB", "Firebase", "Firestore", "PostgreSQL", "MS SQL Server"],
        tools: ["GitHub", "Git", "AWS", "Canva", "Figma"],
        soft: ["Leadership", "Communication", "Teamwork"]
    };

    const certifications = [
        "Full-Stack Development with Node.js & MongoDB",
        "React.js – Complete Frontend Development",
        "MongoDB Developer Certification",
        "Object-Oriented Programming (OOP) with Java",
        "Spring Boot Application Development",
        "AWS Academy Graduate – Cloud Foundations",
        "Python Programming Fundamentals",
        "Git & GitHub Version Control",
        "PostgreSQL Database Administration"
    ];

    return (
        <section id="resume" className='relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4 overflow-hidden'>
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto">
            <div className="flex flex-col justify-center">
                <div className="mb-12">
                    <h2 className='text-3xl font-bold text-white border-l-4 border-indigo-500 pl-4 mb-8'>
                        Skills
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-white/10 text-gray-300 rounded-md text-sm font-medium border border-white/10">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Web & App Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.web.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-md text-sm font-medium border border-indigo-500/30">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">AI & Machine Learning</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.aiml.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-md text-sm font-medium border border-purple-500/30">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Database</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.database.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-md text-sm font-medium border border-green-500/30">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-md text-sm font-medium border border-orange-500/30">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl font-bold text-white border-l-4 border-indigo-500 pl-4 mb-8'>
                        Certifications
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {certifications.map((cert, index) => (
                            <div 
                                key={index} 
                                className="group bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-500/20">
                                        <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <span className="text-gray-200 font-medium text-sm leading-tight block group-hover:text-white transition-colors">{cert}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}