import React from 'react';
import { motion } from 'framer-motion';
import LineNumbers from "./LineNumbers";
import VerticalLines from "./VerticalLines";
import TypingAnimation from "./TypingAnimation";
import { useState } from 'react';

// Enhanced color palette and text configuration
const codeText = [
    { text: '<hello>\n', className: 'text-emerald-400 font-bold' },
    { text: 'Hello, my name is ', className: 'text-gray-300' },
    { text: 'Bichoy() {\n', className: 'text-cyan-400 font-bold' },
    { text: '    I am a ', className: 'text-gray-300' },
    { text: 'full-stack web developer', className: 'text-indigo-400 font-semibold' },
    { text: ' with extensive experience in building high-quality, fast, and user-friendly web & mobile applications.\n', className: 'text-gray-400' },
    { text: '    I specialize in using ', className: 'text-gray-300' },
    { text: 'modern technologies', className: 'text-purple-400 font-semibold' },
    { text: ' like React, Node.js, and Next.js to create seamless & dynamic solutions.\n', className: 'text-gray-400' },
    { text: '    My focus is on delivering exceptional ', className: 'text-gray-300' },
    { text: 'design', className: 'text-rose-400' },
    { text: ' & ', className: 'text-gray-300' },
    { text: 'functionality', className: 'text-rose-400' },
    { text: ' tailored to meet diverse client needs.\n', className: 'text-gray-400' },
    { text: '};', className: 'text-cyan-400 font-bold' }
];
export default function CodePresentation() {
    const [showButton, setShowButton] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center items-center w-full md:w-[52%] bg-gray-900/90 text-gray-300 md:p-6 md:pr-0 px-4 font-mono relative md:ml-[40px] order-2 md:order-1"
        >
            <motion.div
                whileHover={{ scale: 1.015 }}
                className="relative w-full h-full flex justify-center items-center bg-gray-800/60 rounded-2xl border-2 border-gray-700 shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 overflow-hidden"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-gray-900/40 opacity-50 pointer-events-none"></div>

                <LineNumbers />
                <VerticalLines />

                <div className="flex-grow flex flex-col justify-center items-start pl-4 h-full text-xs md:text-base z-10 relative">
                    <TypingAnimation
                        parts={codeText}
                        speed={30}  // Faster typing speed
                        cursorClassName="animate-pulse text-emerald-500"
                        onComplete={() => setShowButton(true)} // Callback when typing finishes
                    />

                    {showButton && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="w-full flex justify-center mt-6"
                        >
                            <motion.a
                                href="https://drive.google.com/file/d/1PHqHK4rCscp9xZryMMvTOLnDPLmgh_8d/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 shadow-lg hover:shadow-emerald-500/40 transition-all duration-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 12h16m-7-7l7 7-7 7"
                                    />
                                </svg>
                                Check My CV
                            </motion.a>

                        </motion.div>
                    )}
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-emerald-500/30"></div>
            </motion.div>
        </motion.div>
    );
};