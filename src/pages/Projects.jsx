import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { projects } from '@/data/projects'; // Adjusted import path for utils
import LineNumbers from '@/components/Home/LineNumbers'; // Import the LineNumbers component

export default function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

    const handlePrev = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const project = projects[currentProjectIndex];

    return (
        <div className="h-full bg-pageBackground flex justify-center items-center relative">
            {/* Left Button - Conditionally Rendered */}
            {currentProjectIndex > 0 && (
                <button
                    onClick={handlePrev}
                    className="text-3xl sm:text-4xl text-lime-500 bg-gray-800 p-3 rounded-full fixed left-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-700 transition-all duration-200 z-10"
                >
                    <IoIosArrowBack />
                </button>
            )}

            {/* Right Button - Conditionally Rendered */}
            {currentProjectIndex < projects.length - 1 && (
                <button
                    onClick={handleNext}
                    className="text-3xl sm:text-4xl text-lime-500 bg-gray-800 p-3 rounded-full fixed right-4 top-1/2 transform -translate-y-1/2 hover:bg-gray-700 transition-all duration-200 z-10"
                >
                    <IoIosArrowForward />
                </button>
            )}

            <div className="w-full max-w-lg sm:max-w-xl mx-auto relative">
                <div className="text-center p-6 bg-transparent rounded-lg border border-gray-700 hover:border-lime-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-500/20">
                    <h2 className="text-start text-lg sm:text-xl font-semibold text-lime-500 mb-6">_Project {project.id}</h2>

                    {/* Adjusted Container */}
                    <div className="flex bg-[#2c2c33] rounded-lg shadow-lg overflow-hidden h-48 p-4">
                        {/* Line Numbers */}
                        <div className="flex flex-col text-right h-[90%] my-auto">
                            <LineNumbers start={1} end={7} opacityRange={{ start: 3, end: 5 }} />
                        </div>

                        {/* Vertical Line */}
                        <div className="w-px bg-gray-400 mx-4 h-[85%] my-auto"></div>

                        {/* Code Snippet */}
                        <div className="flex-grow p-4 font-mono text-xs sm:text-sm text-lime-400 h-[90%] my-auto overflow-y-auto">
                            <pre className="whitespace-pre-wrap break-words leading-6">{project.codeSnippet}</pre>
                        </div>
                    </div>

                    <p className="text-gray-300 mb-4 text-sm sm:text-base mt-4">
                        {project.description}
                    </p>

                    <a
                        href={project.link}
                        className="text-gray-400 hover:text-lime-500 text-xs sm:text-sm transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {project.link}
                    </a>
                </div>
            </div>
        </div>
    );
}