import React from "react";
import CodePresentation from "@/components/Home/CodePresentation";
import PersonalHighlight from "@/components/Home/PersonalHighlight";

export default function Home() {
    return (
        <div className="flex flex-col md:flex-row h-full w-full bg-pageBackground">
            <CodePresentation />
            <PersonalHighlight />
        </div>
    );
};