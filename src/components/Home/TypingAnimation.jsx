import React, { useState, useEffect, useRef } from "react";

export default function TypingAnimation({
    parts = [],
    speed = 30,
    cursorClassName = "animate-pulse text-emerald-500",
    onComplete
}) {
    const [typedLines, setTypedLines] = useState([]);
    const [currentPartIndex, setCurrentPartIndex] = useState(0);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        if (currentPartIndex >= parts.length) {
            onComplete?.();
            return;
        }

        const currentPart = parts[currentPartIndex];
        const isLastCharacter = currentTextIndex === currentPart.text.length - 1;

        const timeout = setTimeout(() => {
            if (currentTextIndex < currentPart.text.length) {
                setCurrentTextIndex(prev => prev + 1);
            } else {
                // Complete current line
                setTypedLines(prev => [
                    ...prev, 
                    { 
                        text: currentPart.text, 
                        className: currentPart.className 
                    }
                ]);
                setCurrentPartIndex(prev => prev + 1);
                setCurrentTextIndex(0);
            }
        }, isLastCharacter ? speed * 2 : speed);

        return () => clearTimeout(timeout);
    }, [currentPartIndex, currentTextIndex, parts, speed, onComplete]);

    // Autoscroll to bottom
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [typedLines]);

    const currentPart = parts[currentPartIndex];
    const currentPartialText = currentPart 
        ? currentPart.text.slice(0, currentTextIndex) 
        : '';

    return (
        <div 
            ref={containerRef}
            className="w-full h-64 overflow-auto scrollbar-hidden"
            style={{ 
                whiteSpace: 'pre-line', 
                lineHeight: '1.5',
                scrollBehavior: 'smooth'
            }}
        >
            {typedLines.map((line, index) => (
                <span 
                    key={`line-${index}`} 
                    className={line.className}
                >
                    {line.text}
                </span>
            ))}

            {currentPartIndex < parts.length && (
                <span className={currentPart.className}>
                    {currentPartialText}
                    <span className={`${cursorClassName} ml-1`}>▋</span>
                </span>
            )}
        </div>
    );
};