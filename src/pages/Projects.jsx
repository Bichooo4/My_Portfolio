import React, { useState, useEffect } from 'react';
import { projects } from '@/data/projects';
import LineNumbers from '@/components/Home/LineNumbers';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Projects() {
    const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [showDetails, setShowDetails] = useState(false);

    const handlePrev = () => {
        setDirection(-1);
        setCurrentProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const project = projects[currentProjectIndex];

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'ArrowRight') handleNext();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, []);

    return (
        <div className="min-h-screen bg-gray-900 py-6 sm:py-12 px-2 sm:px-4">
            <div className="max-w-4xl mx-auto">
                {/* Progress Bar */}
                <div className="mb-4 sm:mb-8 flex items-center justify-between gap-4">
                    <div className="h-1 flex-1 bg-gray-800 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-lime-500 transition-all duration-300"
                            style={{ width: `${((currentProjectIndex + 1) / projects.length) * 100}%` }}
                        />
                    </div>
                    <span className="text-gray-400 text-sm">
                        {currentProjectIndex + 1}/{projects.length}
                    </span>
                </div>

                {/* Main Content */}
                <motion.div
                    key={currentProjectIndex}
                    initial={{ opacity: 0, x: direction * 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -direction * 50 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                >
                    <div className="group bg-gray-900 rounded-xl sm:rounded-2xl border border-gray-800 overflow-hidden shadow-xl hover:shadow-lime-500/20 hover:shadow-2xl transition-all duration-300 hover:border-lime-500/30">
                        {/* Header */}
                        <div className="bg-gray-800/50 p-3 sm:p-4 border-b border-gray-800 flex items-center justify-between">
                            <h2 className="text-base sm:text-lg font-semibold text-lime-500">
                                {project.name}
                            </h2>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                            </div>
                        </div>

                        {/* Brief Description */}
                        <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-800 bg-gray-800/30">
                            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-2">
                                {project.shortDescription || project.description.split('.')[0] + '.'}
                            </p>
                        </div>

                        {/* Code Section */}
                        <div className="p-4 sm:p-6">
                            <div className="bg-gray-800/50 rounded-xl overflow-hidden group-hover:shadow-lg group-hover:shadow-lime-500/5 transition-all duration-300">
                                <div className="flex p-3 sm:p-4">
                                    <div className="flex flex-col text-right pr-3 sm:pr-4 border-r border-gray-700">
                                        <LineNumbers start={1} end={7} opacityRange={{ start: 3, end: 5 }} />
                                    </div>
                                    <div className="flex-1 pl-3 sm:pl-4 font-mono text-xs sm:text-sm text-lime-500 overflow-x-auto">
                                        <pre className="whitespace-pre-wrap break-words leading-6">{project.codeSnippet}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 flex flex-wrap justify-center gap-2 sm:gap-4">
                            <button
                                onClick={() => window.open(project.livePreview, '_blank')}
                                className="group flex items-center gap-2 bg-lime-500 text-gray-900 px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:bg-lime-400 hover:shadow-lg hover:shadow-lime-500/30 active:scale-95"
                            >
                                <FaExternalLinkAlt className="text-base sm:text-lg group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                                <span>Live Preview</span>
                            </button>

                            <button
                                onClick={() => window.open(project.github, '_blank')}
                                className="group flex items-center gap-2 bg-gray-800 text-lime-500 px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-lime-500/20 border border-lime-500/20 hover:border-lime-500/50 active:scale-95"
                            >
                                <FaGithub className="text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-300" />
                                <span>View Code</span>
                            </button>

                            <button
                                onClick={() => setShowDetails(!showDetails)}
                                className="group flex items-center gap-2 bg-gray-800 text-lime-500 px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 hover:bg-gray-700 hover:shadow-lg hover:shadow-lime-500/20 border border-lime-500/20 hover:border-lime-500/50 active:scale-95"
                            >
                                <FaInfoCircle className="text-base sm:text-lg group-hover:scale-110 transition-transform duration-300" />
                                <span>Details</span>
                            </button>
                        </div>

                        {/* Project Info */}
                        {showDetails && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="p-4 sm:p-6 bg-gray-800/30 border-t border-gray-800"
                            >
                                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="space-y-2">
                                    <h3 className="text-lime-500 text-sm sm:text-base font-medium">Technologies Used:</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies?.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-2 sm:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs sm:text-sm hover:bg-gray-700 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between pointer-events-none px-2 sm:px-0">
                        <button
                            onClick={handlePrev}
                            className="pointer-events-auto transform -translate-x-1 sm:-translate-x-16 text-2xl sm:text-3xl text-lime-500 bg-gray-800/90 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 hover:shadow-lime-500/20"
                        >
                            <IoIosArrowBack />
                        </button>
                        <button
                            onClick={handleNext}
                            className="pointer-events-auto transform translate-x-1 sm:translate-x-16 text-2xl sm:text-3xl text-lime-500 bg-gray-800/90 hover:bg-gray-700 p-2 sm:p-3 rounded-full transition-all duration-200 shadow-lg hover:scale-110 hover:shadow-lime-500/20"
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}