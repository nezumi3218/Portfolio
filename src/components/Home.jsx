import React from "react";
import frontPicture from "/src/assets/front picture.jpg";
import { motion } from "framer-motion";

function Home() {
  return (
    <section className="p-6 text-center">
      <h1
        className="text-4xl sm:text-5xl md:text-7xl font-extrabold 
                     bg-gradient-to-r from-rose-400 to-red-400 
                     bg-clip-text text-transparent drop-shadow-lg tracking-wide"
      >
        PORTFOLIO
      </h1>

      {/* Main container */}
      <div
        className="flex flex-col md:flex-row items-center justify-center 
                      px-4 md:px-10 py-10 md:py-20 gap-8 md:gap-14"
      >
        <motion.div
          className="max-w-md text-center md:text-left px-2"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Image */}
          <img
            src={frontPicture}
            alt="Profile"
            className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 
                     rounded-3xl shadow-xl ring-2 ring-black-300 
                     hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* Text section */}
        <div className="max-w-md text-center md:text-left px-2">
          <motion.div
            className="max-w-md text-center md:text-left px-2"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
              Hi! I'm Muskan
            </h1>

            <p
              className="uppercase tracking-wide text-pink-600 font-semibold mb-2 
                        text-sm sm:text-base"
            >
              Front-end Developer · React Enthusiast · Problem Solver
            </p>

            <p className="text-gray-700 leading-relaxed text-base sm:text-lg opacity-90">
              I'm a tech-driven creator exploring the world of web development.
              I enjoy crafting smooth interfaces, learning something new every
              day, and building projects that reflect both creativity and logic.
              Currently diving deeper into React and DSA, I'm working toward
              becoming a stronger and more confident developer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Home;
