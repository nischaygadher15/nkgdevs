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
import gsap from "gsap";

function App() {
  let [loading, setLoading] = useState(true);
  let [pointerTimer, setPointerTime] = useState(5);
  let [pointerTStatus, setPointerTStatus] = useState(false);
  let pointerTimer1;
  // let [scrollPercent, setScrollPercent] = useState(1);

  // <========= Chasing pointer Animation ==========>
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
      duration: 2,
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

  useEffect(() => {
    setTimeout(() => handlePointerText(false), 2500);
  }, []);

  let showPointer = () => {
    gsap.to("#pointer", {
      display: "block",
      scale: 1,
    });
  };

  // <========== Scroll Progress Bar  ===========>
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      let tdh = document.documentElement.scrollHeight; //Total Document Height
      let ch = document.documentElement.clientHeight; //Total Document Height
      let pyo = scrollY; //Total Document Height
      let scrollPercent = parseFloat(((pyo / (tdh - ch)) * 100).toFixed(2));
      gsap.to("#scrollProgress", {
        width: `${scrollPercent}%`,
      });
    });
  }, []);

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
              className="w-12 h-12 sm:w-7 sm:h-7"
            />
          </div>

          <header className="w-full bg-white fixed z-30 flex flex-col items-center shadow-md">
            <Navbar />
            <div className="w-full h-1 bg-white" id="scrollProgressTrack">
              <div
                className="w-0 h-full bg-[#70E40B] z-50"
                id="scrollProgress"
              ></div>
            </div>
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
