import React from 'react';

function Navbar() {
    return (
        <nav className="w-full bg-amber-200 backdrop-blur-md shadow-lg font-pacifico">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Left: Name */}
                    <div className="flex-shrink-0 text-2xl text-orange-800">
                        Gunjan Gupta
                    </div>

                    {/* Right: Menu */}
                    <div className="hidden md:flex space-x-8 text-2xl">
                        <button className="text-orange-700 hover:text-orange-900 transition-colors duration-300">
                            About
                        </button>
                        <button className="text-orange-700  hover:text-orange-900 transition-colors duration-300">
                            Experience
                        </button>
                        <button className="text-orange-700 hover:text-red-700 transition-colors duration-300">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
