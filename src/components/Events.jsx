import React from "react";
import MascotVision from "../assets/mascot_vision.png"; // use your about mascot
import { Rocket } from 'lucide-react';
import RocketVision from "../assets/rocket_vision.png"; // use your vision rocket
const events = [
    { id: 1, title: 'Event 6', side: 'right', description: 'Final Output' },
    { id: 2, title: 'Event 1', side: 'left', description: 'Initial Process' },
    { id: 3, title: 'Event 2', side: 'right', description: 'Data Processing' },
    { id: 4, title: 'Event 3', side: 'left', description: 'Validation' },
    { id: 5, title: 'Event 4', side: 'right', description: 'Transformation' },
    { id: 6, title: 'Event 5', side: 'left', description: 'Storage' },

];
export default function Events() {
    return (
        <div className="w-11/12 mx-auto  text-center border border-amber-50 rounded-2xl mt-10 lg:mt-20">
            <p className=" text-[80px] md:text-[110px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0">EVENTS</p>
            <div className="flex items-center justify-center min-h-screen  p-8">
                <div className="relative w-full max-w-2xl">
                    <div
                        className="relative w-full p-8"
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
                        {/* Center flow line */}
                        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 via-red-400 to-red-500 opacity-60 transform -translate-x-1/2 z-0" />

                        {/* Start indicator */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
                            <div className="bg-cyan-500 rounded-full p-3 shadow-lg shadow-cyan-500/50">
                                <Rocket className="text-white" size={24} />
                            </div>
                        </div>

                        {/* Events */}
                        <div className="relative pt-20 space-y-12">
                            {events.map((event, index) => (
                                <div key={event.id} className="relative flex items-center">
                                    {event.side === 'left' ? (
                                        <>
                                            {/* Left side event */}
                                            <div className="w-5/12 pr-8">
                                                <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg border-2 border-blue-400 shadow-lg p-6 transform hover:scale-105 transition-transform">
                                                    <div className="flex items-center gap-3">
                                                        <div className="bg-white rounded-lg p-3 flex-shrink-0">
                                                            <div className="w-8 h-8 bg-blue-600 rounded" />
                                                        </div>
                                                        <div className="flex-1">
                                                            <h3 className="text-white font-bold text-lg">{event.title}</h3>
                                                            <p className="text-blue-200 text-sm">{event.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Center node */}
                                            <img className="absolute left-1/2 transform -translate-x-1/2 z-10" src={RocketVision} alt="Rocket Icon" width={50} height={50} />

                                            <div className="w-7/12" />
                                        </>
                                    ) : (
                                        <>
                                            <div className="w-7/12" />

                                            <img className="absolute left-1/2 transform -translate-x-1/2 z-10" src={RocketVision} alt="Rocket Icon" width={50} height={50} />

                                            <div className="w-5/12 pl-8">
                                                <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-lg border-2 border-blue-400 shadow-lg p-6 transform hover:scale-105 transition-transform">
                                                    <div className="flex items-center gap-3">
                                                        <div className="flex-1">
                                                            <h3 className="text-white font-bold text-lg text-right">{event.title}</h3>
                                                            <p className="text-blue-200 text-sm text-right">{event.description}</p>
                                                        </div>
                                                        <div className="bg-white rounded-lg p-3 flex-shrink-0">
                                                            <div className="w-8 h-8 bg-blue-600 rounded" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
