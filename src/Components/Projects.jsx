import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import emart from "../assets/electronicmart1.png";
import citisensolor from "../assets/citizenSolor.png";
import foodwebsite from "../assets/foodwebsite.png";
import rugbywebsite from "../assets/rugbyWebsite.png";
import travelwebsite from "../assets/travelWebsite.png";
import portfolio from "../assets/portfolio.png";

const Projects = () => {
  return (
    <section
      className="min-h-screen pt-24 lg:px-24 flex flex-wrap flex-col justify-center"
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
      <ul>
        {/* Project 1 */}
        <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/2 sm:pe-5">
            <img src={emart} alt="Asstron Logo" className="w-full max-h-96" />
          </div>
          <div className="order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
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
                href="https://nkgemart.netlify.app/"
                className="flex flex-wrap items-center gap-2 rounded-md p-2 bg-blue-700 text-white"
              >
                Visit Site
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </li>

        {/* PORTFOLIO */}
        <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/2 sm:pe-5">
            <img
              src={portfolio}
              alt="Asstron Logo"
              className="w-full max-h-96"
            />
          </div>
          <div className="order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
            <p className="font-bold text-xl mb-3">My Portfolio</p>
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
                Tailwind Css
              </li>
            </ul>

            <div className="inline-block">
              <a
                href="https://nkgdevs.netlify.app/"
                className="flex flex-wrap items-center gap-2 rounded-md p-2 bg-blue-700 text-white"
              >
                Visit Site
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </li>

        {/* Project 2 */}
        {/* <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/2 sm:pe-5">
            <img
              src={citisensolor}
              alt="Asstron Logo"
              className="w-full max-h-96"
            />
          </div>
          <div className="order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
            <p className="font-bold text-xl mb-3">Citizen Solar</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              asperiores optio consequuntur cum dolor exercitationem, molestias
              inventore recusandae error quae eaque deleniti quidem fugit harum
              ad ut quisquam laborum perferendis.
            </p>
            <ul className="flex flex-wrap gap-2 my-5">
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                HTML
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                CSS
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Javascript
              </li>
            </ul>

            <div className="inline-block">
              <a
                href="https://nkgcitizensolar.netlify.app/"
                className="flex flex-wrap items-center gap-2 rounded-md p-2 bg-blue-700 text-white"
              >
                Visit Site
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </li> */}

        {/* Project 3 */}
        {/* <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/2 sm:pe-5">
            <img
              src={foodwebsite}
              alt="Asstron Logo"
              className="w-full max-h-96"
            />
          </div>
          <div className="order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
            <p className="font-bold text-xl mb-3">Food Website</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              asperiores optio consequuntur cum dolor exercitationem, molestias
              inventore recusandae error quae eaque deleniti quidem fugit harum
              ad ut quisquam laborum perferendis.
            </p>
            <ul className="flex flex-wrap gap-2 my-5">
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                HTML
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                CSS
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Javascript
              </li>
            </ul>

            <div className="inline-block">
              <a
                href="https://nkgfoodwebsite.netlify.app/"
                className="flex flex-wrap items-center gap-2 rounded-md p-2 bg-blue-700 text-white"
              >
                Visit Site
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </li> */}

        {/* Project 4 */}
        {/* <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/2 sm:pe-5">
            <img
              src={rugbywebsite}
              alt="Asstron Logo"
              className="w-full max-h-96"
            />
          </div>
          <div className="order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
            <p className="font-bold text-xl mb-3">Rugby Website</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              asperiores optio consequuntur cum dolor exercitationem, molestias
              inventore recusandae error quae eaque deleniti quidem fugit harum
              ad ut quisquam laborum perferendis.
            </p>
            <ul className="flex flex-wrap gap-2 my-5">
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                HTML
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                CSS
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Javascript
              </li>
            </ul>

            <div className="inline-block">
              <a
                href="https://nkgsportwebsite.netlify.app/"
                className="flex flex-wrap items-center gap-2 rounded-md p-2 bg-blue-700 text-white"
              >
                Visit Site
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </li> */}

        {/* Project 5*/}
        {/* <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/2 sm:pe-5">
            <img
              src={travelwebsite}
              alt="Asstron Logo"
              className="w-full max-h-96"
            />
          </div>
          <div className="order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
            <p className="font-bold text-xl mb-3">Traveler Website</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente
              asperiores optio consequuntur cum dolor exercitationem, molestias
              inventore recusandae error quae eaque deleniti quidem fugit harum
              ad ut quisquam laborum perferendis.
            </p>
            <ul className="flex flex-wrap gap-2 my-5">
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                HTML
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                CSS
              </li>
              <li className="inline text-md px-3 py-1 rounded-lg bg-slate-300">
                Javascript
              </li>
            </ul>

            <div className="inline-block">
              <a
                href="https://nkgtravelwebsite.netlify.app/"
                className="flex flex-wrap items-center gap-2 rounded-md p-2 bg-blue-700 text-white"
              >
                Visit Site
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </li> */}
      </ul>
    </section>
  );
};

export default Projects;
