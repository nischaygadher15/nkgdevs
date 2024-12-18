import React from "react";
import {
  FaBootstrap,
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const Skills = () => {
  return (
    <section className="h-screen px-24 flex flex-wrap flex-col justify-evenly">
      <div className="text-center">
        <p className="inline text-2xl px-3 py-1 rounded-s-full rounded-e-full bg-slate-500">
          Skills
        </p>
        <p className="mt-4 text-base">
          The Skills, tools and technologies I am good at:
        </p>
      </div>
      <ul className="px-24 grid grid-cols-4 text-7xl gap-x-24 gap-y-6">
        <li>
          <FaHtml5 className="mx-auto mb-2" />
          <p className="text-base text-center">HTML</p>
        </li>
        <li>
          <FaCss3 className="mx-auto mb-2" />
          <p className="text-base text-center">CSS</p>
        </li>
        <li>
          <FaBootstrap className="mx-auto mb-2" />
          <p className="text-base text-center">BOOTSTRAP</p>
        </li>
        <li>
          <RiTailwindCssFill className="mx-auto mb-2" />
          <p className="text-base text-center">TAILWIND</p>
        </li>
        <li>
          <FaJs className="mx-auto mb-2" />
          <p className="text-base text-center">JAVASCRIPT</p>
        </li>
        <li>
          <FaReact className="mx-auto mb-2" />
          <p className="text-base text-center">REACT</p>
        </li>
        <li>
          <SiRedux className="mx-auto mb-2" />
          <p className="text-base text-center">REDUX</p>
        </li>
        <li>
          <IoLogoFirebase className="mx-auto mb-2" />
          <p className="text-base text-center">FIREBASE</p>
        </li>
        <li>
          <FaGitAlt className="mx-auto mb-2" />
          <p className="text-base text-center">GIT</p>
        </li>
        <li>
          <VscVscode className="mx-auto mb-2" />
          <p className="text-base text-center">VS CODE</p>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
