import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillLevel from '@/components/Skills/SkillLevel';
import SkillsSideBar from '@/components/Skills/SkillsSideBar';
import AnimatedSidebar from '@/components/Skills/AnimatedSidebar';
import { hardSkills, softSkills } from '@/data/skills';

export default function Skills() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sections = [...hardSkills.sections, { title: softSkills.title }];
  const [selectedSection, setSelectedSection] = useState(hardSkills.sections[0].title);

  const menuItems = sections.map((section) => ({
    label: section.title,
    onClick: () => handleSelectSection(section.title),
  }));

  const handleSelectSection = (sectionTitle) => {
    setSelectedSection(sectionTitle);
    setIsOpen(false);
  };

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth <= 768);
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <div className="flex h-full w-full bg-gray-900">
      {/* Desktop Sidebar */}
      {!isMobile && (
        <motion.div
          initial={{ x: -300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[26.5%] h-full border-r border-gray-800"
        >
          <SkillsSideBar
            onSelectSection={handleSelectSection}
            selectedSection={selectedSection}
          />
        </motion.div>
      )}

      {/* Main Content */}
      <div className="flex-grow h-full overflow-y-auto bg-gray-900 md:p-8 p-4 custom-scrollbar">
        {/* Mobile Header */}
        {isMobile && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="sticky top-0 z-50 mb-6"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-lime-500 to-emerald-500 rounded-lg blur opacity-25"></div>
              <div className="relative h-24 bg-gray-900 rounded-lg border border-gray-800 shadow-xl p-4 flex items-center">
                <div className="flex items-center justify-between w-full px-4">
                  <AnimatedSidebar
                    menuItems={menuItems}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                  />
                  <motion.h1
                    key={selectedSection}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-mono text-lime-500 flex-1 text-center"
                  >
                    {selectedSection}
                  </motion.h1>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Skills Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {selectedSection && <SkillLevel selectedSection={selectedSection} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}