import React from 'react';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const socialLinks = [
        {
            id: 'whatsapp',
            href: 'https://wa.me/201220056486',
            ariaLabel: 'Visit WhatsApp',
            icon: <FaWhatsapp className="h-5 w-5" />,
            label: 'whatsapp',
            hoverClass: 'group-hover:text-green-500',
        },
        {
            id: 'linkedin',
            href: 'https://www.linkedin.com/in/bichoy-atef-5238491b2/',
            ariaLabel: 'Visit LinkedIn',
            icon: <FaLinkedin className="h-5 w-5" />,
            label: 'linkedin',
            hoverClass: 'group-hover:text-blue-500',
        },
        {
            id: 'github',
            href: 'https://github.com/Bichooo4',
            ariaLabel: 'Visit GitHub',
            icon: <FaGithub className="h-5 w-5" />,
            label: 'github',
            hoverClass: 'group-hover:text-purple-500',
        },
        {
            id: 'gmail',
            href: 'mailto:bichoyatef0@gmail.com',
            ariaLabel: 'Send Email via Gmail',
            icon: <SiGmail className="h-5 w-5" />,
            label: 'gmail',
            hoverClass: 'group-hover:text-red-500',
        },
    ];

    const Divider = () => (
        <div className="h-full w-0.5 bg-gray-800"></div>
    );

    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="flex items-stretch h-[40px] w-full">
                {/* Find me section */}
                <div className="flex items-center px-8 text-gray-400 hover:bg-gray-800/50 transition-colors duration-200">
                    <span className="text-sm font-medium hover:text-gray-200 transition-colors duration-200 cursor-pointer">
                        _get in touch
                    </span>
                </div>

                <Divider />

                {/* Social Links */}
                {socialLinks.map(({ id, href, ariaLabel, icon, label, hoverClass }) => (
                    <React.Fragment key={id}>
                        <a
                            href={href}
                            aria-label={ariaLabel}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center space-x-2 px-4 text-gray-400 hover:bg-gray-800/50 transition-colors duration-200"
                        >
                            <span className={`transition-colors duration-200 ${hoverClass}`}>
                                {icon}
                            </span>
                            <span className="text-sm hidden sm:block group-hover:text-gray-200 transition-colors duration-200">
                                {label}
                            </span>
                        </a>
                        <Divider />
                    </React.Fragment>
                ))}

                {/* Copyright section */}
                <div className="flex items-center ml-auto px-4 text-gray-400">
                    <span className="text-sm">
                        @2024
                        <span className="hidden sm:inline"> - Made with</span>
                        <span className="text-lime-500 mx-1">❤</span>
                        <span className="hidden sm:inline">by Bichoy</span>
                    </span>
                </div>
            </div>
        </footer>
    );
};