import React, { useEffect } from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaCircle,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import devPic1 from "../assets/nischay1.jpg";
import devPic2 from "../assets/nischay2.jpg";
import devPic3 from "../assets/nischay3.jpg";
import devPic4 from "../assets/nischay4.jpg";
import { FiGithub } from "react-icons/fi";
import { ReactTyped } from "react-typed";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Home = () => {
  useGSAP(() => {
    let ss = gsap.timeline({ repeat: -1 });
    ss.to("#imgTrain", {
      x: "-400%",
      duration: 20,
    });
  });
  return (
    <section
      className="min-h-screen pt-24 flex flex-col sm:flex-row justify-center items-center"
      id="home"
    >
      {/* <============== Image File ============> */}
      <div className="order-1 sm:order-2 w-full sm:w-2/5 flex flex-wrap justify-center items-center mb-10">
        <div className="relative px-4 sm:p-0 flex justify-center w-3/5 sm:w-4/5 ld:w-3/5 sm:h-3/5">
          <div className="relative w-full sm:h-80 flex overflow-hidden">
            <div id="imgTrain" className="flex flex-nowrap">
              <img
                src={devPic1}
                alt="Dev Pic"
                id="userPic1"
                className="min-w-full h-full"
              />

              <img
                src={devPic2}
                alt="Dev Pic"
                id="userPic2"
                className="min-w-full h-full"
              />

              <img
                src={devPic3}
                alt="Dev Pic"
                id="userPic3"
                className="min-w-full h-full"
              />

              <img
                src={devPic4}
                alt="Dev Pic"
                id="userPic4"
                className="min-w-full h-full"
              />

              <img
                src={devPic1}
                alt="Dev Pic"
                id="userPic1"
                className="min-w-full h-full"
              />

              <img
                src={devPic2}
                alt="Dev Pic"
                id="userPic2"
                className="min-w-full h-full"
              />
            </div>
          </div>
          <div className="absolute top-4 sm:left-4 w-full h-full bg-gray-400 -z-10"></div>
        </div>
      </div>

      {/* <============== Introduction Text ============> */}
      <div className="order-2 sm:order-1 w-full sm:w-3/5 overflow-hidden flex flex-col flex-wrap justify-center">
        <p
          className="max-w-full flex flex-col lg:flex-row text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
          id="typedAnimation"
        >
          <span className="text-nowrap text-center sm:text-left">
            &#128591; Hi,&nbsp;
          </span>
          <ReactTyped
            strings={[
              "I'm Nischay",
              "I'm Full Stack Developer",
              "I Love Coding.",
            ]}
            typeSpeed={70}
            backSpeed={50}
            attr="value"
            loop
          >
            <input
              type="text"
              className="outline-none max-w-full text-center sm:text-left bg-white"
              disabled
            />
          </ReactTyped>
        </p>
        <p className="text-wrap">
          I am a passionate React Developer with expertise in crafting dynamic,
          scalable, and user-centric web applications. I specialize in both
          front-end development, seamlessly bridging the gap between design and
          functionality.
        </p>
        <ul className="list-none py-9">
          <li className="flex items-center gap-3 mb-2">
            <IoLocationOutline className="text-xl" />
            <span>Ahmedabad</span>
          </li>
          <li className="flex items-center gap-3">
            <div className="w-5 flex justify-center">
              <FaCircle style={{ fontSize: "10px", color: "green" }} />
            </div>
            <span>Available for new projects</span>
          </li>
        </ul>
        <ul className="flex justify-evenly sm:justify-start sm:gap-10 text-2xl sm:text-xl">
          <li className="p-1 hover:bg-black hover:text-white hover:rounded-md hover:shadow-md">
            <a href="https://github.com/nischaygadher15">
              <FiGithub />
            </a>
          </li>
          <li className="p-1 hover:bg-blue-600 hover:text-white hover:rounded-md hover:shadow-md">
            <a href="https://www.linkedin.com/in/nischay-gadher">
              <FaLinkedinIn />
            </a>
          </li>
          <li className="p-1 hover:bg-black hover:text-white hover:rounded-md hover:shadow-md">
            <a href="https://x.com/NGadher15">
              <BsTwitterX />
            </a>
          </li>
          <li className="p-1 hover:bg-blue-600 hover:text-white hover:rounded-md hover:shadow-md">
            <a href="https://www.facebook.com/nischay.gadher.1">
              <FaFacebookF />
            </a>
          </li>
          <li className="p-1 hover:bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 hover:text-white hover:rounded-md hover:shadow-md">
            <a href="https://www.instagram.com/gadhernischay/">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;
