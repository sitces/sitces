import React from "react";
import Top1_1 from "../assets/memories/top1-1.jpg";
import Top2_1 from "../assets/memories/top2-1.jpg";
import Top2_2 from "../assets/memories/top2-2.jpg";
export default function Team() {
    return (
        <div className="w-11/12 mx-auto  text-center border border-amber-50 rounded-2xl mt-10 lg:mt-20" id="memories">
            <p className=" text-[45px] md:text-[110px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0">MEMORIES</p>
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6 mb-10">
                    <img src={Top1_1} alt="Memory 1" className="w-full"/>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
                    <img src={Top2_1} alt="Memory 1" className="w-full"/>
                    <img src={Top2_2} alt="Memory 1" className="w-full"/>
                </div>
            </div>
        </div>
    );
}
