import React from "react";
import MascotVision from "../assets/mascot_vision.png"; // use your about mascot
import { Rocket } from 'lucide-react';
import RocketVision from "../assets/rocket_vision.png"; // use your vision rocket
const events = [
    { id: 1, title: 'Roadmap to programming', description: '26.12.2025' },
    { id: 2, title: 'Industry connect program', description: '18-22 August 2025' },
    { id: 3, title: '45 days DSA CHALLENGE 2.0', description: '01 SEPT to 01 NOV 2025' },
    { id: 4, title: 'SIT Hackaverse', description: '03 & 04 April 2025' },
];
export default function Events() {
    return (
        <div className="w-11/12 mx-auto border border-amber-50 rounded-2xl mt-10 lg:mt-20 overflow-hidden" id="events">
            <p className="text-center text-[50px] md:text-[80px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0 py-8">EVENTS</p>
            <div className="flex flex-col min-h-screen p-4 md:p-8">
                <div className="relative w-full max-w-4xl mx-auto">
                    <div
                        className="relative w-full p-4 md:p-8"
                        style={{
                            minHeight: '800px',
                            backgroundImage: `radial-gradient(2px 2px at 20% 30%, white, transparent),
                            radial-gradient(2px 2px at 60% 70%, white, transparent),
                            radial-gradient(1px 1px at 50% 50%, white, transparent),
                            radial-gradient(1px 1px at 80% 10%, white, transparent),
                            radial-gradient(2px 2px at 90% 60%, white, transparent),
                            radial-gradient(1px 1px at 33% 80%, white, transparent)`,
                            backgroundSize: '100% 100%',
                        }}
                    >
                        {/* Timeline line - Left aligned */}
                        <div className="absolute left-8 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-500 opacity-60 z-0" />

                        {/* Start indicator */}
                        <div className="absolute top-4 left-8 md:left-12 transform -translate-x-1/2 z-10">
                            <div className="bg-cyan-500 rounded-full p-2 md:p-3 shadow-lg shadow-cyan-500/50">
                                <Rocket className="text-white" size={20} />
                            </div>
                        </div>

                        {/* Events Container */}
                        <div className="relative pt-20 space-y-12">
                            {events.map((event, index) => (
                                <div key={event.id} className="relative flex items-center w-full">

                                    {/* Icon on timeline */}
                                    <div className="absolute left-8 md:left-12 transform -translate-x-1/2 z-10">
                                        <img src={RocketVision} alt="Rocket Icon" className="w-8 h-8 md:w-12 md:h-12 object-contain" />
                                    </div>

                                    {/* Event Card - All on the right */}
                                    <div className="w-full pl-16 md:pl-24">
                                        <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg border-2 border-blue-400 shadow-lg p-4 md:p-6 transform hover:scale-[1.02] transition-transform duration-300">
                                            <div className="flex items-start md:items-center gap-4">
                                                <div className="bg-white rounded-lg p-2 md:p-3 flex-shrink-0 hidden md:block">
                                                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded" />
                                                </div>
                                                <div className="flex-1 text-left">
                                                    <h3 className="text-white font-bold text-lg md:text-xl mb-1">{event.title}</h3>
                                                    <p className="text-blue-200 text-sm md:text-base">{event.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
