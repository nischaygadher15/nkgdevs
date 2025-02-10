import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNode,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { DiMongodb } from "react-icons/di";

const Skills = () => {
  return (
    <section
      className="min-h-screen pt-24  flex flex-wrap flex-col justify-center"
      id="skills"
    >
      <div className="text-center my-7">
        <p className="inline text-2xl px-3 py-1 rounded-s-full rounded-e-full bg-slate-300">
          Skills
        </p>
        <p className="mt-4 text-base">
          The Skills, tools and technologies I am good at:
        </p>
      </div>
      <ul
        className="lg:px-24 grid grid-cols-3 sm:grid-cols-4 text-5xl sm:text-7xl sm:gap-x-9 md:gap-x-12
       gap-y-6"
      >
        <li>
          <FaHtml5 className="mx-auto mb-2" style={{ color: "#F16A30" }} />
          <p className="text-base text-center">HTML</p>
        </li>
        <li>
          <FaCss3 className="mx-auto mb-2" style={{ color: "#3B96D1" }} />
          <p className="text-base text-center">CSS</p>
        </li>
        <li>
          <FaBootstrap className="mx-auto mb-2" style={{ color: "#8512F7" }} />
          <p className="text-base text-center">BOOTSTRAP</p>
        </li>
        <li>
          <RiTailwindCssFill
            className="mx-auto mb-2"
            style={{ color: "#36B7F0" }}
          />
          <p className="text-base text-center">TAILWIND</p>
        </li>
        <li>
          <FaJs className="mx-auto mb-2" style={{ color: "#ECDA1D" }} />
          <p className="text-base text-center">JAVASCRIPT</p>
        </li>
        <li>
          <FaReact className="mx-auto mb-2" style={{ color: "#5ED3F3" }} />
          <p className="text-base text-center">REACT</p>
        </li>
        <li>
          <SiRedux className="mx-auto mb-2" style={{ color: "#7248B6" }} />
          <p className="text-base text-center">REDUX</p>
        </li>
        {/* <li>
          <IoLogoFirebase
            className="mx-auto mb-2"
            style={{ color: "#FFC400" }}
          />
          <p className="text-base text-center">FIREBASE</p>
        </li> */}
        <li>
          <FaNode className="mx-auto mb-2" style={{ color: "#7FC728" }} />
          <p className="text-base text-center">Node.js</p>
        </li>
        <li>
          <DiMongodb className="mx-auto mb-2" style={{ color: "#7FC728" }} />
          <p className="text-base text-center">MongoDB</p>
        </li>
        <li>
          <FaGitAlt className="mx-auto mb-2" style={{ color: "#E84E31" }} />
          <p className="text-base text-center">GIT</p>
        </li>
        <li>
          <VscVscode className="mx-auto mb-2" style={{ color: "#22A7EA" }} />
          <p className="text-base text-center">VS CODE</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
