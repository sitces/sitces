import React from "react";
import MascotHome from "../assets/mascot_home.png";

export default function Home() {
  return (
    <section className="relative w-full overflow-x-hidden pt-28 pb-16 " id="home">
      <div className="w-full px-6 lg:px-0">

        <div className="flex flex-col lg:flex-row items-center">

          {/* LEFT CONTENT — CONSTRAINED */}
          <div className="max-w-5xl lg:pl-60 text-center lg:text-left">
            <h2 className="text-yellow-400 text-4xl lg:text-4xl font-medium mb-4">
              Computer Engineers’ Society
            </h2>

            <p className="text-white text-6xl lg:text-7xl font-bold leading-tight mb-6 ml-10 hidden sm:block lg:block">
              Welcomes You
            </p>

            <p className="text-white text-lg mb-2">
              Innovate. Build. Inspire.
            </p>

            <p className="text-purple-200 text-base lg:text- mb-8">
              Official Computer Science & Engineering Department Club of{" "}
              <span className="text-white font-medium primary-text-color">
                Siliguri Institute of Technology
              </span>
            </p>

            <a
              href="https://chat.whatsapp.com/GHuVDtfqKEJEwHj3rdARQc"
              className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition shadow-lg"
            >
              Join Our Community
            </a>
          </div>

          {/* RIGHT IMAGE — FLUSH TO EDGE */}
          <div className="relative mt-16 lg:mt-0 ml-auto flex justify-end hidden sm:block lg:block">
            <img
              src={MascotHome}
              alt="Mascot"
              className="w-72 sm:w-80 lg:w-[460px] h-auto"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
