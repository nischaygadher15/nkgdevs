import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import emart from "../assets/electronicmart1.png";

const Projects = () => {
  return (
    <section
      className="min-h-screen lg:px-24 flex flex-wrap flex-col justify-center"
      id="project"
    >
      <div className="text-center my-7">
        <p className="inline text-2xl px-3 py-1 rounded-s-full rounded-e-full bg-slate-300">
          Projects
        </p>
        <p className="mt-4 text-base">
          Here some of the projects I have built:
        </p>
      </div>

      {/* List of Projects */}
      <ul className="xl:px-24">
        {/* Project 1 */}
        <li className="flex flex-col md:flex-row items-start p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/2 pe-5">
            <img src={emart} alt="Asstron Logo" className="w-full max-h-96" />
          </div>
          <div className="order-2 w-full mb-4 md:mb-0 md:w-1/2 px-5">
            <p className="font-bold text-xl mb-3">Electronic Mart</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              asperiores optio consequuntur cum dolor exercitationem, molestias
              inventore recusandae error quae eaque deleniti quidem fugit harum
              ad ut quisquam laborum perferendis.
            </p>
            <ul className="flex flex-wrap gap-2 my-5">
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                React
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Node
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Express
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                MongoDB
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Redux
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Tailwind Css
              </li>
            </ul>

            <div className="inline-block">
              <a
                href="#"
                className="flex flex-wrap items-center gap-2 rounded-md p-2 bg-blue-700 text-white"
              >
                Visit Site
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
