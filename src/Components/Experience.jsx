import React from "react";
import hdfc from "../assets/hdfc.png";
import asstron from "../assets/asstron.png";

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
          <div className="order-1 w-full mb-4 md:mb-0 md:w-1/3 pe-5">
            <img
              src={asstron}
              alt="Asstron Logo"
              className="w-full sm:w-1/2 md:w-full h-16"
            />
          </div>
          <div className="order-3 md:order-2 w-full mb-4 md:mb-0 md:w-1/2 sm:px-5">
            <p className="font-bold text-xl mb-3">Client Service Executive</p>
            <ul className="list-disc ps-8">
              <li className="mb-3">
                <p>
                  As a Client Service Executive with Asstron E services, I had
                  responsibility to give our clients the best service related to
                  Medical & Dental Billing, Document Verification so we can
                  exceed client expectations.
                </p>
              </li>
              <li className="mb-3">
                <p>
                  I am well trained to work under stress with productivity,
                  great attention to detail, target oreinted and time bounded
                  manner.
                </p>
              </li>
            </ul>
          </div>
          <div className="order-2 md:order-3 w-full mb-4 md:mb-0 md:w-1/4 sm:px-5 text-left md:text-right text-lg">
            Dec 2023 to Dec 2024
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
