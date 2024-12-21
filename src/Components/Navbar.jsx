import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { RiArrowLeftWideFill, RiArrowRightWideFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  let [menu, setMenu] = useState(false);
  // let expNavBar = {
  //   height: "calc(100vh - 64px)",
  //   position: "fixed",
  //   top: "64px",
  //   left: "0px",
  //   backgroundColor: "white",
  // };

  let handleMenu = () => setMenu(!menu);

  let closeMenu = () => setMenu(false);
  return (
    <div className="container px-6 h-16 bg-white flex flex-wrap justify-between items-center">
      <div className="text-2xl">
        <p className="font-bold">{`<NKG />`}</p>
      </div>
      <div className="flex flex-wrap justify-evenly items-center  text-base">
        <nav
          className={`p-6 md:p-0 md:flex flex-col md:flex-row items-start flex-wrap md:items-center gap-4 lg:gap-6 text-xl md:text-base ${
            menu ? "expNavBar flex" : "hidden"
          }`}
        >
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
          <a href="#exps" onClick={closeMenu}>
            Experience
          </a>
          <a href="#edu" onClick={closeMenu}>
            Education
          </a>
          <a href="#project" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
          <FiSun className="hidden md:block text-xl cursor-pointer" />
          <button className="w-1/2 md:w-auto bg-gray-900 text-white mx-auto md:mx-0 px-3 py-4 md:py-1 rounded-md">
            Download CV
          </button>
        </nav>
        {/* <nav
          className="fixed bg-white left-0 w-full p-6 md:p-0 flex flex-col md:flex-row items-start flex-wrap md:items-center gap-6 text-xl md:text-base"
          style={{
            height: "calc(100vh - 64px)",
            top: "64px",
          }}
        >
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#edu">Education</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

          <button className="w-full md:w-auto py-4 bg-gray-900 text-white px-3 md:py-1 rounded-md">
            Download CV
          </button>
        </nav> */}
        <div className="md:hidden flex gap-4 text-xl">
          <FiSun className="cursor-pointer" />
          <RxHamburgerMenu className="cursor-pointer" onClick={handleMenu} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
