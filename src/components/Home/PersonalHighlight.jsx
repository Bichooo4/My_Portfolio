import React from "react";

export default function PersonalHighlight() {
    const firstName = "Bichoy";
    const lastName = "Atef";

    return (
        <div className="md:flex-1 flex flex-col items-center justify-center text-center w-full md:w-[70%] py-12 md:py-0 order-1 md:order-2">
            <div className="space-y-2 md:space-y-4">
                <h1 className="text-lime-500 text-6xl md:text-9xl font-mono tracking-tight leading-none">
                    {firstName}
                </h1>
                <h1 className="text-lime-500 text-6xl md:text-9xl font-mono tracking-tight leading-none">
                    {lastName}
                </h1>
            </div>

            <div className="mt-8 md:mt-12 space-y-2">
                <p className="text-white text-4xl md:text-7xl font-mono tracking-wide">
                    /*Full-stack*/
                </p>
                <p className="text-white text-4xl md:text-7xl font-mono tracking-wide">
                    Developer
                </p>
            </div>
        </div>
    );
};