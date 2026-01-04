import React from 'react'
import CESLogo from '../assets/ces-logo-main.png';
import SITLogo from '../assets/sit-logo-main.png';
export default function Navbar() {
    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl bg-white/90 backdrop-blur-md rounded-full px-8 py-3 flex justify-between items-center shadow-lg text-black">
            <div className="flex items-center gap-2">
                <img src={SITLogo} alt="SIT Logo" className="w-8 h-8 rounded-full" />
                |
                <img src={CESLogo} alt="CES Logo" className="w-8 h-8 rounded-full" />
                <p className='text-lg '>Computer Engineers' Society</p>
            </div>
            <div className="hidden md:flex gap-6 text-[11px] font-bold uppercase tracking-wider">
                {['Home', 'About Us', 'Events', 'Our Team', 'Gallery', 'FAQ'].map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-cyan-600 transition-colors">{item}</a>
                ))}
            </div>
        </nav>
    )
}
