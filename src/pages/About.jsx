import { Code2, Terminal, Laptop, Brain, Rocket, Coffee } from 'lucide-react';
import React from 'react';

export default function About() {
    const skills = [
        {
            id: 'expertise',
            icon: <Terminal className="w-6 h-6" />,
            text: 'Experienced Full-Stack Web Developer specializing in the MERN stack and React Native with two years of professional experience building robust applications.',
            color: 'text-lime-500',
        },
        {
            id: 'frontend',
            icon: <Code2 className="w-6 h-6" />,
            text: 'Expert in creating responsive and user-focused interfaces with React and Next.js, ensuring optimal user experiences.',
            color: 'text-gray-300',
        },
        {
            id: 'backend',
            icon: <Laptop className="w-6 h-6" />,
            text: 'Proficient in designing scalable backend systems using Node.js and MongoDB, optimizing performance and security.',
            color: 'text-gray-300',
        },
        {
            id: 'mobile',
            icon: <Brain className="w-6 h-6" />,
            text: 'Experienced in React Native mobile app development, delivering cross-platform solutions for seamless user engagement.',
            color: 'text-gray-300',
        },
        {
            id: 'projects',
            icon: <Rocket className="w-6 h-6" />,
            text: 'Portfolio showcases interactive dashboards, dynamic portfolios, e-commerce platforms, and mobile applications.',
            color: 'text-gray-300',
        },
        {
            id: 'approach',
            icon: <Coffee className="w-6 h-6" />,
            text: 'Passionate about innovation, committed to continuous learning, and eager to contribute to impactful, high-quality projects.',
            color: 'text-gray-300',
        },
    ];

    return (
        <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center justify-center md:p-0 px-6">
            <div className="relative z-10 w-full max-w-screen-lg">
                {/* Creative Header Section */}
                <div className="mb-16 text-center relative">
                    <div className="relative inline-block">
                        <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                        <div className="relative px-7 py-4 bg-gray-900 ring-1 ring-gray-800">
                            <div className="flex items-center space-x-2 mb-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <code className="text-4xl md:text-6xl font-mono font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-500 to-green-500">
                                {"<About.me />"}
                            </code>
                            <div className="mt-2 flex justify-between text-sm text-gray-500">
                                <span>developer.profile</span>
                                <span>status: active</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row-reverse items-center gap-12 max-w-6xl mx-auto">
                    {/* Profile Image with Enhanced Effects */}
                    <div className="md:w-1/2 w-full group perspective">
                        <div className="relative transform transition-all duration-500 hover:scale-105 hover:[transform-style:preserve-3d] hover:rotate-y-12">
                            <div className="absolute inset-0 bg-lime-500 rounded-lg blur-xl opacity-20 group-hover:opacity-30 group-hover:blur-2xl transition-all duration-500"></div>
                            <div className="relative rounded-lg overflow-hidden border-2 border-lime-500/30 group-hover:border-lime-500/50 transition-colors duration-300">
                                <img
                                    src='/assets/images/developer3.jpg'
                                    alt="Developer Profile"
                                    className="w-full object-cover object-center h-[400px] md:h-[500px] transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section with Enhanced Animations */}
                    <div className="md:w-1/2">
                        <div className="space-y-6">
                            <div className="inline-block mb-4 hover:text-lime-400 transition-colors duration-300">
                                <span className="text-lime-500 animate-pulse">&lt;</span>
                                <span className="text-gray-300">developer</span>
                                <span className="text-lime-500 animate-pulse">&gt;</span>
                            </div>

                            {skills.map((skill, index) => (
                                <div
                                    key={skill.id}
                                    className="flex items-start gap-4 group transform hover:-translate-y-1 hover:translate-x-2 transition-all duration-300"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="p-2 rounded-lg bg-gray-800/50 group-hover:bg-gray-800 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-lime-500/20">
                                        {React.cloneElement(skill.icon, {
                                            className: `w-6 h-6 text-lime-500 group-hover:scale-110 transition-transform duration-300`
                                        })}
                                    </div>
                                    <p className={`${skill.color} flex-1 group-hover:text-lime-400 transition-colors duration-300`}>
                                        {skill.text}
                                    </p>
                                </div>
                            ))}

                            <div className="inline-block mt-4 hover:text-lime-400 transition-colors duration-300">
                                <span className="text-lime-500 animate-pulse">&lt;/</span>
                                <span className="text-gray-300">developer</span>
                                <span className="text-lime-500 animate-pulse">&gt;</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Section with Animation */}
                <div className="md:mt-10 mt-6 mb-2 text-center text-gray-400">
                    <p className="text-sm hover:text-lime-400 transition-colors duration-300 cursor-default">
                        <span className="text-lime-500">&lt; </span>
                        Building tomorrow's web experiences today
                        <span className="text-lime-500"> /&gt;</span>
                    </p>
                </div>
            </div>
        </div>
    );
};