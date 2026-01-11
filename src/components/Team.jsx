import { useState } from "react";
import { Github, Linkedin } from "lucide-react";

import teamMembers from "../data/teamMembers";

const positions = [
  "Senior Associate Member",
  "Associate Member",
  "Junior Associate Member",

];

export default function Team() {
  const [selectedPosition, setSelectedPosition] = useState("Senior Associate Member");

  const filteredMembers =
    selectedPosition === "All"
      ? teamMembers
      : teamMembers.filter(
          (member) => member.position === selectedPosition
        );

  return (
    <section className="relative isolate min-h-screen w-11/12 mx-auto  text-center text-white px-6 py-12 pointer-events-auto text-center border border-amber-50 rounded-2xl mt-10 lg:mt-20">

            <p className=" text-[60px] md:text-[110px] lg:text-[130px] font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400/30 to-purple-500 select-none pointer-events-none z-0 text-center">Team</p>
           

      {/* POSITION FILTER */}
      <div className="relative z-30 pointer-events-auto mb-12 flex justify-center border rounded-2xl">
        {positions.map((position) => (
          <button
            type="button"
            key={position}
            onClick={() => {
              console.log("clicked:", position);
              setSelectedPosition(position);
            }}
            className={`px-5 py-2 rounded-8xl cursor-pointer 
              ${
                selectedPosition === position
                  ? "primary-text-color"
                  : ""
              }`}
          >
            {position}
          </button>
        ))}
      </div>

      {/* TEAM GRID */}
      <div className="relative z-10 grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {filteredMembers.map((member, idx) => (
          <div
            key={idx}
            className="  rounded-xl p-5 text-center transition hover:scale-[1.03]"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
            />

            <h3 className="text-lg font-semibold">
              {member.name}
            </h3>

            <p className="text-sm text-purple-400">
              {member.position}
            </p>

            <p className="text-xs text-gray-400 mb-4">
              {member.team}
            </p>

<div className="relative z-10 flex justify-center gap-6">
  {member.github && (
    <a
      href={member.github}
      target="_blank"
      rel="noreferrer"
      className="group"
      aria-label="GitHub"
    >
      <Github
        size={20}
        className="text-gray-400 transition 
                   group-hover:text-purple-400 
                   group-hover:scale-110"
      />
    </a>
  )}

  {member.linkedin && (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noreferrer"
      className="group"
      aria-label="LinkedIn"
    >
      <Linkedin
        size={20}
        className="text-gray-400 transition 
                   group-hover:text-purple-400 
                   group-hover:scale-110"
      />
    </a>
  )}
</div>

          </div>
        ))}
      </div>

    </section>
  );
}
