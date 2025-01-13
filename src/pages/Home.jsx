import React from "react";

export default function Home() {
    const firstName = "<Bichoy";
    const lastName = "Atef />";

    return (
        <div className="flex flex-col md:flex-row h-full w-full bg-pageBackground">
            {/* Left Side - Code Editor Design */}
            <div className="flex flex-col justify-center items-center w-full md:w-[50%] bg-pageBackground text-gray-300 md:p-6 px-4 font-mono relative md:ml-[40px] order-2 md:order-1">
                {/* Code Editor Content */}
                <div className="flex justify-center items-center h-full w-full">
                    {/* Line Numbers */}
                    <div className="pr-4 text-gray-500 h-full md:h-full flex flex-col justify-center">
                        {[
                            ...Array(
                                window.innerWidth < 768 ? 25 : 20
                            ).keys(),
                        ].map((line) => (
                            <p
                                key={line}
                                className={`text-right text-sm md:text-base leading-6 md:leading-normal ${line < 4 || line > 15
                                        ? "opacity-40"
                                        : "opacity-90"
                                    }`}
                            >
                                {line + 1}
                            </p>
                        ))}
                    </div>

                    {/* Vertical Gray Lines */}
                    <div className="flex flex-row justify-center items-center h-full md:h-full pr-4">
                        <div className="w-px bg-gray-400 mx-1 h-[90%] md:h-[80%] ml-[15px] md:ml-[25px]"></div>
                        <div className="w-px bg-gray-500 mx-1 h-[80%] md:h-[65%] ml-[15px] md:ml-[25px]"></div>
                        <div className="w-px bg-gray-600 mx-1 h-[70%] md:h-[45%] ml-[15px] md:ml-[25px]"></div>
                    </div>

                    {/* Code Content */}
                    <div className="flex-grow flex flex-col justify-center items-start pl-4 h-full md:h-full text-xs md:text-base">
                        <p className="text-yellow-400">&lt;hello&gt;</p>
                        <p>
                            Hello, my name is <span className="text-green-400">Bichoy()</span> {"{"}
                        </p>
                        <p className="ml-4 leading-6 md:leading-normal">
                            I am a <span className="text-purple-400">full-stack web developer</span> with extensive experience
                            in building high-quality, fast, and user-friendly web & mobile applications.
                        </p>
                        <p className="ml-4 leading-6 md:leading-normal">
                            I specialize in using <span className="text-pink-400">modern technologies</span> like React, Node.js,
                            & Next.js to create seamless and dynamic solutions.
                        </p>
                        <p className="ml-4 leading-6 md:leading-normal">
                            My focus is on delivering exceptional <span className="text-cyan-400">design</span> &
                            <span className="text-cyan-400"> functionality</span> tailored to meet diverse client needs.
                        </p>
                        <p>{"};"}</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Name and Professional Description */}
            <div className="md:flex-1 flex flex-col md:items-center md:justify-center text-center md:my-0 my-12 w-full md:w-[70%] md:py-0 order-1 md:order-2">
                {/* First Name */}
                <h1 className="text-[#99B84A] text-5xl md:text-9xl font-[Lato] font-black italic tracking-[0.11em]">{firstName}</h1>
                {/* Last Name */}
                <h1 className="text-[#99B84A] text-5xl md:text-9xl font-[Lato] font-black italic tracking-[0.11em] mt-2 md:mt-0">{lastName}</h1>
                {/* Professional Description */}
                <div className="mt-6 md:mt-12">
                    <p className="text-white text-4xl md:text-7xl font-bold font-[Roboto] tracking-[0.13em]">/*Full-stack*/</p>
                    <p className="text-white text-4xl md:text-7xl font-bold font-[Roboto] tracking-[0.13em]">Developer</p>
                </div>
            </div>
        </div>
    );
};