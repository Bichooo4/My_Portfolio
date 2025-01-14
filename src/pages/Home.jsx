import React from "react";
import CodePresentation from "../components/CodePresentation";
import PersonalHighlight from "../components/PersonalHighlight";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row h-full w-full bg-pageBackground">
            <CodePresentation />
            <PersonalHighlight />
        </div>
    );
};