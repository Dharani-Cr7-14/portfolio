import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMail } from "react-icons/ai";

export default function Hero() {
    const config = {
        social: {
            LinkedIn: 'https://www.linkedin.com/in/dharanicr714',
            GitHub: 'https://github.com/Dharani-Cr7-14',
            Email: 'mailto:dharani8098344676@gmail.com'
        }
    }

    return (
        <section className="bg-gradient-to-br from-indigo-50 to-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Hi, I'm <span className="text-indigo-600">Dharani S</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
                        Information Technology Student & <br className="hidden md:block" />
                        Full Stack Developer
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Motivated IT student with strong leadership abilities and hands-on experience in full-stack and mobile application development. Passionate about building impactful solutions.
                    </p>

                    <div className="flex justify-center gap-4 pt-4">
                        <a
                            href="#project"
                            className="btn-primary"
                        >
                            View Projects
                        </a>
                        <a
                            href="#contact"
                            className="btn-outline"
                        >
                            Contact Me
                        </a>
                    </div>

                    <div className="flex justify-center gap-6 pt-4 text-gray-600">
                        <a href={config.social.LinkedIn} className="hover:text-indigo-600 transition duration-300 transform hover:scale-110">
                            <AiOutlineLinkedin size={32} />
                        </a>
                        <a href="https://github.com/Dharani-Cr7-14" className="hover:text-indigo-600 transition duration-300 transform hover:scale-110">
                            <AiOutlineGithub size={32} />
                        </a>
                        <a href={config.social.Email} className="hover:text-indigo-600 transition duration-300 transform hover:scale-110">
                            <AiOutlineMail size={32} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}