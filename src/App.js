import React from "react";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

// components
import Header from "./components/Header";
import DestinationForm from "./components/DestinationForm";
import DestinationList from "./components/DestinationList";

function App() {
  const [destinations, setDestinations] = useState([]);

  const addDestination = (destination) => {
    setDestinations([...destinations, destination]);
  };

  return (
    <div className="App">
      <Header />
      <div className="DestinationForm">
        {" "}

        <DestinationForm addDestination={addDestination} />
        <DestinationList destinations={destinations} />
      </div>
    </div>
  );
}

export default App;
