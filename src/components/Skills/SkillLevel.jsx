import React from 'react';
import { skillLevels } from '@/data/skills';

export default function SkillLevel({ selectedSection }) {
  const skills = skillLevels[selectedSection] || [];

  return (
    <div className='grid grid-cols-2 gap-8 text-white mx-20 my-10'>
      {skills.map((skill, index) => (
        <div key={index}>
          <p className='mb-3 text-lg font-medium'>{skill.name}</p>
          <div className='flex gap-2'>
            {Array.from({ length: skill.level }).map((_, i) => (
              <div
                key={i}
                className={`h-6 w-6 rounded-sm bg-orange-500 animate-fill`}
                style={{
                  animationDelay: `${i * 0.05}s`,
                  animationDuration: '0.6s',
                }}
              ></div>
            ))}
            {Array.from({ length: 10 - skill.level }).map((_, i) => (
              <div
                key={i + skill.level}
                className='h-6 w-6 rounded-sm bg-gray-800'
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};