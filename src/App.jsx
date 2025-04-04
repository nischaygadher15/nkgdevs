import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Loader from "./Components/Loader";
import Experience from "./Components/Experience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);

    let pointer = document.querySelector("#pointer");
  }, []);

  let chasePointer = (posx, posy) => {
    gsap.to("#pointer", {
      x: posx,
      y: posy,
      duration: 1,
    });
  };

  let hidePointer = () => {
    gsap.to("#pointer", {
      scale: 0,
      display: "none",
      duration: 1,
    });
  };

  let showPointer = () => {
    gsap.to("#pointer", {
      display: "block",
      scale: 1,
      duration: 1,
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div
          className={`max-w-screen h-auto relative flex flex-col items-center ${
            loading ? "overflow-hidden" : "overflow-x-hidden"
          }`}
          id="mainBody"
          onMouseMove={(e) => {
            chasePointer(e.clientX + 3, e.clientY + 15);
          }}
          onMouseLeave={() => hidePointer()}
          onMouseEnter={() => showPointer()}
        >
          <div
            id="pointer"
            className="fixed top-0 left-0 w-5 h-5 bg-[#36B7F0] z-50 rounded-full"
          ></div>
          <header className="w-full bg-white fixed z-30 flex justify-center shadow-md">
            <Navbar />
          </header>

          <main className="container px-6">
            <Home />
            <Skills />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>

          <footer className="w-full px-6 sm:p-0">
            <div className="flex flex-col sm:flex-row justify-center text-center bg-gray-200 p-5 mt-5">
              <p className="sm:border-r-2 sm:border-gray-900 px-2">
                &copy; 2024
              </p>
              <p className="sm:border-r-2 sm:border-gray-900 px-2">
                Designed by :&nbsp;
                <a
                  href="https://www.figma.com/@shahsagarm"
                  className="underline underline-offset-2"
                >
                  Sagar Shah
                </a>
              </p>
              <p className="sm:border-r-2 sm:border-gray-900 px-2">
                Coded by: Nischay Gadher
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
}

export default App;
