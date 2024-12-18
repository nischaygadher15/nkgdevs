import React from "react";
import { FiSun } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="w-full h-16 flex flex-wrap justify-between items-center">
      <div className="text-2xl">
        <p>{`<NKG />`}</p>
      </div>
      <div className="flex flex-wrap justify-evenly items-center text-base">
        <nav className="hidden sm:flex flex-wrap items-center gap-6">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#edu">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <FiSun className="text-xl cursor-pointer" />
          <button className="bg-gray-900 text-white px-3 py-1 rounded-md">
            Download CV
          </button>
        </nav>

        <RxHamburgerMenu className="sm:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
