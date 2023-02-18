import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Top10 from "./Pages/Top10";

import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <nav className="flex flex-row gap-1 justify-center py-4 bord md:gap-24 " >
          <Link to="/" className="border-2 border-zinc-400 px-2 py-2 md:px-10 md:py-0.5 rounded bg-gray-300 shadow-xl ">
            Home
          </Link>
          <Link to="/aboutme" className="border-2 border-zinc-400 px-2 py-2 md:px-10 md:py-0.5 rounded bg-gray-300 shadow-xl ">
            About Me
          </Link>
          <Link to="/top10" className="border-2 border-zinc-400 px-2 py-2 md:px-10 md:py-0.5 rounded bg-gray-300 shadow-xl ">
            Top 10
          </Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/top10" element={<Top10 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
