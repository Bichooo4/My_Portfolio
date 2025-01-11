import React from 'react';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
    const socialLinks = [
        {
            href: 'https://wa.me/201220056486',
            ariaLabel: 'Visit WhatsApp',
            icon: <FaWhatsapp className="h-8 w-8" />,
            hoverClass: 'hover:text-green-500',
        },
        {
            href: 'https://www.linkedin.com/in/bichoy-atef-5238491b2/',
            ariaLabel: 'Visit LinkedIn',
            icon: <FaLinkedin className="h-8 w-8" />,
            hoverClass: 'hover:text-blue-600',
        },
        {
            href: 'https://github.com/Bichooo4',
            ariaLabel: 'Visit GitHub',
            icon: <FaGithub className="h-8 w-8" />,
            hoverClass: 'hover:text-white',
        },
        {
            href: 'mailto:bichoyatef0@gmail.com',
            ariaLabel: 'Send Email via Gmail',
            icon: <SiGmail className="h-8 w-8" />,
            hoverClass: 'hover:text-red-500',
        },
    ];

    const Divider = () => <div className="h-full w-0.5 sm:w-1 bg-pageBackground"></div>;

    return (
        <footer className="bg-navFooterpageBackground">
            <div className="flex items-center justify-start h-[40px] sm:h-[45px] w-full">

                {/* Footer Text */}
                <p className="flex justify-start items-center text-lg text-gray-500 hover:text-white cursor-pointer sm:w-[170px] w-[140px] ml-2 sm:ml-6">
                    _get in touch
                </p>

                {/* Divider */}
                <Divider />

                {/* Social Media Links */}
                {socialLinks.map(({ href, ariaLabel, icon, hoverClass }, index) => (
                    <React.Fragment key={index}>
                        <a
                            className={`flex justify-center items-center text-gray-500 ${hoverClass} w-12`}
                            aria-label={ariaLabel}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {icon}
                        </a>
                        <Divider />
                    </React.Fragment>
                ))}
            </div>
        </footer>
    );
};