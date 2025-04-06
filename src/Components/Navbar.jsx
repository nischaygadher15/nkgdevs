import React, { useEffect, useState } from "react";
import { FiSun } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import resume from "../assets/MERN_Nkg_Resume.pdf";
import { FaMoon } from "react-icons/fa";

const Navbar = ({ data }) => {
  let [menu, setMenu] = useState(false);

  let navLinkStyle =
    "px-2 py-1 rounded-md hover:text-[#70E40B] hover:bg-[#eff0f0]";

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

  return (
    <div className="container max-h-16">
      {/* Navbar */}
      <nav
        className={`px-6 h-16 bg-white dark:bg-black flex justify-between items-center`}
      >
        {/* Logo */}
        <div className="text-2xl">
          <p className="font-bold text-[#70E40B] text-nowrap">{`<NKG />`}</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-evenly items-center text-base">
          <nav
            className={`p-6 md:p-0 hidden lg:flex flex-col md:flex-row items-start md:items-center gap-4 text-xl dark:text-white  md:text-base`}
          >
            <a href="#home" className={`${navLinkStyle}`}>
              Home
            </a>
            <a href="#skills" className={`${navLinkStyle}`}>
              Skills
            </a>
            <a href="#exps" className={`${navLinkStyle}`}>
              Experience
            </a>
            <a href="#edu" className={`${navLinkStyle}`}>
              Education
            </a>
            <a href="#project" className={`${navLinkStyle}`}>
              Projects
            </a>
            <a href="#contact" className={`${navLinkStyle}`}>
              Contact
            </a>
            {/* <FiSun className="hidden md:block text-xl cursor-pointer" /> */}
            <a
              href={resume}
              className="md:w-auto bg-gray-900 dark:bg-white dark:hover:bg-[#70E40B] dark:hover:text-white text-white dark:text-black p-2 md:py-1 rounded-lg"
              target="_black"
              download="NKGresume"
            >
              Download CV
            </a>
          </nav>
          <div className="flex gap-3 text-xl">
            <button
              type="button"
              className="p-2 ms-4 dark:text-white outline-none"
              onClick={() => {
                data.setDarkTheme(!data.darkTheme);
              }}
            >
              {data.darkTheme ? <FiSun /> : <FaMoon />}
            </button>

            <button
              className="p-2 lg:hidden outline-none"
              onClick={() => setMenu(!menu)}
            >
              {menu ? (
                <IoMdClose className="cursor-pointer" />
              ) : (
                <RxHamburgerMenu className="cursor-pointer" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/*<================================== Drawer =======================================>*/}

      <div id="navDrawer" className="absolute top-16 left-0 bg-white w-full">
        <div id="navDrawerContent">
          <nav className="py-6 flex flex-wrap flex-col items-center">
            <a
              href="#home"
              className="py-4 px-6 hover:bg-gray-400 text-xl font-base"
              onClick={closeMenu}
            >
              Home
            </a>

            <a
              href="#skills"
              className="py-4 px-6 hover:bg-gray-400 text-xl font-base"
              onClick={closeMenu}
            >
              Skills
            </a>

            <a
              href="#exps"
              className="py-4 px-6 hover:bg-gray-400 text-xl font-base"
              onClick={closeMenu}
            >
              Experience
            </a>

            <a
              href="#edu"
              className="py-4 px-6 hover:bg-gray-400 text-xl font-base"
              onClick={closeMenu}
            >
              Education
            </a>
            <a
              href="#project"
              className="py-4 px-6 hover:bg-gray-400 text-xl font-base"
              onClick={closeMenu}
            >
              Projects
            </a>

            <a
              href="#contact"
              className="py-4 px-6 hover:bg-gray-400 text-xl font-base"
              onClick={closeMenu}
            >
              Contact
            </a>

            <a
              href={resume}
              className="md:w-auto bg-gray-900 text-white p-3 md:py-2 mt-5 mx-6 rounded-lg"
              target="_black"
              download="NKGresume"
            >
              Download CV
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
