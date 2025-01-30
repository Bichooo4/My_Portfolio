import React from 'react';
import socialLinks from '@/data/socialLinks';

export default function Footer() {
    const Divider = () => <div className='h-full w-0.5 bg-gray-800'></div>;

    return (
        <footer className='bg-gray-900 border-t border-gray-800'>
            <div className='flex items-stretch h-[40px] w-full'>
                {/* Find me section */}
                <div className='flex items-center px-8 text-gray-400 hover:bg-gray-800/50 transition-colors duration-200'>
                    <span className='text-sm font-medium hover:text-gray-200 transition-colors duration-200 cursor-pointer'>
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
                            target='_blank'
                            rel='noopener noreferrer'
                            className='group flex items-center space-x-2 px-4 text-gray-400 hover:bg-gray-800/50 transition-colors duration-200'
                        >
                            <span className={`transition-colors duration-200 ${hoverClass}`}>
                                {icon}
                            </span>
                            <span className='text-sm hidden sm:block group-hover:text-gray-200 transition-colors duration-200'>
                                {label}
                            </span>
                        </a>
                        <Divider />
                    </React.Fragment>
                ))}
            </div>
        </footer>
    );
};