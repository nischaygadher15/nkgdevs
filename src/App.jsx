import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Loader from "./Components/Loader";

function App() {
  let [loading, setLoading] = useState(true);
  let startLoadTime = Date.now();
  let startLoading = () => {
    // let difference = Date.now() - startLoadTime;
    // if (difference < 1000) {
    //   setTimeout(() => setLoading(false), parseInt(1000 - difference));
    // } else {
    //   setLoading(false);
    // }
  };

  useEffect(() => {
    // window.addEventListener("load", startLoading);
    // return () => window.removeEventListener("load", startLoading);
    setLoading(false);
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
        >
          <header className="w-full bg-white fixed z-30 flex justify-center shadow-md">
            <Navbar />
          </header>

          <main className="container px-6">
            <Home />
            <Skills />
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
