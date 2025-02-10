import React from "react";
import loader from "../assets/loader.gif";

const Loader = (props) => {
  return (
    <div className="absolute top-0 left-0 z-50 w-screen h-screen bg-white flex justify-center items-center">
      <img
        src={loader}
        alt="Loader GIF"
        className="w-9 md:w-11 lg:w-14 xl:w-16"
      />
    </div>
  );
};

export default Loader;
