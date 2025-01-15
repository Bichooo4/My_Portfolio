import React, { useState } from 'react';
import { FaTools, FaUserTie } from 'react-icons/fa';
import { SlArrowRight, SlArrowDown } from 'react-icons/sl';

// External Variables
const hardSkills = {
  title: 'Hard Skills',
  sections: [
    {
      title: 'Programming Languages',
      items: ['HTML', 'CSS', 'JavaScript', 'Python', 'TypeScript'],
    },
    {
      title: 'Frameworks',
      items: ['React.js', 'Node.js', 'Next.js', 'Express.js'],
    },
    {
      title: 'Databases',
      items: ['MongoDB', 'SQL', 'PostgreSQL', 'MySQL'],
    },
    {
      title: 'Tools & Applications',
      items: ['Git', 'Docker', 'Figma', 'Visual Studio Code'],
    },
  ],
};

const softSkills = {
  title: 'Soft Skills',
  items: ['Communication', 'Teamwork', 'Problem-Solving', 'Time Management', 'Adaptability'],
};

export default function SkillsSideBar({ onSelectSection, selectedSection }) {
  const [showHardSkills, setShowHardSkills] = useState(true);

  return (
    <div className='text-white'>
      {/* Styles */}
      <style>
        {`
          .selected {
            color: #F0B65A;
            padding-left: 7px;
          }
        `}
      </style>

      {/* Hard Skills Section */}
      <div className='pl-10'>
        <div
          className='flex items-center justify-between cursor-pointer mb-2 py-2'
          onClick={() => setShowHardSkills(!showHardSkills)}
        >
          <div className='flex items-center'>
            {showHardSkills ? (
              <SlArrowDown size={16} className='mr-2' />
            ) : (
              <SlArrowRight size={16} className='mr-2' />
            )}
            <FaTools size={16} className='mr-2' />
            <span className='text-sm font-semibold'>{hardSkills.title}</span>
          </div>
        </div>
        {showHardSkills &&
          hardSkills.sections.map((section, index) => (
            <div key={index} className='pl-6'>
              <div
                className={`flex items-center cursor-pointer mb-2 py-2 ${
                  section.title === selectedSection ? 'selected' : ''
                }`}
                onClick={() => onSelectSection(section.title)}
              >
                <span className='text-sm font-medium'>{section.title}</span>
              </div>
            </div>
          ))}
      </div>

      {/* Soft Skills Section */}
      <div className='mt-4 pl-10'>
        <div
          className={`flex items-center cursor-pointer mb-2 py-2 ${
            softSkills.title === selectedSection ? 'selected' : ''
          }`}
          onClick={() => onSelectSection(softSkills.title)}
        >
          <FaUserTie size={16} className='mr-2' />
          <span className='text-sm font-semibold'>{softSkills.title}</span>
        </div>
      </div>
    </div>
  );
}