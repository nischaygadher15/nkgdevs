import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <div className="w-full h-full relative flex flex-col items-center">
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
      <footer className="container px-6 sm:p-0">
        <div className="flex flex-col sm:flex-row justify-center text-center bg-gray-200 p-5 my-5">
          <p className="sm:border-r-2 sm:border-gray-900 px-2">&copy; 2024</p>
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
  );
}

export default App;
