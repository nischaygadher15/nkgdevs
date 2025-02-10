import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  let [menu, setMenu] = useState(false);

  let handleMenu = (menuStatus) => {
    let navDrawer = document.getElementById("navDrawer");
    if (navDrawer != null) {
      if (menuStatus) {
        navDrawer.style.gridTemplateRows = "1fr";
        navDrawer.style.height = "calc(100vh - 64px)";
      } else {
        navDrawer.style.gridTemplateRows = "0fr";
        navDrawer.style.height = "auto";
      }
    }
  };

  useEffect(() => {
    handleMenu(menu);
  }, [menu]);

  let closeMenu = () => setMenu(false);

  useState(() => {
    console.log(`menu Status: ${menu}`);
  });

  return (
    <div className="container max-h-16">
      {/* Navbar */}
      <nav
        className={`px-6 h-16  bg-white flex flex-wrap justify-between items-center`}
      >
        {/* Logo */}
        <div className="text-2xl">
          <p className="font-bold">{`<NKG />`}</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-evenly items-center  text-base">
          <nav
            className={`p-6 md:p-0 hidden md:flex flex-col md:flex-row items-start flex-wrap md:items-center gap-4 lg:gap-6 text-xl md:text-base`}
          >
            <a href="#home">Home</a>
            <a href="#skills">Skills</a>
            {/* <a href="#exps">Experience</a> */}
            <a href="#edu">Education</a>
            <a href="#project">Projects</a>
            <a href="#contact">Contact</a>
            {/* <FiSun className="hidden md:block text-xl cursor-pointer" /> */}
            <button className="w-1/2 md:w-auto bg-gray-900 text-white mx-auto md:mx-0 px-3 py-4 md:py-1 rounded-md">
              Download CV
            </button>
          </nav>
          <div className="md:hidden flex gap-4 text-xl">
            <FiSun className="cursor-pointer" />
            {menu ? (
              <IoMdClose
                className="cursor-pointer"
                onClick={() => setMenu(!menu)}
              />
            ) : (
              <RxHamburgerMenu
                className="cursor-pointer"
                onClick={() => setMenu(!menu)}
              />
            )}
          </div>
        </div>
      </nav>

      {/*<================================== Drawer =======================================>*/}

      <div id="navDrawer" className="bg-white">
        <div id="navDrawerContent">
          <nav className="py-6 flex flex-wrap flex-col">
            <a
              href="#home"
              className="py-4 px-6 hover:bg-gray-400"
              onClick={closeMenu}
            >
              Home
            </a>
            <a
              href="#skills"
              className="py-4 px-6 hover:bg-gray-400"
              onClick={closeMenu}
            >
              Skills
            </a>
            {/* <a
              href="#exps"
              className="py-4 px-6 hover:bg-gray-400"
              onClick={closeMenu}
            >
              Experience
            </a> */}
            <a
              href="#edu"
              className="py-4 px-6 hover:bg-gray-400"
              onClick={closeMenu}
            >
              Education
            </a>
            <a
              href="#project"
              className="py-4 px-6 hover:bg-gray-400"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="py-4 px-6 hover:bg-gray-400"
              onClick={closeMenu}
            >
              Contact
            </a>

            <button className="md:w-auto bg-gray-900 text-white p-2 md:py-1 mt-5 mx-6 rounded-lg">
              Download CV
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
