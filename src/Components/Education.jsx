import React from "react";

const Education = () => {
  return (
    <section
      className="min-h-screen pt-24 flex flex-wrap flex-col justify-center bg-white dark:bg-black"
      id="edu"
    >
      <div className="text-center my-7">
        <p className="inline text-2xl px-3 py-1 rounded-s-full rounded-e-full bg-slate-300 dark:bg-white dark:text-black">
          Education
        </p>
        <p className="mt-4 text-base">
          Here, my some education qualifications:
        </p>
      </div>

      <ul className="xl:px-24">
        {/* Education 1 */}
        <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 dark:bg-black border-2 border-gray-100 rounded-md mb-12 shadow-md">
          <div className="w-full mb-4 md:mb-0 md:w-3/4 sm:px-5">
            <p className="font-bold text-xl mb-3">Full Stack Developer(MERN)</p>
            <p className="text-base mb-3 flex">
              Logicrays Acedemy, Ahmedadabad
            </p>
            <ul className="list-disc ps-8">
              <li className="mb-3">
                <b>React.js</b>: Component-based architecture, state management
                (Redux/Context API), routing with React Router, and API
                integration.
              </li>
              <li className="mb-3">
                <b>Node.js</b>: Event-driven server-side programming, RESTful
                API creation, middleware integration with <b>Express.js</b>.
              </li>
              <li className="mb-3">
                <b>MongoDB</b>: CRUD operations, schema design with Mongoose,
                and aggregation.
              </li>
              <li className="mb-3">Authentication and Authorization: JWT</li>
              <li className="mb-3">
                <b>Deployment</b>: Hosting applications on platforms like
                Vercel, Netlify.
              </li>
              <li className="mb-3">
                <b>Version Control</b>: Git and GitHub workflow.
              </li>
            </ul>
          </div>
          <div className="w-full mb-4 md:mb-0 md:w-1/4 px-5 text-left md:text-right text-lg">
            Dec 2023 to Oct 2024
          </div>
        </li>

        {/* Education 2 */}
        <li className="flex flex-col md:flex-row items-start p-4 sm:p-7 bg-gray-100 dark:bg-black border-2 border-gray-100 rounded-md mb-12 shadow-md">
          <div className="w-full mb-4 md:mb-0 md:w-3/4 sm:px-5">
            <p className="font-bold text-xl mb-3">Electrical Engineering</p>
            <p className="mb-3">
              Snajaybhai Rajguru College of Engineering, Rajkot
            </p>
          </div>
          <div className="w-full mb-4 md:mb-0 md:w-1/4 sm:px-5 text-left md:text-right text-lg">
            Jun 2012 to Jan 2017
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Education;
