import React from "react";

function Home() {
  return (
    <section className="p-6 text-center ">
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-rose-400 to-red-400 bg-clip-text text-transparent drop-shadow-lg tracking-wide">
        PORTFOLIO
      </h1>

      <div className="flex items-center justify-center px-10 py-20 animate-slideInLeft">
        <img
          src="src\assets\front picture.jpg"
          alt="Profile"
          className="w-72 h-72 rounded-3xl shadow-xl ring-2 ring-black-300 hover:scale-105 transition duration-500"
        />
        <div className="ml-10 max-w-lg animate-slideInRight">
          <h1 className="text-4xl font-bold mb-4">Hi! I'm Muskan</h1>
          <p className="uppercase tracking-wide text-pink-600 font-semibold">
            Front-end Developer · React Enthusiast · Problem Solver
          </p>

          <p className="text-gray-700 leading-relaxed text-lg opacity-90">
            I'm a tech-driven creator exploring the world of web development. I
            enjoy crafting smooth interfaces, learning something new every day,
            and building projects that reflect both creativity and logic.
            Currently diving deeper into React and DSA, I'm working toward
            becoming a stronger and more confident developer.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Home;
