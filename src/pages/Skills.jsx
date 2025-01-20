import React, { useState, useEffect } from 'react';
import SkillLevel from '@/components/Skills/SkillLevel'; // Component to render skill levels based on the selected section
import SkillsSideBar from '@/components/Skills/SkillsSideBar'; // Sidebar component for selecting skill sections (desktop view)
import AnimatedSidebar from '@/components/Skills/AnimatedSidebar'; // Animated sidebar component for mobile view
import { hardSkills, softSkills, skillLevels } from '@/data/skills'; // Importing data for skills (hard skills, soft skills, and their levels)

export default function Skills() {
  // State to track if the sidebar is open (mobile view)
  const [isOpen, setIsOpen] = useState(false);

  // State to track if the current device screen is mobile-sized
  const [isMobile, setIsMobile] = useState(false);

  // Combining hard and soft skills into sections for display
  const sections = [...hardSkills.sections, { title: softSkills.title }];

  // State to track the currently selected section (default: first section of hard skills)
  const [selectedSection, setSelectedSection] = useState(hardSkills.sections[0].title);

  // Create menu items for the sidebar (both desktop and mobile), mapping each section to a clickable menu item
  const menuItems = sections.map((section) => ({
    label: section.title, // Label for the menu item (section title)
    onClick: () => handleSelectSection(section.title), // Function to handle section selection
  }));

  // Function to handle section selection; updates the selected section and closes the sidebar (if mobile)
  const handleSelectSection = (sectionTitle) => {
    setSelectedSection(sectionTitle); // Update the selected section
    setIsOpen(false); // Close the sidebar (mobile only)
  };

  // Effect to check if the screen size is mobile-sized (width <= 768px)
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Update `isMobile` state based on screen width
    };

    checkIfMobile(); // Run the check initially on component mount
    window.addEventListener('resize', checkIfMobile); // Add event listener for window resize

    return () => window.removeEventListener('resize', checkIfMobile); // Cleanup event listener on component unmount
  }, []);

  return (
    <div className='flex h-full w-full'> {/* Main container for the Skills page */}
      {/* Sidebar for Desktop */}
      {!isMobile && ( // Render this sidebar only if the screen is not mobile-sized
        <div className="w-[26.5%] h-full bg-navFooterpageBackground"> {/* Sidebar styling */}
          <SkillsSideBar
            onSelectSection={handleSelectSection} // Pass the section selection handler to the sidebar
            selectedSection={selectedSection} // Pass the currently selected section to the sidebar
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow h-full overflow-y-auto bg-pageBackground md:p-6 p-4 custom-scrollbar"> {/* Main content container */}
        {isMobile && ( // Render this block only if the screen is mobile-sized
          <div className="sticky top-0 z-50 mb-4"> {/* Sticky container for the mobile header */}
            <div className="h-24 bg-gradient-to-r from-navFooterpageBackground via-pageBackground to-navFooterpageBackground backdrop-blur-lg rounded-2xl border border-gray-400 shadow-xl p-4 relative"> {/* Styling for the mobile header */}

              {/* Menu Toggle Button Container */}
              <div className="absolute left-4">
                <AnimatedSidebar
                  menuItems={menuItems} // Pass the menu items to the animated sidebar
                  isOpen={isOpen} // Pass the sidebar open/close state
                  setIsOpen={setIsOpen} // Pass the function to toggle the sidebar state
                />
              </div>

              {/* Section Title */}
              <h1 className="text-2xl font-mono text-center text-lime-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {selectedSection} {/* Display the currently selected section title */}
              </h1>
            </div>
          </div>
        )}

        {/* Skill Level Content */}
        {selectedSection && <SkillLevel selectedSection={selectedSection} />} {/* Render the SkillLevel component with the selected section */}
      </div>
    </div>
  );
};