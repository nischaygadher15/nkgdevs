import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-full relative flex flex-col items-center">
      <header className="container p-4 sm:p-0 fixed">
        <Navbar className="w-full h-full" />
      </header>
      <main className="container p-4 sm:p-0 absolute" style={{ top: "64px" }}>
        <Home />
      </main>
      <footer className="container p-4 sm:p-0"></footer>
    </div>
  );
}

export default App;
