import dharani from '../assets/profile_updated.jpg'
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
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                <div className="md:w-1/2 space-y-6 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                        Hi, I'm <span className="text-indigo-600">Dharani S</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-gray-600">
                        Information Technology Student & <br className="hidden md:block" />
                        Full Stack Developer
                    </h2>
                    <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
                        Motivated IT student with strong leadership abilities and hands-on experience in full-stack and mobile application development. Passionate about building impactful solutions.
                    </p>

                    <div className="flex justify-center md:justify-start gap-4 pt-4">
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

                    <div className="flex justify-center md:justify-start gap-6 pt-4 text-gray-600">
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

                <div className="md:w-1/2 flex justify-center relative">
                    <div className="absolute inset-0 bg-indigo-200 rounded-full filter blur-3xl opacity-30 transform translate-y-4"></div>
                    <img
                        className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-2xl"
                        src={dharani}
                        alt="Dharani S"
                    />
                </div>
            </div>
        </section>
    )
}