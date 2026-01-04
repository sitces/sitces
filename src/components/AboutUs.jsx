import React from "react";
import MascotAbout from "../assets/mascot_aboutus.png"; // use your about mascot

export default function AboutUs() {
    return (
        <div className="w-11/12 mx-auto  text-center border border-amber-50 rounded-2xl">
            <p className=" text-[80px] md:text-[110px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0">ABOUT</p>
            <div className="relative flex flex-col lg:flex-row">

                {/* LEFT TEXT */}
                <div className="max-w-4xl text-center text-left mx-auto text-xl lg:pl-15">
                    <p className="text-gray-200 leading-relaxed mb-6">
                        The <span className="text-yellow-400 font-semibold">
                            Computer Engineers’ Society (CES)
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

                    <p className="text-gray-200 leading-relaxed mb-6">
                        Guided by faculty mentors and driven by passionate students, the
                        club aims to bridge the gap between academic learning and
                        industry applications. CES fosters innovation, teamwork, and
                        problem-solving, encouraging members to explore new
                        technologies and contribute to a vibrant tech community within
                        the campus.
                    </p>
                    <p className="text-gray-200 leading-relaxed">
                        Guided by faculty mentors and driven by passionate students, the
                        club aims to bridge the gap between academic learning and
                        industry applications. CES fosters innovation, teamwork, and
                        problem-solving, encouraging members to explore new
                        technologies and contribute to a vibrant tech community within
                        the campus.
                    </p>
                </div>

                {/* RIGHT MASCOT — EXTREME RIGHT */}
                <div className="relative lg:mt-0 ml-auto flex justify-end pr-15">
                    <img
                        src={MascotAbout}
                        alt="CES Mascot"
                        className="w-60 sm:w-72 lg:w-[500px] h-auto"
                    />
                </div>

            </div>

        </div>
    );
}
