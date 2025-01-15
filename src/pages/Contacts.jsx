import React from "react";
import { SiGmail } from "react-icons/si";
import ContactLink from "@/components/Contacts/ContactLink";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contacts() {
    const contactLinks = [
        {
            platform: "whatsapp",
            handle: "+20 1220056486",
            href: "https://wa.me/201220056486",
            icon: <FaWhatsapp className="w-6 h-6" />,
            color: "hover:text-green-500",
        },
        {
            platform: "linkedin",
            handle: "Bichoy Atef",
            href: "https://www.linkedin.com/in/bichoy-atef-5238491b2/",
            icon: <FaLinkedin className="w-6 h-6" />,
            color: "hover:text-blue-500",
        },
        {
            platform: "gmail",
            handle: "bichoyatef0@gmail.com",
            href: "mailto:bichoyatef0@gmail.com",
            icon: <SiGmail className="w-6 h-6" />,
            color: "hover:text-red-500",
        },
        {
            platform: "github",
            handle: "Bichoy Atef",
            href: "https://github.com/BichoyAtech",
            icon: <FaGithub className="w-6 h-6" />,
            color: "hover:text-purple-500",
        },
    ];

    return (
        <div className="bg-pageBackground h-full w-full flex flex-col items-center justify-center px-4 py-16">
            <div className="relative z-10 w-full max-w-4xl">
                {/* Header Section */}
                <div className="mb-6 md:mb-16 text-center">
                    <h1 className="text-lime-500 text-4xl md:text-7xl md:mt-7 mt-32 mb-5 font-bold tracking-tight">
            // GET_IN_TOUCH
                    </h1>
                    <div className="h-1 w-16 md:w-32 bg-lime-500 mx-auto mb-8"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                        If you have an idea for a website or mobile application, feel free to reach out. I'd be delighted to discuss your vision and explore how we can bring it to life together. Let's connect and turn your ideas into reality!
                    </p>
                </div>

                {/* Contact Links Section */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-x-10 w-full max-w-2xl mx-auto">
                    {contactLinks.map((link, index) => (
                        <ContactLink key={index} {...link} />
                    ))}
                </div>

                {/* Footer Section */}
                <div className="md:mt-14 mt-6 text-center text-gray-400">
                    <p className="text-sm">
                        <span className="text-lime-500">&lt;</span>
                        Let&apos;s create something amazing together
                        <span className="text-lime-500">/&gt;</span>
                    </p>
                </div>
            </div>
        </div>
    );
};