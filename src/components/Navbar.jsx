import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-10 py-5 bg-rose-200 shadow-md rounded-4xl">
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src={logo} // put your logo file here
          alt="Logo"
          className="w-12 h-12 object-contain rounded-full"
        />
        <h1 className="text-xl font-bold text-pink-700 tracking-wide">
          Muskan
        </h1>
      </div>

      {/* RIGHT: Nav Links */}
      <ul className="flex gap-8 text-lg font-medium">
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="hover:text-pink-600 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>

    // <nav className=" p-4 flex justify-end gap-6  bg-red-400">
    //   <Link to="/" className="hover:bg-red-300 p-2 rounded-2xl">
    //     Home
    //   </Link>
    //   <Link to="/about" className="hover:bg-red-300 p-2 rounded-2xl">
    //     About
    //   </Link>
    //   <Link to="/projects" className="hover:bg-red-300 p-2 rounded-2xl">
    //     Projects
    //   </Link>
    //   <Link to="/contact" className="hover:bg-red-300 p-2 rounded-2xl">
    //     Contact
    //   </Link>
    // </nav>
  );
}
export default Navbar;
