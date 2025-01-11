import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    const navLinks = [
        { to: '/', label: '_hello' },
        { to: '/about', label: '_about me' },
        { to: '/skills', label: '_skills' },
        { to: '/projects', label: '_projects' },
        { to: '/contacts', label: '_contacts' },
    ];

    const getLinkStyle = (isActive) =>
        `flex items-center justify-center h-full sm:w-[200px] w-[75px] text-sm sm:text-base ${isActive ? 'text-white border-t-4 border-red-500' : 'text-gray-500 hover:text-white border-t-4 border-pageBackground'
        }`;

    const Divider = () => <div className="h-full w-0.5 sm:w-1 bg-pageBackground"></div>;

    return (
        <nav className="bg-navFooterpageBackground overflow-x-auto whitespace-nowrap">
            <div className="flex items-center justify-start h-[35px] sm:h-[45px] w-full">
                {navLinks.map(({ to, label }) => (
                    <React.Fragment key={to}>
                        <NavLink
                            to={to}
                            className={({ isActive }) => getLinkStyle(isActive)}
                            aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
                        >
                            {label}
                        </NavLink>
                        <Divider />
                    </React.Fragment>
                ))}
                <div className="flex-grow h-[35px] sm:h-[45px] border-t-4 border-pageBackground"></div>
            </div>
        </nav>
    );
};