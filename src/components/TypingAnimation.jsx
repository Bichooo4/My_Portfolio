import React, { useState, useEffect } from "react";

export default function TypingAnimation({ parts = [], speed = 50 }) {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    const fullText = parts.map(part => part.text).join("");

    useEffect(() => {
        if (!isTyping) return;

        if (currentTextIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setText(fullText.slice(0, currentTextIndex + 1));
                setCurrentTextIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            setIsTyping(false);
        }
    }, [currentTextIndex, isTyping, speed, fullText]);

    const renderStyledText = () => {
        let currentPosition = 0;
        return parts.map((part, index) => {
            const start = currentPosition;
            const end = start + part.text.length;
            const displayedText = text.slice(start, end);
            currentPosition = end;

            return (
                <span key={index} className={part.className}>
                    {displayedText.split('\n').map((line, lineIndex, array) => (
                        <React.Fragment key={lineIndex}>
                            {line}
                            {lineIndex < array.length - 1 && <br />}
                        </React.Fragment>
                    ))}
                </span>
            );
        });
    };

    return (
        <div className="md:min-h-[280px] min-h-[335px] w-full border border-gray-200 rounded-md p-4">
            <div
                className="font-mono text-xs md:text-base h-full overflow-hidden"
                style={{
                    whiteSpace: 'pre-line',
                    lineHeight: '1.5',
                    textIndent: '-2em',
                    paddingLeft: '2em'
                }}
            >
                {renderStyledText()}
                {isTyping && (
                    <span
                        className="inline-block w-2 h-4 bg-gray-300 animate-pulse"
                        style={{ verticalAlign: 'middle' }}
                    />
                )}
            </div>
        </div>
    );
};