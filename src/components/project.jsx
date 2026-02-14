import p1 from '../assets/project1.jpg'
import p2 from '../assets/project2.jpg'
import p3 from '../assets/project3.jpg'
import p4 from '../assets/project4.jpg'
import p5 from '../assets/project5.jpg'

export default function Project() {
    const projects = [
        {
            title: "Salem Drive Hub - Driving School Website",
            description: "Built a professional website for a driving school client to establish online presence and showcase services. Features include course information, instructor profiles, online booking system, and contact integration to help grow the business.",
            technologies: ["React", "Node.js", "Full Stack", "Client Project"],
            image: p4,
            link: "https://github.com/Dharani-Cr7-14"
        },
        {
            title: "AI Meal Planner for South Indian Diabetics",
            description: "Developed an AI-driven meal planning assistant integrating endocrinology guidelines with South Indian dietary habits. Delivered personalized, doctor-ready meal schedules.",
            technologies: ["AI", "React", "Health Tech"],
            image: p1,
            link: "https://github.com/Dharani-Cr7-14"
        },
        {
            title: "Finance Tracker",
            description: "Built a full-stack React and Node.js application to track income, expenses, and realtime financial balance. Implemented reusable data-visualization components.",
            technologies: ["React", "Node.js", "Data Viz"],
            image: p2,
            link: "https://github.com/Dharani-Cr7-14"
        },
        {
            title: "SGPA Calculator Web App",
            description: "Developed a responsive React-based web application to calculate SGPA using accurate credit-weighted logic. Enabled instant SGPA generation for IT students.",
            technologies: ["React", "Responsive Design"],
            image: p3,
            link: "https://github.com/Dharani-Cr7-14"
        },
        {
            title: "Food Ordering Website",
            description: "Developed a responsive food ordering web interface featuring restaurant listings, dynamic menus, cart management, and end-to-end ordering flow.",
            technologies: ["React", "State Management"],
            image: p5,
            link: "https://github.com/Dharani-Cr7-14"
        }
    ];

    return (
        <section id="project" className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-5 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            <div className="absolute top-1/2 -right-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/4 -left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-white sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-xl text-gray-400">
                        Check out some of my recent work in full-stack and frontend development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-indigo-500/50 transition-all duration-300 flex flex-col">
                            <div className="h-48 overflow-hidden relative group">
                                <img
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                    src={project.image}
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full font-bold hover:from-indigo-600 hover:to-purple-600 transition duration-300"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 flex-1 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs font-semibold rounded-full border border-indigo-500/30"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}