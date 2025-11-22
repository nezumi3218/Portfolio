import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="px-6 py-4 bg-rose-200 shadow-md rounded-3xl m-4">
      <div className="flex items-center justify-between">
        {/* LEFT: Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="w-10 h-10 object-contain rounded-full"
          />
          <h1 className="text-xl font-bold text-pink-700 tracking-wide">
            Muskan
          </h1>
        </div>

        {/* HAMBURGER (mobile only) */}
        <button
          className="md:hidden text-pink-700 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* RIGHT: NAV LINKS (DESKTOP) */}
        <ul className="hidden md:flex gap-8 text-lg font-medium">
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
      </div>

      {/* MOBILE MENU */}
      {open && (
        <ul className="mt-4 flex flex-col gap-4 text-lg font-medium md:hidden bg-rose-100 p-4 rounded-2xl shadow">
          <li
            onClick={() => setOpen(false)}
            className="hover:text-pink-600 cursor-pointer"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="hover:text-pink-600 cursor-pointer"
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="hover:text-pink-600 cursor-pointer"
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            onClick={() => setOpen(false)}
            className="hover:text-pink-600 cursor-pointer"
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
