import React from 'react';

function Navbar() {
    return (
        <nav className="w-full bg-yellow-200 backdrop-blur-md shadow-md fixed top-0 left-0 z-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Left: Name */}
                    <div className="flex-shrink-0 text-2xl font-bold text-orange-600">
                        Gunjan Gupta
                    </div>

                    {/* Right: Menu */}
                    <div className="hidden md:flex space-x-8">
                        <button className="text-orange-400 font-bold hover:text-orange-700 transition-colors duration-300">About</button>
                        <button className="text-orange-400 font-bold hover:text-orange-700 transition-colors duration-300">Experience</button>
                        <button className="text-orange-400 font-bold hover:text-red-700 transition-colors duration-300">Contact</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;