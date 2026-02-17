import React from "react";
import MascotVision from "../assets/mascot_vision.png"; // use your about mascot

export default function Vision() {
    return (
        <div className="w-11/12 mx-auto text-center border border-amber-50 rounded-2xl mt-10 lg:mt-20">
            <p className=" text-[70px] md:text-[110px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0">VISION</p>
            <div className="relative flex flex-col lg:flex-row mb-7">
                <div className="relative lg:mt-0 ml-auto flex justify-end pr-15">
                    <img
                        src={MascotVision}
                        alt="CES Mascot"
                        className="w-60 sm:w-72 lg:w-[550px] h-auto"
                    />
                </div>
                <div className="max-w-5xl  text-left mx-auto text-xl lg:pl-10">
                    <div className="w-full max-w-6xl flex justify-center">

                        {/* GRID handles only the content */}
                        <div className="flex flex-col">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-15 p-2 lg:p-15 mx-auto">
                                <div className="rounded-xl border border-purple-400 p-6 text-white w-70">
                                    <p className="text-sm text-purple-100">
                                        <span className="primary-text-color">Empower Skills</span> by bridging academic learning with real-world engineering practices, tools, and industry workflows.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-purple-400 p-6 text-white w-70">
                                    <p className="text-sm text-purple-100">
                                        <span className="primary-text-color">Lead with Collaboration</span> through teamwork-driven projects that strengthen leadership, communication, and problem-solving skills.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-15 p-2 mx-auto">
                                <div className="rounded-xl border border-purple-400 p-6 text-white w-70">
                                    <p className="text-sm text-purple-100">
                                        <span className="primary-text-color">Inspire Innovation</span> by encouraging creative thinking, experimentation, and building solutions beyond textbook approaches.
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-15 p-2 lg:p-15 mx-auto">
                                <div className="rounded-xl border border-purple-400 p-6 text-white w-70">
                                    <p className="text-sm text-purple-100">
                                        <span className="primary-text-color">Explore Emerging Tech</span> including AI, data science, cloud, and modern web technologies shaping the future of engineering.
                                    </p>
                                </div>
                                <div className="rounded-xl border border-purple-400 p-6 text-white w-70">
                                    <p className="text-sm text-purple-100">
                                        <span className="primary-text-color">Create Impact</span> by applying technology to solve real problems, drive social change, and build meaningful digital products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
}
