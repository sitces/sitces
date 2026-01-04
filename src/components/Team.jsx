import React from "react";
import MascotVision from "../assets/mascot_vision.png";
import { Rocket } from 'lucide-react';
import RocketVision from "../assets/rocket_vision.png";
const events = [
    { id: 1, title: 'Event 6', side: 'right', description: 'Final Output' },
    { id: 2, title: 'Event 1', side: 'left', description: 'Initial Process' },
    { id: 3, title: 'Event 2', side: 'right', description: 'Data Processing' },
    { id: 4, title: 'Event 3', side: 'left', description: 'Validation' },
    { id: 5, title: 'Event 4', side: 'right', description: 'Transformation' },
    { id: 6, title: 'Event 5', side: 'left', description: 'Storage' },

];
export default function Team() {
    return (
        <div className="w-11/12 mx-auto  text-center border border-amber-50 rounded-2xl mt-10 lg:mt-20">
            <p className=" text-[80px] md:text-[110px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0">OUR TEAM</p>
        
        </div>
    );
}
