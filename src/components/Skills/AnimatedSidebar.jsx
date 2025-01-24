import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSidebar({ menuItems, isOpen, setIsOpen }) {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        if (containerRef.current) {
            setDimensions({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            });
        }
    }, [containerRef]);

    return (
        <div className="relative">
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={dimensions.height}
                ref={containerRef}
                className="w-80 h-screen fixed top-0 left-0 z-50"
            >
                <motion.div
                    className="absolute top-0 left-0 bottom-0 w-full bg-[#1a1b26] shadow-xl"
                    variants={sidebarVariants}
                    style={{ originX: 0, originY: 0 }}
                />
                <Navigation menuItems={menuItems} />
                <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
            </motion.nav>
        </div>
    );
}

const Navigation = ({ menuItems }) => (
    <motion.ul
        className="list-none p-8 m-0 absolute top-24 w-full"
        variants={navVariants}
    >
        {menuItems.map((item, i) => (
            <MenuItem key={i} item={item} index={i} />
        ))}
    </motion.ul>
);

const MenuItem = ({ item, index }) => {
    const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
    const bgColors = ["bg-pink-500", "bg-purple-500", "bg-indigo-500", "bg-blue-500", "bg-violet-500"];

    return (
        <motion.li
            className="flex items-center justify-start p-0 m-0 mb-8 cursor-pointer"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={item.onClick}
        >
            <div
                className={`w-12 h-12 rounded-full mr-6 flex-none ${bgColors[index % bgColors.length]} bg-opacity-20`}
                style={{ border: `2px solid ${colors[index % colors.length]}` }}
            />
            <div className="flex flex-col">
                <span className="text-lime-500 font-mono text-lg mb-1">{item.label}</span>
            </div>
        </motion.li>
    );
};

const MenuToggle = ({ toggle, isOpen }) => (
    <button
        onClick={toggle}
        className="outline-none border-none cursor-pointer relative w-10 h-10 rounded-full bg-lime-500 flex items-center justify-center hover:bg-lime-600 transition-colors"
    >
        <svg width="20" height="20" viewBox="0 0 23 23">
            <Path
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
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
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(20px at 40px 40px)",
        transition: {
            delay: 0.2,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const navVariants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};