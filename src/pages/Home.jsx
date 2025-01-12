import React from "react";

export default function Home() {
    // Define variables for the name to be displayed on the right side
    const firstName = "<Bichoy";
    const lastName = "Atef />";

    return (
        <div className="flex h-full w-full bg-pageBackground">
            {/* Left Side - Code Editor Design */}
            <div className="flex flex-col justify-center items-center w-[50%] bg-pageBackground text-gray-300 p-6 font-mono relative ml-[40px]">
                {/* Code Editor Content */}
                <div className="flex justify-center items-center h-full w-full">
                    {/* Line Numbers */}
                    <div className="pr-4 text-gray-500">
                        {[...Array(20).keys()].map((line) => (
                            <p
                                key={line}
                                className={`text-right ${line < 4 || line > 15 ? "opacity-40" : "opacity-90"}`}
                            >
                                {line + 1}
                            </p>
                        ))}
                    </div>

                    {/* Vertical Gray Lines */}
                    <div className="flex flex-row justify-center items-center h-full pr-4">
                        <div className="w-px bg-gray-400 mx-1 h-[80%] ml-[25px]"></div> {/* Tallest */}
                        <div className="w-px bg-gray-500 mx-1 h-[65%] ml-[25px]"></div> {/* Medium */}
                        <div className="w-px bg-gray-600 mx-1 h-[45%] ml-[25px]"></div> {/* Shortest */}
                    </div>

                    {/* Code Content */}
                    <div className="flex-grow flex flex-col justify-center items-start pl-4">
                        <p className="text-yellow-400">&lt;hello&gt;</p>
                        <p>
                            Hello, my name is <span className="text-green-400">Bichoy()</span> {"{"}
                        </p>
                        <p className="ml-4">
                            I am a <span className="text-purple-400">full-stack web developer</span> with extensive experience
                            in building high-quality, fast, and user-friendly web and mobile applications.
                        </p>
                        <p className="ml-4">
                            I specialize in using <span className="text-pink-400">modern technologies</span> like React, Node.js,
                            and Next.js to create seamless and dynamic solutions.
                        </p>
                        <p className="ml-4">
                            My focus is on delivering exceptional <span className="text-cyan-400">design</span> and
                            <span className="text-cyan-400"> functionality</span> tailored to meet diverse client needs.
                        </p>
                        <p>{"};"}</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Name and Professional Description */}
            <div className="flex-1 flex flex-col items-center justify-center text-center w-[70%]">
                {/* First Name */}
                <h1 className="text-[#99B84A] text-9xl font-[Lato] font-black italic tracking-[0.12em]">{firstName}</h1>
                {/* Last Name */}
                <h1 className="text-[#99B84A] text-9xl font-[Lato] font-black italic tracking-[0.12em]">{lastName}</h1>
                {/* Professional Description */}
                <div className="mt-12">
                    <p className="text-white text-7xl font-bold font-[Roboto] tracking-[0.12em]">/* Full-stack */</p>
                    <p className="text-white text-7xl font-bold font-[Roboto] tracking-[0.12em]">Developer</p>
                </div>
            </div>

        </div>
    );
};