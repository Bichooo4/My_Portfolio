import React from "react";

export default function LineNumbers() {
    return (
        <div className="pr-4 text-gray-500 h-full flex flex-col justify-center">
            {[...Array(20).keys()].map((line) => (
                <p
                    key={line}
                    className={`text-right text-sm md:text-base leading-6 md:leading-normal ${line < 4 || line > 15 ? "opacity-30" : "opacity-90"
                        }`}
                >
                    {line + 1}
                </p>
            ))}
        </div>
    );
};