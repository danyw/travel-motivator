import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import AboutMe from "./Pages/AboutMe";
import Top10 from "./Pages/Top10";

// components
import Header from "./components/Header";


function App() {
  

  return (
    <div className="App">
      <Header />
      <Router>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/aboutme">About Me</Link>
          <Link to="/top10">Top 10</Link>
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
