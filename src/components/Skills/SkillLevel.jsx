import React from 'react';

export default function SkillLevel({ selectedSection }) {
  // Define skill levels based on the selected section
  let skills = [];

  if (selectedSection === 'Programming Languages') {
    skills = [
      { name: 'HTML', level: 8 },
      { name: 'CSS', level: 7 },
      { name: 'JavaScript', level: 9 },
      { name: 'Python', level: 6 },
      { name: 'TypeScript', level: 7 },
    ];
  } else if (selectedSection === 'Frameworks') {
    skills = [
      { name: 'React.js', level: 8 },
      { name: 'Node.js', level: 7 },
      { name: 'Next.js', level: 8 },
      { name: 'Express.js', level: 7 },
    ];
  } else if (selectedSection === 'Databases') {
    skills = [
      { name: 'MongoDB', level: 8 },
      { name: 'SQL', level: 7 },
      { name: 'PostgreSQL', level: 9 },
      { name: 'MySQL', level: 8 },
    ];
  } else if (selectedSection === 'Tools & Applications') {
    skills = [
      { name: 'Git', level: 8 },
      { name: 'Docker', level: 7 },
      { name: 'Figma', level: 9 },
      { name: 'Visual Studio Code', level: 8 },
    ];
  } else if (selectedSection === 'Soft Skills') {
    skills = [
      { name: 'Communication', level: 8 },
      { name: 'Teamwork', level: 7 },
      { name: 'Problem-Solving', level: 9 },
      { name: 'Time Management', level: 8 },
      { name: 'Adaptability', level: 7 },
    ];
  }

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