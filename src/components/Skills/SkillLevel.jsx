import React from 'react';
import { motion } from 'framer-motion';
import { skillLevels } from '@/data/skills';

export default function SkillLevel({ selectedSection }) {
  const skills = skillLevels[selectedSection] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
          <div className="relative bg-gray-900 p-6 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-mono text-lime-500">{skill.name}</h3>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level * 10}%` }}
                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-lime-500 to-emerald-500"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};