import React from "react";
import MascotAbout from "../assets/mascot_aboutus.png";

export default function AboutUs() {
    return (
        <div className="w-11/12 mx-auto text-center border border-amber-50 rounded-2xl p-4 sm:p-6 lg:p-8">
            {/* Large "ABOUT" heading */}
            <p className=" text-[70px] md:text-[110px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0">ABOUT</p>

            {/* Content wrapper */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
                
                {/* LEFT TEXT */}
                <div className="flex-1 text-left space-y-4 sm:space-y-5 lg:space-y-6 text-base sm:text-lg lg:text-xl px-2 sm:px-4 lg:px-6">
                    <p className="text-gray-200 leading-relaxed">
                        The <span className="text-yellow-400 font-semibold">
                            Computer Engineers' Society (CES)
                        </span>{" "}
                        is the official departmental club of the Department of{" "}
                        <span className="text-yellow-400 font-semibold">
                            Computer Science and Engineering (CSE)
                        </span>{" "}
                        at{" "}
                        <span className="text-yellow-400 font-semibold">
                            Siliguri Institute of Technology (SIT)
                        </span>
                        . CES serves as a platform for students to enhance their
                        technical, creative, and leadership skills through workshops,
                        seminars, competitions, and collaborative projects.
                    </p>

                    <p className="text-gray-200 leading-relaxed">
                        Guided by faculty mentors and driven by passionate students, the
                        club aims to bridge the gap between academic learning and
                        industry applications. CES fosters innovation, teamwork, and
                        problem-solving, encouraging members to explore new
                        technologies and contribute to a vibrant tech community within
                        the campus.
                    </p>

                    <p className="text-gray-200 leading-relaxed">
                        Whether you're a coding enthusiast, a design thinker, or someone
                        eager to learn, CES welcomes all students to grow, collaborate,
                        and make an impact in the ever-evolving world of technology.
                    </p>
                </div>

                {/* RIGHT MASCOT */}
                <div className="flex-shrink-0 mx-auto lg:mx-0 lg:self-end">
                    <img
                        src={MascotAbout}
                        alt="CES Mascot"
                        className="w-48 sm:w-56 md:w-64 lg:w-80 xl:w-96 h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}