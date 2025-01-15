import React, { useState } from 'react';
import SkillLevel from '@/components/Skills/SkillLevel';
import SkillsSideBar from '@/components/Skills/SkillsSideBar';

export default function Skills() {
  const [selectedSection, setSelectedSection] = useState('Programming Languages'); // Default selected

  const handleSelectSection = (sectionTitle) => {
    setSelectedSection(sectionTitle);
  };

  return (
    <div className='flex h-full w-full'>
      {/* Sidebar */}
      <div className='w-[26.4%] h-full bg-navFooterpageBackground'>
        <SkillsSideBar
          onSelectSection={handleSelectSection}
          selectedSection={selectedSection}
        />
      </div>

      {/* Main Content */}
      <div className='flex-grow h-full overflow-y-auto bg-pageBackground custom-scrollbar'>
        {selectedSection && <SkillLevel selectedSection={selectedSection} />}
      </div>
    </div>
  );
}