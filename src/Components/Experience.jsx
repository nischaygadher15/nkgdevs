import React from "react";
import fps from "../assets/fpsmedia.png";

const Experience = () => {
  return (
    <section
      className="min-h-screen pt-24 flex flex-wrap flex-col justify-center bg-white"
      id="exps"
    >
      <div className="text-center my-7">
        <p className="inline text-2xl px-3 py-1 rounded-s-full rounded-e-full bg-slate-300">
          Experience
        </p>
        <p className="mt-4 text-base">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>

      {/* List of Companies */}
      <ul className="xl:px-24">
        {/* Company 1 */}
        <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 rounded-md mb-12 shadow-md">
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/3 sm:pe-5">
            <img
              src={fps}
              alt="FPS Media"
              className="w-full sm:w-1/2 md:w-full h-16"
            />
          </div>
          <div className="order-3 md:order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
            <p className="font-bold text-xl mb-3">
              MERN Stack Developer Intern
            </p>
            <ul className="list-disc ps-8">
              <li className="mb-3">
                <p>
                  Build website with React.js and style it with Tailwind, also
                  make responsive for all devices.
                </p>
              </li>
              <li className="mb-3">
                <p>
                  Develop and maintain web applications using MongoDB,
                  Express.js, and Node.js. Collaborate with the team on feature
                  implementation. Write clean, efficient code and troubleshoot
                  issues.
                </p>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3 w-full mb-4 md:mb-0 md:w-1/4 sm:px-5 text-left md:text-right text-lg">
            Feb 2024 to Present
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
