import React from 'react';

function Navbar() {
    return (
        <nav className="w-full bg-black backdrop-blur-md shadow-lg font-fredoka">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Left: Name */}
                    <div className="flex-shrink-0 text-2xl text-orange-500">
                        Gunjan Gupta
                    </div>

                    {/* Right: Menu */}
                    <div className="hidden md:flex space-x-8 text-2xl">
                        <button className="text-orange-500 hover:text-orange-300 transition-colors duration-300">
                            About
                        </button>
                        <button className="text-orange-500  hover:text-orange-300 transition-colors duration-300">
                            Experience
                        </button>
                        <button className="text-orange-500 hover:text-red-300 transition-colors duration-300">
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
