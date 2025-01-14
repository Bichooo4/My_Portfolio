import React from "react";

export default function VerticalLines() {
    return (
        <div className="flex flex-row justify-center items-center h-full pr-4">
            <div className="w-px bg-gray-400 mx-1 h-[90%] md:h-[77%] ml-[15px] md:ml-[25px]"></div>
            <div className="w-px bg-gray-500 mx-1 h-[80%] md:h-[65%] ml-[15px] md:ml-[25px]"></div>
            <div className="w-px bg-gray-600 mx-1 h-[70%] md:h-[57%] ml-[15px] md:ml-[25px]"></div>
        </div>
    );
};