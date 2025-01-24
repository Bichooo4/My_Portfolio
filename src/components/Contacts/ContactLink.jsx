import React from "react";

export default function ContactLink({
  platform,
  handle,
  href,
  icon,
  color = "group-hover:text-gray-500",
  tooltip = `Contact me on ${platform}`,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={tooltip}
      className="group p-6 bg-gray-800/50 rounded-lg border border-gray-700 
                 hover:border-lime-500 transition-all duration-300 ease-in-out 
                 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-lime-500/20
                 relative overflow-hidden"
    >
      <div className="flex items-center space-x-4">
        <div className={`text-gray-400 ${color} transition-colors duration-300 ease-in-out`}>
          {icon}
        </div>
        <div className="flex-1">
          <div className="text-yellow-500 group-hover:text-lime-500 text-sm mb-1 transition-colors duration-300">
            // {platform}
          </div>
          <div className="text-white group-hover:text-gray-300 font-medium transition-colors duration-300">
            {handle}
          </div>
        </div>
      </div>
    </a>
  );
};