import { SiGmail } from 'react-icons/si';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

const socialLinks = [
    {
        id: 'whatsapp',
        href: 'https://wa.me/201220056486',
        ariaLabel: 'Visit WhatsApp',
        icon: <FaWhatsapp className='h-5 w-5' />,
        label: 'whatsapp',
        hoverClass: 'group-hover:text-green-500',
    },
    {
        id: 'linkedin',
        href: 'https://www.linkedin.com/in/bichoy-atef-5238491b2/',
        ariaLabel: 'Visit LinkedIn',
        icon: <FaLinkedin className='h-5 w-5' />,
        label: 'linkedin',
        hoverClass: 'group-hover:text-blue-500',
    },
    {
        id: 'github',
        href: 'https://github.com/Bichooo4',
        ariaLabel: 'Visit GitHub',
        icon: <FaGithub className='h-5 w-5' />,
        label: 'github',
        hoverClass: 'group-hover:text-purple-500',
    },
    {
        id: 'gmail',
        href: 'mailto:bichoyatef0@gmail.com',
        ariaLabel: 'Send Email via Gmail',
        icon: <SiGmail className='h-5 w-5' />,
        label: 'gmail',
        hoverClass: 'group-hover:text-red-500',
    },
];

export default socialLinks;