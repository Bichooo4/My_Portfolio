import React, { useState } from 'react';
import { FaTools, FaUserTie } from 'react-icons/fa';
import { SlArrowRight, SlArrowDown } from 'react-icons/sl';
import { hardSkills, softSkills } from '@/data/skills';

export default function SkillsSideBar({ onSelectSection, selectedSection }) {
    const [showHardSkills, setShowHardSkills] = useState(true);

    return (
        <div className="text-white h-full py-6 px-6 sm:px-10">
            <style>
                {`
          .selected {
            color: #F0B65A;
            background: rgba(240, 182, 90, 0.1);
            border-left: 4px solid #F0B65A;
          }
          .sidebar-item:hover {
            background: rgba(240, 182, 90, 0.1);
          }
        `}
            </style>

            {/* Hard Skills Section */}
            <div>
                <div
                    className="flex items-center justify-between cursor-pointer mb-4 text-sm font-semibold"
                    onClick={() => setShowHardSkills(!showHardSkills)}
                >
                    <div className="flex items-center gap-2">
                        {showHardSkills ? (
                            <SlArrowDown size={16} />
                        ) : (
                            <SlArrowRight size={16} />
                        )}
                        <FaTools size={16} />
                        <span>{hardSkills.title}</span>
                    </div>
                </div>
                {showHardSkills &&
                    hardSkills.sections.map((section, index) => (
                        <div key={index}>
                            <div
                                className={`sidebar-item flex items-center gap-2 cursor-pointer py-2 px-4 rounded-md mb-2 ${section.title === selectedSection ? 'selected' : ''
                                    }`}
                                onClick={() => onSelectSection(section.title)}
                            >
                                <span>{section.title}</span>
                            </div>
                        </div>
                    ))}
            </div>

            {/* Soft Skills Section */}
            <div className="mt-6">
                <div
                    className={`sidebar-item flex items-center gap-2 cursor-pointer py-2 px-4 rounded-md ${softSkills.title === selectedSection ? 'selected' : ''
                        }`}
                    onClick={() => onSelectSection(softSkills.title)}
                >
                    <FaUserTie size={16} />
                    <span>{softSkills.title}</span>
                </div>
            </div>
        </div>
    );
};