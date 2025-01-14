import React from "react";
import TypingAnimation from "./TypingAnimation";
import VerticalLines from "./VerticalLines";
import LineNumbers from "./LineNumbers";

const codeText = [
    { text: '<hello>\n', className: 'text-yellow-400' },
    { text: 'Hello, my name is', className: '' },
    { text: ' Bichoy() {\n', className: 'text-green-400' },
    { text: '    I am a ', className: '' },
    { text: 'full-stack web developer', className: 'text-purple-400' },
    { text: ' with extensive experience', className: '' },
    { text: ' in building high-quality, fast, and user-friendly web & mobile\n', className: '' },
    { text: ' applications.\n', className: '' },
    { text: '    I specialize in using ', className: '' },
    { text: 'modern technologies', className: 'text-pink-400' },
    { text: ' like React, Node.js,\n', className: '' },
    { text: '    & Next.js to create seamless and dynamic solutions.\n', className: '' },
    { text: '    My focus is on delivering exceptional ', className: '' },
    { text: 'design', className: 'text-cyan-400' },
    { text: ' & ', className: '' },
    { text: 'functionality', className: 'text-cyan-400' },
    { text: ' tailored to meet diverse client needs.\n};', className: '' },
];

export default function CodePresentation() {
    return (
        <div className="flex flex-col justify-center items-center w-full md:w-[50%] bg-pageBackground text-gray-300 md:p-6 px-4 font-mono relative md:ml-[40px] order-2 md:order-1">
            <div className="flex justify-center items-center h-full w-full">
                <LineNumbers />
                <VerticalLines />
                <div className="flex-grow flex flex-col justify-center items-start h-full text-xs md:text-base">
                    <TypingAnimation parts={codeText} speed={50} />
                </div>
            </div>
        </div>
    );
};