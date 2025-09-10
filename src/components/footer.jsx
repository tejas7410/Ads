import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-amber-200 text-red-700 py-6 mt-auto font-pacifico">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">

                {/* Left Section */}
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl">Gunjan Gupta</h1>
                    <p className="text-xl">Building awesome web experiences</p>
                </div>

                {/* Right Section */}
                <div className="flex flex-col md:flex-row gap-4 items-center text-sm">
                    <p>Email: <a href="mailto:contact@company.com" className="hover:underline">contact@company.com</a></p>
                    <p>Phone: <a href="tel:+911234567890" className="hover:underline">+91 1234567890</a></p>
                    <p>Location: Delhi, India</p>
                </div>

            </div>

            {/* Bottom */}
            <div className="text-center text-xs mt-4">
                &copy; {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;
