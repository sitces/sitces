import React, { useState } from 'react';
import CESLogo from '../assets/ces-logo-main.png';
import SITLogo from '../assets/sit-logo-main.png';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = ['Home', 'About Us', 'Events', 'Our Team', 'Gallery', 'FAQ'];

    return (
        <>
            {/* Desktop & Tablet Navbar */}
            <nav className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-6xl bg-white/90 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 flex justify-between items-center shadow-lg text-black">
                
                {/* Logo Section */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                    <img src={SITLogo} alt="SIT Logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
                    <span className="text-gray-400 sm:inline">|</span>
                    <img src={CESLogo} alt="CES Logo" className="w-6 h-6 sm:w-8 sm:h-8 rounded-full" />
                    <p className="text-xs sm:text-sm lg:text-base font-semibold ml-1 truncate max-w-[120px] sm:max-w-none">
                        <span className="inline">CES</span>
                    </p>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden md:flex gap-4 lg:gap-6 text-[10px] lg:text-[11px] font-bold uppercase tracking-wider">
                    {navItems.map((item) => (
                        <a 
                            key={item} 
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                            className="hover:text-cyan-600 transition-colors whitespace-nowrap"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center items-center text-black"
                    aria-label="Toggle menu"
                >
                    <span className={`w-5 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}>|</span>
                    <span className={`w-5 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}>|</span>
                    <span className={`w-5 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}>|</span>
                </button>
            </nav>

            {/* Mobile Menu Dropdown */}
            <div className={`fixed top-16 sm:top-20 left-1/2 -translate-x-1/2 z-40 w-[95%] sm:w-[90%] max-w-md bg-white/95 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300 md:hidden ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
                <div className="flex flex-col p-4 gap-2">
                    {navItems.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-black font-semibold text-sm py-3 px-4 rounded-lg hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 md:hidden"
                ></div>
            )}
        </>
    );
}