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
  let [pointerTimer, setPointerTime] = useState(5);
  let [pointerTStatus, setPointerTStatus] = useState(false);
  let pointerTimer1;

  let counting = async () => {
    let time = pointerTimer;
    while (time >= 0) {
      if (time == 1) handlePointerText(false);
      await new Promise((resolve) => {
        clearTimeout(pointerTimer1);
        pointerTimer1 = setTimeout(() => {
          time--;
          resolve();
        }, 1000);
      });
    }

    setPointerTStatus(false);
    hidePointer();
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  useEffect(() => {
    if (pointerTStatus) {
      counting();
    }
  }, [pointerTStatus]);

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
    });
  };

  let handlePointerText = (status) => {
    if (status) {
      // Show text
      gsap.to("#pointerText", {
        scale: 1,
        opacity: 1,
      });
    } else {
      // hide Text
      gsap.to("#pointerText", {
        scale: 0,
        opacity: 0,
      });
    }
  };

  let showPointer = () => {
    gsap.to("#pointer", {
      display: "block",
      scale: 1,
    });
    handlePointerText(true);
    setTimeout(() => handlePointerText(false), 1000);
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
            chasePointer(e.clientX, e.clientY);
            setPointerTStatus(true);
            if (pointerTStatus) counting();
            showPointer();
          }}
          onMouseLeave={() => hidePointer()}
        >
          {/* <============ Pointer ==========> */}

          {/* Mute Jumping Smily */}
          <div id="pointer" className="fixed top-0 left-2 z-50 bg-transparent">
            <small className="text-[10px] text-black" id="pointerText">
              I will follow you.
            </small>
            <img
              src="https://www.animatedimages.org/data/media/669/animated-jumping-smiley-image-0107.gif"
              border="0"
              alt="animated-jumping-smiley-image-0107"
              className="bg-transparent"
            />
          </div>

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
