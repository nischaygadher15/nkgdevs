import React from "react";
// import loader from "../assets/loader.gif";
import loader from "../assets/gearLoader.svg";

const Loader = (props) => {
  // #7DFF02
  return (
    <div className="absolute top-0 left-0 z-50 w-screen h-screen bg-white flex justify-center items-center">
      <div className="relative flex flex-col justify-between items-center gap-7">
        {/* Logo */}
        <div className="absolute top-0 -translate-y-[calc(100%+20px)] text-5xl">
          <p className="font-bold text-nowrap">{`< NKG/>`}</p>
        </div>

        {/* Loader */}
        <img
          src={loader}
          alt="Loader GIF"
          className="w-10 md:w-11 lg:w-14 xl:w-16"
        />
      </div>
    </div>
  );
};

export default Loader;
