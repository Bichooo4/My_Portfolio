import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

export default function AnimatedSidebar({ menuItems, isOpen, setIsOpen, selectedSection }) {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight,
            });
        }
    }, [isOpen]);

    return (
        <div className="relative z-50">
            <motion.nav
                initial={false}
                animate={isOpen ? 'open' : 'closed'}
                custom={dimensions.height}
                ref={containerRef}
                className="absolute top-0 left-0 w-72 h-[calc(100vh-12rem)] pointer-events-auto"
            >
                {/* Animated background – do not block pointer events */}
                <motion.div
                    className="absolute top-0 left-0 bottom-0 w-full bg-[#1a1b26] shadow-xl rounded-r-lg"
                    variants={sidebarVariants}
                    style={{ originX: 0, originY: 0, pointerEvents: 'none' }}
                />
                <Navigation menuItems={menuItems} isOpen={isOpen} />
                <div className="absolute top-3 -left-1/2 flex items-center gap-4 z-50">
                    <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
                    {!isOpen && (
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-lime-500 font-mono text-lg"
                        >
                            {selectedSection}
                        </motion.span>
                    )}
                </div>
            </motion.nav>
        </div>
    );
}

const Navigation = ({ menuItems, isOpen }) => (
    <motion.ul
        className="list-none p-8 pt-24 m-0 absolute top-0 w-full"
        variants={navVariants}
        animate={isOpen ? 'open' : 'closed'}
    >
        {menuItems.map((item, i) => (
            <MenuItem key={i} item={item} index={i} />
        ))}
    </motion.ul>
);

const MenuItem = ({ item, index }) => {
    const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];
    const bgColors = ['bg-pink-500', 'bg-purple-500', 'bg-indigo-500', 'bg-blue-500', 'bg-violet-500'];

    return (
        <motion.li
            className="flex items-center justify-start p-0 m-0 mb-6 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                item.onClick();
            }}
        >
            <div
                className={`w-10 h-10 rounded-full mr-4 flex-none ${bgColors[index % bgColors.length]} bg-opacity-20`}
                style={{ border: `2px solid ${colors[index % colors.length]}` }}
            />
            <div className="flex flex-col">
                <span className="text-lime-500 font-mono text-base">{item.label}</span>
            </div>
        </motion.li>
    );
};

const MenuToggle = ({ toggle, isOpen }) => (
    <button
        onClick={toggle}
        className="outline-none border-none cursor-pointer relative w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center hover:bg-lime-600 transition-colors"
    >
        <svg width="16" height="16" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: 'M 2 2.5 L 20 2.5' },
                    open: { d: 'M 3 16.5 L 17 2.5' },
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: 'M 2 16.346 L 20 16.346' },
                    open: { d: 'M 3 2.5 L 17 16.346' },
                }}
            />
        </svg>
    </button>
);

const Path = ({ variants, transition, d }) => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="white"
        strokeLinecap="round"
        d={d}
        variants={variants}
        transition={transition}
    />
);

const sidebarVariants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 32px 32px)`,
        transition: {
            type: 'spring',
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: 'circle(16px at 32px 32px)',
        transition: {
            delay: 0.2,
            type: 'spring',
            stiffness: 400,
            damping: 40,
        },
    },
};

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 },
        },
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 },
        },
    },
};