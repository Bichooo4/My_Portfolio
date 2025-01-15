import React from "react";

export default function PersonalHighlight() {
    const firstName = "<Bichoy";
    const lastName = "Atef />";

    return (
        <div className="md:flex-1 flex flex-col md:items-center md:justify-center text-center md:my-0 my-12 w-full md:w-[70%] md:py-0 order-1 md:order-2">
            <h1 className="text-[#99B84A] text-5xl md:text-9xl font-[Lato] font-black italic tracking-[0.10em]">{firstName}</h1>
            <h1 className="text-[#99B84A] text-5xl md:text-9xl font-[Lato] font-black italic tracking-[0.10em] mt-2 md:mt-0">{lastName}</h1>
            <div className="mt-6 md:mt-12">
                <p className="text-white text-4xl md:text-7xl font-bold font-[Roboto] tracking-[0.13em]">/*Full-stack*/</p>
                <p className="text-white text-4xl md:text-7xl font-bold font-[Roboto] tracking-[0.13em]">Developer</p>
            </div>
        </div>
    );
};