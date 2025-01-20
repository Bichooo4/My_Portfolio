import React from 'react';
import { skillLevels } from '@/data/skills';

export default function SkillLevel({ selectedSection }) {
  const skills = skillLevels[selectedSection] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
      {skills.map((skill, index) => (
        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <p className="mb-4 text-lg font-semibold">{skill.name}</p>
          <div className="w-full bg-gray-700 rounded-full h-4 relative overflow-hidden">
            <div
              className="bg-orange-500 h-4 rounded-full animate-fill"
              style={{
                width: `${skill.level * 10}%`,
                animationDuration: `${0.6 + index * 0.1}s`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
