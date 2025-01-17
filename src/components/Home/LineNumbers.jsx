import React from "react";

export default function LineNumbers({ start = 1, end = 20, opacityRange = { start: 5, end: 16 } }) {
    return (
        <div className="pr-4 text-gray-500 h-full flex flex-col justify-center">
            {[...Array(end).keys()].map((line) => (
                <p
                    key={line}
                    className={`text-right text-sm md:text-base leading-6 md:leading-normal ${line + 1 < opacityRange.start || line + 1 > opacityRange.end ? "opacity-20" : "opacity-70"
                        }`}
                >
                    {line + start}
                </p>
            ))}
        </div>
    );
};