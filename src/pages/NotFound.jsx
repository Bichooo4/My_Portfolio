import React from 'react';
import { Bug, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="bg-gray-900 min-h-screen w-full flex flex-col items-center justify-center p-4">
      <div className="relative max-w-md w-full text-center">
        {/* Terminal-like Error Display */}
        <div className="relative mb-8">
          <div className="absolute -inset-1 bg-gradient-to-r from-lime-500 via-lime-300 to-lime-500 rounded-lg blur opacity-25 animate-pulse"></div>
          <div className="relative bg-gray-900 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-4 border-b border-gray-800 pb-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            
            <div className="font-mono text-left">
              <p className="text-lime-500">$ page.find("<span className="text-gray-300">{window.location.pathname}</span>")</p>
              <p className="text-red-400 mt-2">
                <Bug className="inline-block w-4 h-4 mr-2" />
                Error: Page not found
              </p>
              <p className="text-gray-500 mt-1">status: 404</p>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-500 mb-4">
          404 // Page_Not_Found
        </h1>
        <p className="text-gray-400 mb-8">
          The page you're looking for seems to have been moved, deleted, or never existed.
        </p>

        {/* Home Button */}
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 text-lime-500 hover:bg-gray-700 transition-all duration-300 group"
        >
          <Home className="w-5 h-5 mr-2 group-hover:animate-pulse" />
          <span>Return Home</span>
        </Link>

        {/* Code Comment */}
        <div className="mt-8 text-gray-500 font-mono text-sm">
          <span className="text-lime-500">// </span>
          Let's get you back on track
        </div>
      </div>
    </div>
  );
};