export default function Resume() {
    const skills = {
        languages: ["Java", "Python", "C", "C++"],
        web: ["HTML", "CSS", "React", "Angular", "React Native", "Spring Boot", "Tailwind CSS", "Node.js", "Express.js", "UI/UX Design"],
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
        <section id="resume" className='section-container max-w-4xl mx-auto py-20 px-4'>
            <div className="flex flex-col justify-center">
                <div className="mb-12">
                    <h2 className='text-3xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-4 mb-8'>
                        Skills
                    </h2>

                    <div className="space-y-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Languages</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.languages.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Web & App Development</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.web.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-md text-sm font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Database</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.database.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-green-50 text-green-700 rounded-md text-sm font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {skills.tools.map(skill => (
                                    <span key={skill} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-md text-sm font-medium">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 className='text-3xl font-bold text-gray-900 border-l-4 border-indigo-600 pl-4 mb-6'>
                        Certifications
                    </h2>
                    <ul className="space-y-3">
                        {certifications.map((cert, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className="text-gray-700 font-medium">{cert}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}