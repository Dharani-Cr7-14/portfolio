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
        <section id="project" className="bg-gray-50 py-20 px-5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Featured Projects</h2>
                    <p className="mt-4 text-xl text-gray-600">
                        Check out some of my recent work in full-stack and frontend development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
                            <div className="h-48 overflow-hidden relative group">
                                <img
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                                    src={project.image}
                                    alt={project.title}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-indigo-600 hover:text-white transition duration-300"
                                    >
                                        View Code
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-semibold rounded-full"
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