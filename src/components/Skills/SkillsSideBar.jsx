import React, { useState } from 'react';
import { FaTools, FaUserTie } from 'react-icons/fa';
import { SlArrowRight, SlArrowDown } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { hardSkills, softSkills } from '@/data/skills';

export default function SkillsSideBar({ onSelectSection, selectedSection }) {
  const [showHardSkills, setShowHardSkills] = useState(true);

  return (
    <div className="text-white h-full py-6 px-6 sm:px-10 bg-gray-900/50 backdrop-blur-lg">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hard Skills Section */}
        <div>
          <motion.div
            className="flex items-center justify-between cursor-pointer mb-4 text-sm font-mono"
            onClick={() => setShowHardSkills(!showHardSkills)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-2 text-lime-500">
              {showHardSkills ? <SlArrowDown size={16} /> : <SlArrowRight size={16} />}
              <FaTools size={16} />
              <span className="font-semibold">{hardSkills.title}</span>
            </div>
          </motion.div>

          {showHardSkills && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {hardSkills.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`relative group cursor-pointer py-2 px-4 rounded-md mb-2 transition-all duration-300
                      ${section.title === selectedSection 
                        ? 'bg-lime-500/10 text-lime-500' 
                        : 'hover:bg-gray-800/50 text-gray-400 hover:text-white'}`}
                    onClick={() => onSelectSection(section.title)}
                  >
                    {section.title === selectedSection && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute left-0 top-0 w-1 h-full bg-lime-500"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 font-mono">{section.title}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          className="mt-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div
            className={`relative group cursor-pointer py-2 px-4 rounded-md transition-all duration-300
              ${softSkills.title === selectedSection 
                ? 'bg-lime-500/10 text-lime-500' 
                : 'hover:bg-gray-800/50 text-gray-400 hover:text-white'}`}
            onClick={() => onSelectSection(softSkills.title)}
          >
            {softSkills.title === selectedSection && (
              <motion.div
                layoutId="activeSection"
                className="absolute left-0 top-0 w-1 h-full bg-lime-500"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <div className="flex items-center gap-2 relative z-10 font-mono">
              <FaUserTie size={16} />
              <span>{softSkills.title}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}