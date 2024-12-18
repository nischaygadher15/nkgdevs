import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";
import { FaCircle, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import devPic from "../assets/nischay.jpg";
import { FiGithub } from "react-icons/fi";

const Home = () => {
  return (
    <section
      className="flex flex-col items-center sm:flex-row sm:justify-between gap-12"
      style={{
        height: "calc(100vh - 64px)",
      }}
    >
      {/* <============== Image File ============> */}
      <div className="w-full sm:w-2/5 flex flex-wrap justify-center items-center">
        <img
          src={devPic}
          alt="Dev Pic"
          className="w-3/5 md:w-4/5 ld:w-3/5 sm:h-3/5"
          style={{ boxShadow: "16px 16px 0px gray" }}
        />
      </div>

      {/* <============== Introduction Text ============> */}
      <div className="w-full sm:w-3/5 flex flex-col flex-wrap justify-center">
        <p className="text-5xl font-bold mb-4">Hi, I'm Nischay &#128591;</p>
        <p>
          I am a passionate Full-Stack Developer with expertise in crafting
          dynamic, scalable, and user-centric web applications. I specialize in
          both front-end and back-end development, seamlessly bridging the gap
          between design and functionality.
        </p>
        <ul className="list-none py-9">
          <li className="flex items-center gap-3">
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
        <ul className="flex gap-5 text-xl">
          <li>
            <a href="https://github.com/nischaygadher15">
              <FiGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/nischay-gadher">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="https://x.com/NGadher15">
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/nischay.gadher.1">
              <FaFacebookF />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Home;