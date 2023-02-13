import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Top10 from "./Pages/Top10";
import GetPhotosReferences from "./components/GetPhotosReferences";

// components
import Header from "./components/Header";


function App() {
  

  return (
    <div className="App">
      <Header />
      <Router>
        <nav className="flex flex-row gap-24 justify-center py-4 bord"   >
        
          <Link to="/" className="border-2 border-zinc-400 px-10 py-0.5 rounded bg-gray-300 shadow-xl ">Home</Link>
          <Link to="/aboutme" className="border-2 border-zinc-400 px-10 py-0.5 rounded bg-gray-300 shadow-xl ">About Me</Link>
          <Link to="/top10" className="border-2 border-zinc-400 px-10 py-0.5 rounded bg-gray-300 shadow-xl ">Top 10</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/top10" element={<Top10 />} />
        </Routes>
      </Router>
      <GetPhotosReferences />
    </div>
  );
}

export default App;
 