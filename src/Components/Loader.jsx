import React from "react";
// import loader from "../assets/loader.gif";
import loader from "../assets/gearLoader.svg";

const Loader = (props) => {
  // #7DFF02
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-white dark:bg-black flex justify-center items-center">
      <div className="relative flex flex-col justify-between items-center">
        {/* Logo */}
        <div className="absolute top-0 -translate-y-[calc(100%+20px)] text-3xl sm:text-4xl lg:text-5xl text-black dark:text-white">
          <p className="font-bold text-nowrap">{`< NKG/>`}</p>
        </div>

        {/* Loader */}
        <img src={loader} alt="Loader GIF" className="w-10 md:w-11 lg:w-12" />
      </div>
    </div>
  );
};

export default Loader;
