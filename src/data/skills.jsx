// skills.js
import React from 'react';
import { Code, Layers, Database, UserCheck, Wrench } from 'lucide-react';

export const hardSkills = {
  title: 'Hard Skills',
  sections: [
    {
      title: 'Programming Languages',
      icon: <Code className="w-6 h-6 text-lime-500" />,
      items: ['C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frameworks & Technologies',
      icon: <Layers className="w-6 h-6 text-lime-500" />,
      items: [
        'ReactJS',
        'NodeJS',
        'React Native',
        'Java Swing',
        'Electron',
        'Next.js',
        'Express.js'
      ],
    },
    {
      title: 'Databases',
      icon: <Database className="w-6 h-6 text-lime-500" />,
      items: ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB)'],
    },
    {
      title: 'Web Technologies',
      icon: <Code className="w-6 h-6 text-lime-500" />,
      items: ['HTML5', 'CSS3', 'Tailwind CSS', 'RESTful APIs'],
    },
    {
      title: 'Development Tools',
      icon: <Wrench className="w-6 h-6 text-lime-500" />,
      items: [
        'Git/GitHub',
        'VS Code',
        'NetBeans IDE',
        'Proteus'
      ],
    },
    {
      title: 'Hardware & Electronics',
      icon: <Wrench className="w-6 h-6 text-lime-500" />,
      items: [
        'PCB Design',
        'Circuit Simulation (Proteus)',
        'Electronics Circuit Analysis'
      ],
    },
  ],
};

export const softSkills = {
  title: 'Soft Skills',
  icon: <UserCheck className="w-6 h-6 text-lime-500" />,
  items: [
    'Problem-solving',
    'Teamwork',
    'Research',
    'Fast learner'
  ],
};

export const skillLevels = {
  'Programming Languages': [
    { name: 'C++', level: 8 },
    { name: 'C#', level: 7 },
    { name: 'Java', level: 8 },
    { name: 'Python', level: 7 },
    { name: 'JavaScript', level: 9 },
    { name: 'TypeScript', level: 8 },
  ],
  'Frameworks & Technologies': [
    { name: 'ReactJS', level: 9 },
    { name: 'NodeJS', level: 8 },
    { name: 'React Native', level: 8 },
    { name: 'Java Swing', level: 7 },
    { name: 'Electron', level: 6 },
    { name: 'Next.js', level: 7 },
    { name: 'Express.js', level: 8 },
  ],
  'Databases': [
    { name: 'PostgreSQL', level: 8 },
    { name: 'MySQL', level: 8 },
    { name: 'MongoDB', level: 8 },
  ],
  'Web Technologies': [
    { name: 'HTML5', level: 9 },
    { name: 'CSS3', level: 8 },
    { name: 'Tailwind CSS', level: 8 },
    { name: 'RESTful APIs', level: 8 },
  ],
  'Development Tools': [
    { name: 'Git/GitHub', level: 9 },
    { name: 'VS Code', level: 9 },
    { name: 'NetBeans IDE', level: 7 },
    { name: 'Proteus', level: 7 },
  ],
  'Hardware & Electronics': [
    { name: 'PCB Design', level: 7 },
    { name: 'Circuit Simulation (Proteus)', level: 8 },
    { name: 'Electronics Circuit Analysis', level: 7 },
  ],
  'Soft Skills': [
    { name: 'Problem-solving', level: 9 },
    { name: 'Teamwork', level: 8 },
    { name: 'Research', level: 8 },
    { name: 'Fast learner', level: 9 },
  ],
};

export const languages = {
  title: 'Languages',
  items: [
    { name: 'Arabic', proficiency: 'Native' },
    { name: 'English', proficiency: 'Fluent' },
    { name: 'French', proficiency: 'Excellent' },
  ],
};

export const projects = [
  {
    title: 'Quiz Web Application',
    description: `
      - Frontend: ReactJS for user-friendly interface with smooth and interactive use.
      - Backend: Node.js connected to MongoDB for efficient data handling and storage.
      - Features: Role-based access control system for admin and user management, adaptive difficulty system based on user rankings and performance tracking.
      - Architecture: Scalable design to handle multiple concurrent users.
    `,
  },
  {
    title: 'Cross-Platform Password Management Mobile App',
    description: `
      - Platform: React Native Expo with TypeScript for cross-platform compatibility.
      - Security: Advanced encryption algorithms for secure password storage.
      - UI/UX: Intuitive calculator-style GUI for enhanced user experience.
      - Compatibility: Optimized for both iOS and Android devices.
    `,
  },
  {
    title: 'E-commerce Backend System for Automotive Parts',
    description: `
      - Backend: Node.js with MongoDB for robust infrastructure and efficient data management.
      - Performance: Optimized for high-traffic scenarios and transaction processing.
      - API: RESTful APIs for seamless frontend integration.
      - Focus: Inventory management and scalable e-commerce functionalities.
    `,
  },
  {
    title: 'Java Desktop Games Application',
    description: `
      - Development: Java Swing for interactive GUI development.
      - Networking: Java Socket programming for real-time client-server communication.
      - Architecture: Modular, maintainable code structure for game logic and user interface.
      - Skills: Advanced Java development and network programming concepts.
    `,
  },
];

export const professionalSummary = `
Experienced Full-Stack Software Engineer with hands-on experience in MERN stack development, JavaScript, and cross-platform mobile applications. 
Proficient in C++, C#, and Java programming languages with a strong background in database management (SQL, MongoDB) and software testing methodologies. 
Demonstrated expertise in developing scalable backend systems, responsive web applications, and desktop applications using modern frameworks. 
Strong problem-solving abilities with a passion for innovation and commitment to continuous learning in software engineering.
`;

// Export a combined menuItems array (for example, for use in your AnimatedSidebar)
export const menuItems = [
  ...hardSkills.sections,
  {
    title: softSkills.title,
    icon: softSkills.icon,
    items: softSkills.items,
  },
];