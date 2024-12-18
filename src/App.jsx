import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full relative flex flex-col items-center">
      <header className="w-full fixed z-50 flex justify-center shadow-md">
        <Navbar />
      </header>
      <main className="container px-6 sm:p-0">
        <Home />
        <Skills />
      </main>
      <footer className="container px-6 sm:p-0"></footer>
    </div>
  );
}

export default App;
