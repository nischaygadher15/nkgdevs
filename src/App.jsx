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
import { Bounce, ToastContainer } from "react-toastify";
import smiley from "./assets/smiley.gif";

function App() {
  let [loading, setLoading] = useState(true);
  let [darkTheme, setDarkTheme] = useState(true);
  let [pointerTimer, setPointerTime] = useState(5);
  let [pointerTStatus, setPointerTStatus] = useState(false);
  let pointerTimer1;

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
    let posXgap = 16;
    let posYgap = 70;

    gsap.to("#pointer", {
      x: posx - posXgap,
      y: posy - posYgap,
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

  useEffect(() => {
    console.log(`Loading: ${loading}`);
    if (loading) window.document.body.style.overflowY = "hidden";
    else window.document.body.style.overflowY = "scroll";
  }, [loading]);

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
      let ch = document.documentElement.clientHeight; //Document Height not including scroll padding height
      let pyo = scrollY; //Scroll document out of total height
      let scrollPercent = parseFloat(((pyo / (tdh - ch)) * 100).toFixed(2)); // Percent scrolled out of total height
      gsap.to("#scrollProgress", {
        width: `${scrollPercent}%`,
      });
    });
  }, []);

  // <============ Dark Theme ==============>
  useEffect(() => {
    console.log(darkTheme);
  }, [darkTheme]);

  return (
    <div className={`${darkTheme && "dark"}`}>
      <div
        className={`max-w-screen h-auto relative flex flex-col items-center dark:bg-black dark:text-white`}
        id="mainBody"
        onMouseMove={(e) => {
          chasePointer(e.clientX, e.clientY);
          setPointerTStatus(true);
          if (pointerTStatus) counting();
          showPointer();
        }}
        onMouseLeave={() => hidePointer()}
      >
        {loading && <Loader />}

        {/* <============ React Toast ==========> */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />

        {/* <============ Pointer ==========> */}
        <div
          id="pointer"
          className="fixed top-[75px] left-4 z-40 bg-transparent"
        >
          <small className="text-[10px]  dark:text-white" id="pointerText">
            I will follow you.
          </small>
          <img src={smiley} alt="Smiley" className="w-7 h-7" />
        </div>

        <header
          className="w-full bg-white dark:bg-black fixed z-30 flex flex-col items-center shadow-md
        shadow-gray-200 dark:shadow-[rgba(255,255,255,0.3)]"
        >
          <Navbar data={{ darkTheme, setDarkTheme }} />
          <div
            className="w-full h-1 bg-white dark:bg-black"
            id="scrollProgressTrack"
          >
            <div
              className="w-0 h-full bg-[#70E40B] z-50"
              id="scrollProgress"
            ></div>
          </div>
        </header>

        <main className="container px-4">
          <Home />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Contact func={{ loading, setLoading }} />
        </main>

        <footer className="w-full dark:border-t-2 dark:border-white">
          <div className="flex flex-col sm:flex-row justify-center text-center dark:text-white bg-gray-200 dark:bg-black p-5">
            <p className="sm:border-r-2 sm:border-gray-900 dark:border-white px-2">
              &copy; 2024
            </p>
            <p className="sm:border-r-2 sm:border-gray-900 dark:border-white px-2">
              Designed by :&nbsp;
              <a
                href="https://www.figma.com/@shahsagarm"
                className="underline underline-offset-2"
              >
                Sagar Shah
              </a>
            </p>
            <p className="sm:border-r-2 sm:border-gray-900 dark:border-white px-2">
              Coded by: Nischay Gadher
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
